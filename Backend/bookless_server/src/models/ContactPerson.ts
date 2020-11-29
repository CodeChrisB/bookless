export class ContactPerson 
{
    phoneNumber : number = 0;
    email : string = '';
    firstName : string = '';
    lastName : string = '';
    gender : string = 'f';

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
        return this.firstName;
    }

    public setFName(_firstName: string): void {
        this.firstName = _firstName;
    }

    public getLName(): string {
        return this.lastName;
    }

    public setLName(_lastName: string): void {
        this.lastName = _lastName;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(_gender: string): void {
        this.gender = _gender;
    }
}