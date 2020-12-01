import { Customer } from "./Customer";

class CompanyCustomer extends Customer
{
    shippingAdress : string[];
    contactPersons : ContactPerson[];

    public getShippingAdress(): string[] {
        return this.shippingAdress;
    }

    public setShippingAdress(_shippingAdress: string[]): void {
        this.shippingAdress = _shippingAdress;
    }

    public getContactPersons(): ContactPerson[] {
        return this.contactPersons;
    }

    public setContactPersons(_contactPersons: ContactPerson[]): void {
        this.contactPersons = _contactPersons;
    }


}
