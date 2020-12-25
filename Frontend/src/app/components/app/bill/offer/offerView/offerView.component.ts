import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
selector: 'offer-component',
templateUrl: './offerView.component.html',
styleUrls: ['./offerView.component.css']
})
export class OfferView implements OnInit {

@ViewChild('content') content: ElementRef;

constructor() {
}

public downloadPdf(){

  const documentDefinition = { content: 'Das ist eine Rechnung'};
  pdfMake.createPdf(documentDefinition).download('Angebot.pdf')

}


public viewPdf(){

  const documentDefinition = { content: 'Das ist eine Rechnung'};
  pdfMake.createPdf(documentDefinition).open()

}

ngOnInit(){

}
}
