import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
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

  let msg ='Angebot\n\n'

// playground requires you to assign document definition to a variable called dd

var dd = {
	content: [
	    //powersolar block text
		{
			text: 'Angebot',
			style: 'blockHeader'
		},
		{
		    text:'Powersolar'+
		    '\nRitzlhofstraße 28'+
		    '\nTel +43-7229-81800',
		    style:'block'
		},
		{
		    text: 'office@power-solar.at',
		    link: 'office@power-solar.at',
		    style: 'link'
		},
		{
		    text: 'https://www.power-solar.at',
		    link: 'https://www.power-solar.at',
		    style: 'link'
		},

		//customer salutation
		{
		    text:'Angebot an-1/2020- Thermen-Wärmetauscher',
		    style:'bold'
		},
		{
		    text:'Sehr geehrter Herr Buchberger,\n',
		    style:'smallTopGap'
		},
		{
		    text: 'Herzlichen Dank für Ihr Intersse. Wie besprochen, erlauben wir uns Ihnen unverbindlich folgende Positionen anzubieten:',
		    style:'smallTopGap'
		},
        {
            style: 'productTable',
            table: {
				headerRows: 1,
				body: [
				    //header defintion
					[{text: 'Pos.', style: 'bold'},
					{text: 'Berzeichnung', style: 'bold'},
					{text: 'Menge', style: 'bold'},
					{text: 'Preis', style: 'bold'},
					{text: 'Gesamt', style: 'bold'}],
					//the rows todo add the products dynamically

					['45a', 'Zc-42', '3', '250€', '750€'],
					['46b', 'Zc-43', '2', '350€', '700€'],
					['27a', 'Zc-44', '1', '450€', '450€'],
					['17c', 'Zc-45', '1', '600€', '600€'],


					//2300
				]
			},
			layout: 'headerLineOnly'
        },
		],
	styles: {
	    productTable:{
	      	margin: [0, 5, 0, 15]
	    },
	    link:{
	         margin: [330, 0, 0, 0],
	         color:'blue',
	         decoration: 'underline'
	    },
	    blockHeader: {
			fontSize: 14,
			alignment: 'left',
		    margin: [330, 0, 0, 0]
	    },
	    block:{
	        fontSize: 12,
			alignment: 'left',
		    margin: [330, 0, 0, 0]
	    },
		header: {
			fontSize: 18,
			bold: true
		},
		bold:{
		    bold: true
		},
		subheader: {
			fontSize: 15,
			bold: true
		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 8
		},
		smallTopGap: {
		    margin:[0,10]
		}
	}
}
  pdfMake.createPdf(dd).download('Angebot.pdf')

}


public viewPdf(){

  const documentDefinition = { content: 'Das ist eine Rechnung'};
  pdfMake.createPdf(documentDefinition).open()

}

  ngOnInit(){
    this.order = RawProductService.getAllProducts()
    console.dir('dsf')
    console.dir(this.order)
  }
}
