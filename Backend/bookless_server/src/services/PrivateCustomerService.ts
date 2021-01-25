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
    add(privateCustomer: IPrivateCustomer): Promise<IPrivateCustomer[]> {
        this.repo.addPrivateCustomer(privateCustomer);
        return this.repo.getPrivateCustomer(); 
    }

    // privateCustomerRepo = new this.privateCustomerRepository();
    public deletePrivateCustomer(id:number):IPrivateCustomer[]{
        return [];
    }

    public getAllPrivateCustomers() : Promise<IPrivateCustomer[]> {

        return this.repo.getPrivateCustomer();
    }
} 