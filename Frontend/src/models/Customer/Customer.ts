class Customer
{
    id : number;
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
