import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { IEmailData } from 'src/models/email/emailData';
import { EmailHandler } from 'src/app/components/services/tools/emailHandler';
import { StringShortener } from 'src/app/components/services/tools/StringShortner';
import { IOfferData } from 'src/models/bill/offer/OfferData';
import { OfferService } from 'src/app/components/services/bill/OfferService';
import { OfferPdfService } from 'src/app/components/services/pdf/bills/offer/offer';
import { TransformComponent } from '../../transform/transform.component';
import { PdfType } from 'src/models/bill/PdfType';
import { PdfService } from 'src/app/components/services/pdf/bills/PdfService';


const offers: IOfferData[] = OfferService.getOffers();



@Component({
  selector: 'customer-component',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class Offer  {
  //init the data
  displayedColumns = ["number","date","cId","name","plz","town","street","brutto","status","transform","actions"];
  constructor(public dialog: MatDialog,private route :Router) {}

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

   // MatPaginator Inputs
   length = offers.length;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10,25,100];
   dataSource = offers.slice(0,this.pageSize);
   pageIndex = 0
   goToPage($event){
     this.length = $event.length;
     this.pageSize =$event.pageSize;
     this.dataSource = offers.slice(this.pageSize* $event.pageIndex,this.pageSize* $event.pageIndex+this.pageSize);
     this.pageIndex = $event.pageIndex;
    }


  changeFinishedColor(finished : IOfferData)
  {
      finished.offer.stages.finished =! finished.offer.stages.finished;
  }

  changeOfferColor(offer : IOfferData)
  {
    offer.offer.stages.offer =! offer.offer.stages.offer;
  }

  changeOrderColor(order : IOfferData)
  {
    order.offer.stages.order =! order.offer.stages.order;
  }

  changeBillColor(bill : IOfferData)
  {
    bill.offer.stages.bill =! bill.offer.stages.bill;
  }

  updateOffer(row : IOfferData){
    console.dir(row)
    this.route.navigate(['/app/sales/offer/edit'], { state: {mode:'edit', id: row.offer.number } });
  }

  addOffer(){
    this.route.navigate(['/app/sales/offer/new'] , { state: {mode:'add' } });
  }

  transform(offer:IOfferData){
    console.dir(offer)
    const dialogRef = this.dialog.open(TransformComponent, {
      height: '90%',
      width: '80%',
      data:{offer:offer,type:PdfType.Offer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  short( string:string,number:number){
    return StringShortener.Trim(string,number);
  }



  deleteOffer(row : IOfferData){
     if(confirm('Wollen Sie ' + row.offer.name +' löschen?')){
        OfferService.deleteOffer(row.offer.number)
        this.length = this.dataSource.length;
        this.dataSource =  OfferService.getOffers()
     }
  }

  refresh() {
      this.dataSource = this.dataSource;
    }


    showOffer(row : IOfferData) {
      PdfService.OpenPdf(row,PdfType.Offer)
    }

    downloadPdf(row:IOfferData){
      PdfService.DownloadPdf(row,PdfType.Offer)
    }

}
