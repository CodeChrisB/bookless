import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IOfferData } from 'src/models/bill/offer/OfferData';
import { TransformDialog } from 'src/models/bill/offer/TransformDialog';
import { OfferPdfService } from 'src/app/components/services/pdf/bills/offer/offer';
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

    ngOnInit(): void {
      let ops = new OfferPdfService(this.data.offer);

      let doc = ops.create();
      let f = document.getElementById('currentPdf');
      let callback = function(url) { f.setAttribute('src', url); };
      doc.getDataUrl(callback, doc);
    }
}

