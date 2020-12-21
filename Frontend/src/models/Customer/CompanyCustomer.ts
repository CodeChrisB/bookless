<<<<<<< HEAD
import { ContactPerson } from "../ContactPerson";

=======
>>>>>>> 456d0a03286bfff7468f05cfa60a17ad11d64ff1
export interface ICompanyCustomer
{
    id : number;
    name : string;
    companyLocation : string;
    shippingAdress : string[];
    contactPersons : ContactPerson[];

}
