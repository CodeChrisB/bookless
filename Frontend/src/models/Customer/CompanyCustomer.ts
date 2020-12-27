import { ContactPerson } from "../ContactPerson";

export interface ICompanyCustomer
{
    id : number;
    name : string;
    companyLocation : string;
    shippingAdress : IShippingAdress[];
    contactPersons : ContactPerson[];
}

export interface IShippingAdress
{
  adress:string
}
