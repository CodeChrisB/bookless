export class Customer
{
    id : number;
    adress : string;

    public getId(): number {
        return this.id;
    }

    public setId(_id: number): void {
        this.id = _id;
    }

    public getAdress(): string {
        return this.adress;
    }

    public setAdress(_adress: string): void {
        this.adress = _adress;
    }
}