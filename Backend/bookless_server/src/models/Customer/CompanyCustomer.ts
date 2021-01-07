import { ContactPerson } from "../ContactPerson";

export interface CompanyCustomer
{
    shippingAdress : string[];
    contactPersons: ContactPerson[];
}