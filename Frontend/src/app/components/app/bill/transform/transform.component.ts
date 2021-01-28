import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IOfferData } from 'src/models/bill/offer/OfferData';
import { TransformDialog } from 'src/models/bill/offer/TransformDialog';
import pdfMake from 'pdfmake/build/pdfmake';
import { OfferPdfService } from 'src/app/components/services/pdf/bills/offer/offer';
@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TransformComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  TransformDialog) {}
    currentSrc:any;

    ngOnInit(): void {
      var ops = new OfferPdfService(this.data.offer)

      ops.create().getDataUrl(function (outDoc) {
        this.currentSrc = outDoc;
        alert(outDoc)
    });
  }
}

