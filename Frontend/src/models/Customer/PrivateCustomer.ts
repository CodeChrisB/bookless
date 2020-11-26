
class PrivateCustomer extends Customer
{
    phoneNumber : string;
    email: string;
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

