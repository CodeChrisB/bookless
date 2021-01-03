import { IBillProduct } from "src/models/Product/BillProduct";

export interface IOfferData{

  offer:{
    number:number;
    date:Date;
    customerId:number;
    uid:string;
    projectName:string;
    isCompany:boolean;
    name:string;
    plz:string;
    town:string;
    street:string;
    bruttoValue:number;
    status:string;
    possibleDelivery:Date;
    consultantId:number;
    stages:{
      offer:boolean;
      order:boolean;
      bill:boolean;
      finished:boolean;
      canceld:boolean;
    }
  }
  prodcuts:IBillProduct[];
}
