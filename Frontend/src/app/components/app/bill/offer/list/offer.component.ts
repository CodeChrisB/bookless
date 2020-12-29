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


const offers: IOfferData[] = OfferService.getOffers();



@Component({
  selector: 'customer-component',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class Offer  {
  //init the data
  displayedColumns = ["number","date","cId","name","plz","town","street","brutto","status","actions"];

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

  showCustomer(row : IOfferData) {
   this.route.navigate(['/app/crm/customer/show'], { state: {mode:'show', id: row.offer.number } });
  }

  updateCustomer(row : IOfferData){
    console.dir(row)
    this.route.navigate(['/app/crm/customer/edit'], { state: {mode:'edit', id: row.offer.number } });
  }

  addCustomer(){
    this.route.navigate(['/app/crm/customer/new'] , { state: {mode:'add' } });
  }


  short( string:string,number:number){
    return StringShortener.Trim(string,number);
  }


  constructor(public dialog: MatDialog,private route :Router) {}

  deleteCustomer(row : IOfferData){
     if(confirm('Wollen Sie ' + row.offer.name +' löschen?')){
          this.length = this.dataSource.length;
          this.refresh();
     }
  }

  refresh() {
      this.dataSource = this.dataSource;
    }

    downloadPdf(row:IOfferData){
        var ops = new OfferPdfService(row)
        ops.download('Angebot.pdf');
    }

}
