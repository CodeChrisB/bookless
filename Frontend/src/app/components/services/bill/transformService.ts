import { PdfType } from "src/models/bill/PdfType";
import { Offer } from "../../app/bill/offer/listOffer/offer.component";
import { ConfirmationService } from "./ConfirmationService";
import { OfferService } from "./OfferService";

export class TransService {


  public static transform(data, type: PdfType) {
    switch(type){
      case PdfType.Confirmation : ConfirmationService.addconfirmation(data); break;
      case PdfType.Offer : OfferService.addOffer(data); break;
    }
  }

}


