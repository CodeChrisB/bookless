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
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import { CompanyService } from 'src/app/components/services/crm/companylist';
import { HttpClient } from '@angular/common/http';


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

  showOffer(row : IOfferData) {
    var ops = new OfferPdfService(row, this.customerService, this.companyService)
    ops.open();
  }

  updateOffer(row : IOfferData){
    console.dir(row)
    this.route.navigate(['/app/sales/offer/edit'], { state: {mode:'edit', id: row.offer.number } });
  }

  addOffer(){
    this.route.navigate(['/app/sales/offer/new'] , { state: {mode:'add' } });
  }


  short( string:string,number:number){
    return StringShortener.Trim(string,number);
  }


  constructor(public dialog: MatDialog,private route :Router, public companyService:CompanyService, public customerService:CustomerService) {}

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

    downloadPdf(row:IOfferData){
        var ops = new OfferPdfService(row, this.customerService, this.companyService);
        ops.download('Angebot.pdf');
    }

}
