import { inject, injectable } from "inversify";
import { readRowData } from "ts-postgres/dist/src/protocol";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";
import { PrivateCustomerRepository } from "../repositories/PrivateCustomerRepository";

@injectable()
export class PrivateCustomerService {

    private repo : PrivateCustomerRepository;

    constructor(){
        this.repo = new PrivateCustomerRepository();
    }
    
    add(privateCustomer: IPrivateCustomer): Promise<boolean> {
        return this.repo.addPrivateCustomer(privateCustomer); 
    }

    // privateCustomerRepo = new this.privateCustomerRepository();
    public deletePrivateCustomer(id:number){
        this.repo.deletePrivateCustomer(id);
    }

    public async getAllPrivateCustomers() : Promise<IPrivateCustomer[]> {

        return this.repo.getPrivateCustomer();
    }
} 