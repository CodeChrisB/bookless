class Customer
{
    id : number;
    name : string;
    adress : string;

    public getId(): number {
        return this.id;
    }

    public setId(_id: number): void {
        this.id = _id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(_name: string): void {
        this.name = _name;
    }

    public getAdress(): string {
        return this.adress;
    }

    public setAdress(_adress: string): void {
        this.adress = _adress;
    }


}

class PrivatCustomer extends Customer
{
    phoneNumber : number;
    fName : string;
    lName : string;
    email: string;
    gender : string;

    public getPhoneNumber(): number {
        return this.phoneNumber;
    }

    public setPhoneNumber( _phoneNumber: number): void {
        this.phoneNumber = _phoneNumber;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(_email: string): void {
        this.email = _email;
    }

    public getFName(): string {
        return this.fName;
    }

    public setFName(_fName: string): void {
        this.fName = _fName;
    }

    public getLName(): string {
        return this.lName;
    }

    public setLName(_lName: string): void {
        this.lName = _lName;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(_gender: string): void {
        this.gender = _gender;
    }



}

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

class ContactPerson
{
    phoneNumber : number;
    email : string;
    fName : string;
    lName : string;
    gender : string;

    public getPhoneNumber(): number {
        return this.phoneNumber;
    }

    public setPhoneNumber( _phoneNumber: number): void {
        this.phoneNumber = _phoneNumber;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(_email: string): void {
        this.email = _email;
    }

    public getFName(): string {
        return this.fName;
    }

    public setFName(_fName: string): void {
        this.fName = _fName;
    }

    public getLName(): string {
        return this.lName;
    }

    public setLName(_lName: string): void {
        this.lName = _lName;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(_gender: string): void {
        this.gender = _gender;
    }


    

    



}
