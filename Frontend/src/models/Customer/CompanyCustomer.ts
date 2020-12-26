import { ContactPerson } from "../ContactPerson";

export interface ICompanyCustomer
{
    id : number;
    name : string;
    companyLocation : string;
    shippingAdress : string[];
    contactPersons : ContactPerson[];
}
