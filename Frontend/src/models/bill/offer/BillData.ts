import { IRawProduct } from "src/models/Product/RawProduct";

export interface IOfferData{
  customer:{
    name:string;
    stree:string;
    town:string;
    country:string
  }
  offer:{
    date:Date;
    id:string;
    administrator:string  //first+lastname
    name:string //of the order like Thermen-Wärmetauscher
  }
  prodcuts:IRawProduct[];
}
