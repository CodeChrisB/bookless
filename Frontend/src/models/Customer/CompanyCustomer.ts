import { ContactPerson } from '../ContactPerson';

export interface ICompanyCustomer
{
    id: number;
    name: string;
    uid: string;
    companyLocation: {
      town: string;
      plz: string;
      street: string;
      country: string;
    };
    shippingAdress: IShippingAdress[];
    contactPersons: ContactPerson[];
}

export interface IShippingAdress
{
  adress: string;
}
