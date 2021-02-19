import { IBillData } from 'src/models/bill/offer/OfferData';
import {PdfType} from '../../../../../models/bill/PdfType';
import {OfferPdfService} from '../../../services/pdf/bills/offer/offer';
import { ConfirmationPdfService } from './confirmation/confirmation';


export class PdfService{


  // the generic download method
  public static DownloadPdf(data: any, type: PdfType){
    switch (type){
      case PdfType.Offer :
      this.downloadOffer(data);
      break;
      case PdfType.Confirmation:
        this.downloadConfirmation(data)
      break;
    }
  }

  // the generic open method
  public static OpenPdf(data: any, type: PdfType){
    switch (type){
      case PdfType.Offer :
      this.openOffer(data);
      break;
    }
  }

  // offer
  private static downloadOffer(data: IBillData){
    let ops = new OfferPdfService(data);
    ops.download('Angebot.pdf');
  }

  private static openOffer(data: IBillData){
    let ops = new OfferPdfService(data);
    ops.download('Angebot.pdf');
  }

  // confirmation
  private static downloadConfirmation(data: IBillData){
    let ops = new ConfirmationPdfService(data);
    ops.download('Bestätigung.pdf');
  }

  private static openConfirmation(data: IBillData){
    let ops = new ConfirmationPdfService(data);
    ops.download('Angebot.pdf');
  }




}
