import { ContactPerson } from "../ContactPerson";

export interface ICompanyCustomer
{
    id:number;
    shippingAdress : string[];
    contactPersons: ContactPerson[];
}