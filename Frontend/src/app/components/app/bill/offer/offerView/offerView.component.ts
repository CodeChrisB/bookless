import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OfferPdfService } from 'src/app/components/services/pdf/bills/offer/offer';
import { RawProductService } from 'src/app/components/services/prodcut/rawProduct';
import { IRawProduct } from 'src/models/Product/RawProduct';


@Component({
selector: 'offer-component',
templateUrl: './offerView.component.html',
styleUrls: ['./offerView.component.css']
})



export class OfferView implements OnInit {

order : IRawProduct[];

constructor() {}



public downloadPdf(){
 const ops = new OfferPdfService(null)
 ops.download('Angebot.pdf')
}


public viewPdf(){
  const ops = new OfferPdfService(null)
  ops.open()
}

  ngOnInit(){
    this.order = RawProductService.getAllProducts()
    console.dir('dsf')
    console.dir(this.order)
  }
}
