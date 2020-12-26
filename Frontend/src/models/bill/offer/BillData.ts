import { IRawProduct } from "src/models/Product/RawProduct";

export interface IOfferData{

  offer:{
    number:number;
    date:Date;
    customerId:number;
    name:string;
    plz:string;
    town:string;
    street:string;
    bruttoValue:number;
    status:string;
    administrator:{
      firstname:string;
      lastname:string;
    }
    stages:{
      /*
      Stages define the current state of a order
      for example the bill boolean will be true if we sent the customer a bill
      the finished boolean when this interaction with the customer is finished
      */
      offer:boolean;
      order:boolean;
      bill:boolean;
      finished:boolean;
      canceld:boolean;
    }
  }
  prodcuts:IRawProduct[];
}

/*

*/
