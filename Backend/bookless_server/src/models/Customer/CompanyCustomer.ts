import { IContactPerson } from "../ContactPerson";

export interface ICompanyCustomer
{
    id : number;
    name : string;
    uid:string;
    companyLocation : {
      town : string;
      plz:string;
      street : string;
      country : string;
    };
    shippingAdress : IShippingAdress[];
    contactPersons : IContactPerson[];
}

export interface IShippingAdress
{
  adress:string
}