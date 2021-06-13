import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IBillData } from "src/models/bill/offer/OfferData";
import { PdfType } from "src/models/bill/PdfType";
import { Offer } from "../../app/bill/offer/listOffer/offer.component";
import { ConfirmationService } from "./ConfirmationService";
import { OfferService } from "./OfferService";

@Injectable()
export class TransService {
  constructor(public route: Router) {}


  public transform(data:IBillData, type: PdfType) {
    switch(type){
      case PdfType.Confirmation :
        data.offer.stages.order=true;
        ConfirmationService.addconfirmation(data);
        this.route.navigate(['/app/sales/confirmation'])
      break;
      case PdfType.Offer :
        data.offer.stages.order=true;
        OfferService.addOffer(data);
        this.route.navigate(['/app/sales/offer'])
      break;
    }
  }

}


