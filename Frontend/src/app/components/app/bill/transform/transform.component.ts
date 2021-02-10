import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBillData } from 'src/models/bill/offer/OfferData';
import { TransformDialog } from 'src/models/bill/offer/TransformDialog';
import { OfferPdfService } from 'src/app/components/services/pdf/bills/offer/offer';
import { PdfTypeNames } from 'src/models/bill/PdfTypeName';
@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TransformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TransformDialog) {}
    currentSrc: any;
    currentTypeString="";

    ngOnInit(): void {
      console.clear()
      console.dir(this.data)
      this.currentTypeString = PdfTypeNames.getName(this.data.type);
      let ops = new OfferPdfService(this.data.offer);

      let doc = ops.create();
      let f = document.getElementById('currentPdf');
      let callback = function(url) { f.setAttribute('src', url); };
      doc.getDataUrl(callback, doc);
    }
}

