import { IRawProduct } from "src/models/Product/RawProduct";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { IOfferData } from "src/models/bill/offer/OfferData";
import { off } from "process";
import { IPdfTableProduct } from "src/models/Product/PdfTableProduct";
import { of } from "rxjs";
import { CompanyService } from "../../../crm/companylist";
import { DateFormatter } from "../../../tools/dateFormatter";
import { CustomerService } from "../../../crm/customerlist";
import { UserService } from "../../../profile/UserService";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class OfferPdfService{

  offer



  public products: Array<string[]> = [['Pos.','Bezeichnung','Menge','Preis','Gesamt']]
  total:number=0;
  constructor(offer:IOfferData){
    this.offer = offer.offer;

    //format the prodcuts into a string array for the table
    offer.prodcuts.forEach(p=>{
      this.products.push(
        [p.product.productId.toString()
        ,p.product.description,p.amount.toString()+" Stk."
        ,this.numberFormatter(p.product.price.toFixed(2).toString())+"€"
        ,this.numberFormatter((p.amount*p.product.price).toFixed(2).toString())+"€"])
      this.total+=(p.amount*p.product.price)
    });

    //fill in all the data in the pdf structrue
    this.initData(offer.offer.customerId,offer.offer.isCompany);
  }

  //the biggest problem is the two different type of customers
  //to fit the diffrent variables into a single document
  pdfData = {
    leftBlock:{
      sentTo:'',
      street:'',
      town:'',
      plz:'',
      country:'',
    },
    rightBlock:{
      date:null,
      orderNr:'',
      projectName:'',
      possibleDelivery:null,
      uid:'',
      consultant:{
        name:'',
        phone:'',
        fax:'',
        email:''
      },
      customerId:''
    },
    upperTextBlock:{
      orderName:'',
      salutation:'',
    },
    prodcuts:null
  }

  /*
    MAX PRODUCTS PAGE

    FIRST: 15
    EVERY OTHER
    LAST

  */


  initData(id:number,isCompany:boolean){

    //rightblock static data
    var user = UserService.getUser(this.offer.consultantId)
    this.pdfData.rightBlock.date = this.offer.date;
    this.pdfData.rightBlock.orderNr = this.offer.number;
    this.pdfData.rightBlock.projectName = this.offer.projectName;
    this.pdfData.rightBlock.consultant.name = user.fname +" "+user.lname
    this.pdfData.rightBlock.consultant.phone =user.phone
    this.pdfData.rightBlock.consultant.fax = user.fax
    this.pdfData.rightBlock.consultant.email = user.email

    //upperTextBlock static data
    this.pdfData.upperTextBlock.orderName = this.offer.name;


    if(isCompany){
      var customer = CompanyService.getCustomer(id);
      //leftblock
      this.pdfData.leftBlock.sentTo = customer.name;
      this.pdfData.leftBlock.street = customer.companyLocation.street;
      this.pdfData.leftBlock.town  = customer.companyLocation.plz.concat(" ",customer.companyLocation.town);
      this.pdfData.leftBlock.country = customer.companyLocation.country;
      this.pdfData.leftBlock.plz = customer.companyLocation.plz;

      //rightblock
      this.pdfData.rightBlock.customerId = 'FK-'+this.offer.customerId;
      this.pdfData.rightBlock.uid = this.offer.uid;

      //upperTextBlock
      this.pdfData.upperTextBlock.salutation = 'Sehr geehrtes Team von ' +customer.name+',\n';

    }else{
      var privateCustomer = CustomerService.getCustomer(id);
      //leftblock
      this.pdfData.leftBlock.sentTo = privateCustomer.fName;
      this.pdfData.leftBlock.street = privateCustomer.customerLocation.street;
      this.pdfData.leftBlock.town  = privateCustomer.customerLocation.plz+" "+privateCustomer.customerLocation.town;
      this.pdfData.leftBlock.country =  privateCustomer.customerLocation.country;

      //rightblock
      this.pdfData.rightBlock.customerId = 'PK-40000';
      this.pdfData.rightBlock.uid = 'PK-OUID-EVK' //Private Kunde Ohne UID Einmal VerKauf

      //upperTextBlock
      this.pdfData.upperTextBlock.salutation = 'Sehr geehrte'+(privateCustomer.gender == 'm' ? 'r Herr' : ' Frau')+' ' +privateCustomer.lName+',';

    }

    this.fillInData()
    console.dir(this.pdfData)
  }

  //prints a number with commas as thoudsands separators
  numberFormatter(num:string){
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  download(name:string){
    pdfMake.createPdf(dd).download(name)
  }

  open(){
    pdfMake.createPdf(dd).open()
  }

  fillInData(){
    dd = {
      content: [
          //powersolar image
          {
              image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAChCAMAAAAGPL1IAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMAUExURenp6fsAXPQoet7e3oeHhwAAANbW1v///6632f5loeHh4RYWFri4uCVCotnZ2fzo8/nH3oODg+bm5mRkZPz8/FdXDrW1tXeFu2hoD8/Pz4yYxfiWw5ulxry8vCwsDPZZmf//BsnJyejoDUNDQ/VxqYmJibKysvT2+u7u7tjXDP7+Cvr6+o2Njf6GtVJSUq2trSwsLP4AX/Y1gkpKStHR0TdRrOjq8/f3+Ghoaf//A9TX6MDAwKWlpfrc65GRkaCgoH5+fllZWpaWlsTExKioqHFxcZycnTo6O/70+fX19ZmZmXh4eWFhYW5ubl1dXezs7PLy8nV1dVVVVWd3tvrS5SIiI/Dw8EdgsvdAiv77/ZWj0qGgDvPz8/aSvTIyMvJinP+ixcLCwsLCDvrM4R48of8AY/hMkx47o8nO4f//AZSUEfX1Cvu92vi11JycD/ocdb6+EPqqzcnIELi3EImJEICNv/ri7kNZrPkUbv6JtgsLC8fHx9/k8dnZEYGBEDFLpsHH3/oAYLnA2P3v9R47pPm32Pq6109PT/kLaKmoEPqkyfSFsvh9rx8eC//9/nR0EPYAXvwBZuDgDf74+150uk1ND8/T4vwAYvHy99/h7Flrs/qLuCI/ohw6o/kBZO6Pt/WMufvX6PS/1VZprfanyu/w9vwCZj4+P1FRVfYKYgQEBR08pP78/R06oA0NFF9fYDY2N6urq2dnZ0ZGRnNzcx47oScnKP8AZm9vb1dXV/fA2ZSUlPgHZcHBwR0dHvkDYvaItwkJCExMTB87nhs4ow8PCU1NTR87of4BZv8AZ/4AZv4BZ/4AZx47oB86ov8BZvT0+P39/QgHDBEREvj5+x87oHx8fPv7EP4CZ9zc3P8BaPn6/AcHBxo3oPYOaBw8o/kPa+Pj405isUxMTvzf7o+Pj+/vC9TU1Bw5ooaGiOtPje5VksvLy8zMzLCwsM/PENjY2C4uLvj4CouLi2tra/ewzvsHaEA/DrCwEfj2DHd3dw8PDsPDw/mv0Hp6ev///3JDj74AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAkcUlEQVR42u2dC1xU1534gWHQzBB0YCSSZBSCshOG8HDMApXAAIqCyCuBakJIrYxTk7bGvHRhoyGxJU0DDTHJ/NPEtOkDdsc0IAiEUMlyu47j+CrSZcsubUM3xvL/i9HI1nyC9e4593Hu+84dwP1nhvmlxZk7d+7cc77n/M7v9zu/c24QHhAJeW/Rh7+4ZQWUW1Z8eN8LflSyoABcUTmw7V82//qVBncaFHtr8K/3LL/jgWb/gv7GndKycOHC57725m/18wj5hl+ENKRZ3W5XLyFu+H9rWsP2D5v9CfqD/7pfSmwHuw/96je37tv949se/Npv54Ve3xXS8PuzvQI5YW/YvniLH0E/Y5OS2tra7m7bcdv+g7ba39x723Pp/s78vs0NrpaWXhFxtVjT/u8z/gP937o9iI34c/x47e47f+fXzP+2x+3ulRbrzvv8BvrxboVy5uChP3/Lf5Ev+GmwtVdOzp794wPzDnp37fE/vX273zJ/Oc3lkoXe67Lat8076FDL77/t7/wT+sPBZ3s9ivWf75uH0LttB3/+f/yR+bdfafHMvNfl3rlhPkLv3u+P1N99xd2rRFxpK+YhdCD77/e/kEyItdeliHpv8APzEvrxWn+z5hZsTzuhFLp1c/N8hA6wP+df0D9p+H2vUjkVvHh+Qj+0+5f+1dGtipn3ulo3L5iX0G37n/avjv4fArYtVuvJFqu7pfWk4CNfdtZnAb12/61v+hH0lwUd3WptWLXillseWfWiXagEWpf7IfTj9IRLN5xwEZPT3X/wI1vuQAjXRXe5rB/fcd8B+NGWT76zuaGF7835sK8uAd1We+u+e4n/bn2722b7kzh3mx919W0fcaC7TlpDWPNpW3YF88I27oYP/a6n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',
              width: 200,
              style:'right'
          },
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
        //customer block text
        {
            text:this.pdfData.leftBlock.sentTo
        },
        {
            text:this.pdfData.leftBlock.town
        },
        {
            text:this.pdfData.leftBlock.street
        },
        {
            text:this.pdfData.leftBlock.country
        },

        //order data
       {
          columns: [
              { width: '*', text: '' },
              {
                  width: 'auto',
                  fontSize: '10',
                      table: {
                              body: [
                                      [
                                        {
                                          text:'Angebotsinformationen',
                                          border: [true, true, false, true],
                                          fillColor: '#cccccc'
                                        },
                                        {
                                          text:'',
                                          border: [false, true, true, true],
                                          fillColor: '#cccccc'
                                        }
                                      ],
                                      [
                                        {
                                          text:'Angebotsnummer',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:this.pdfData.rightBlock.orderNr,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Datum',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text: DateFormatter.getDateAsString(this.pdfData.rightBlock.date),
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Kundennummer',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:this.pdfData.rightBlock.customerId,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Anfrage',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:this.pdfData.rightBlock.projectName,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Mögl. Liefertermin',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:DateFormatter.getDateAsString(this.pdfData.rightBlock.possibleDelivery),
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'UID Nummer',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:this.pdfData.rightBlock.uid,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Sachbearbeiter/-in',
                                          border: [true, true, false, true],
                                          fillColor: '#cccccc'
                                        },
                                        {
                                          text:'',
                                          border: [false, true, true, true],
                                          fillColor: '#cccccc',
                                        }
                                      ],
                                      [
                                        {
                                          text:'Name',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text: this.pdfData.rightBlock.consultant.name,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Telefon',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:this.pdfData.rightBlock.consultant.phone,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Fax',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:this.pdfData.rightBlock.consultant.fax,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'E-Mail',
                                          border: [true, false, false, false]
                                        },
                                        {
                                          text:this.pdfData.rightBlock.consultant.email,
                                          border: [false, false, true, false]
                                        }
                                      ],
                                      [
                                        {
                                          text:'Gültigkeit ',
                                          border: [true, false, false, true]
                                        },
                                        {
                                          text:'2 Monate ab Erstellung',
                                          border: [false, false, true, true]
                                        }
                                      ],
                              ]
                      },

              }
          ]
      },


        //customer salutation
        {
            text:'Angebot an ' +this.pdfData.upperTextBlock.orderName,
            style:'bold'
        },
        {
            text: this.pdfData.upperTextBlock.salutation,
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
            widths:['10%','30%','20%','20%','20%'],
            body:  this.products
          },
          layout: 'headerLineOnly'
            },
            {
                canvas: [
                   {
                       type: 'line',
                       x1: 0, y1: 5,
                       x2: 515, y2: 5,
                       lineWidth: 1
                   }
               ]
            },
            {
                style: 'productTable',
                table: {
            headerRows: 1,
            widths:['20%','20%','20%','20%','20%'],
            body: [
                //header defintion
                [
                '',
                '',
                '',
                'Summe',
                this.numberFormatter(this.total.toFixed(2).toString()) +"€"
                ],
            ]
          },
          layout: 'noBorders'
            },
              {
                canvas: [
                   {
                       type: 'line',
                       x1: 0, y1: 5,
                       x2: 515, y2: 5,
                       lineWidth: 1
                   }
               ]
            },
            {
                style: 'productTable',
                table: {
            headerRows: 1,
            widths:['20%','20%','20%','20%','20%'],
            body: [
                //header defintion
                [
                '',
                '',
                '',
                'Ust',
                this.numberFormatter((this.total*0.16).toFixed(2))+'€'
                ],
              //the rows todo add the products dynamically
              ['', '', '', 'Brutto', this.numberFormatter((this.total*1.16).toFixed(2).toString())+'€']
            ]
          },
          layout: 'noBorders'
            },
            {
                canvas: [
                   {
                       type: 'line',
                       x1: 370, y1: 5,
                       x2: 515, y2: 5,
                       lineWidth: 1
                   }
               ]
            },
            {
                text:'\nWir würden uns freuen Ihren Auftrag zu erhalten. Bei Fragen zögern Sie nicht uns zu kontaktieren.\n'+
                'Mit freundlichen Grüßen\n\n'+this.pdfData.rightBlock.consultant.name
            },
            {
                text:'POWER SOLAR Wärmetauscher AUSTRIA · Ritzlhofstrasse 28 · Österreich 4052 Ansfelden'+
                '\nUID-Nummer : ATU 69449849',
                style:'footer'
            }
        ],
      styles: {
          right:{
              alignment: 'right'
          },
          footer:{
             fontSize: 8,
             alignment: "center" ,
             margin: 20
          },
          productTable:{
              margin: [0, 5, 0, 0],
              alignment: 'right',
          },
          link:{
               margin: [330, 0, 0, 0],
               color:'blue',
               decoration: 'underline'
          },
          blockHeader: {
          fontSize: 14,
          alignment: 'left',
            margin: [330, 10, 0, 0]
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
  }

}

var dd = {}


