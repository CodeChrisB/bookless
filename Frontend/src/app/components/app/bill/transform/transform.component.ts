import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBillData } from 'src/models/bill/offer/OfferData';
import { TransformDialog } from 'src/models/bill/offer/TransformDialog';
import { OfferPdfService } from 'src/app/components/services/pdf/bills/offer/offer';
import { PdfTypeNames } from 'src/models/bill/PdfTypeName';
import { PdfService } from 'src/app/components/services/pdf/bills/PdfService';
import { PdfType } from 'src/models/bill/PdfType';
import { OfferService } from 'src/app/components/services/bill/OfferService';
import { ConfirmationService } from 'src/app/components/services/bill/ConfirmationService';

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
    transformedType:PdfType = null;

    ngOnInit(): void {
      console.clear()
      console.dir(this.data)
      this.currentTypeString = PdfTypeNames.getName(this.data.type);
      let ops = PdfService.CreatePdf(this.data.billData,this.data.type)
      
      let doc =  PdfService.CreatePdf(this.data.billData,this.data.type)
      let f = document.getElementById('currentPdf');
      let callback = function(url) { f.setAttribute('src', url); };
      doc.getDataUrl(callback, doc);
    }

    save(){
      switch(this.transformedType){
        case PdfType.Offer:
          OfferService.addOffer(this.data.billData)
        break;
        case PdfType.Confirmation:
          ConfirmationService.addconfirmation(this.data.billData)
        break;
      }

      this.dialogRef.close()
    }



    transformConfirmation(){
      let doc =  PdfService.CreatePdf(this.data.billData,PdfType.Confirmation)
      let f = document.getElementById('transformedPdf');
      let callback = function(url) { f.setAttribute('src', url); };
      doc.getDataUrl(callback, doc);
      this.transformedType=PdfType.Confirmation
    }
}

