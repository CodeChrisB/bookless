import { inject, injectable } from "inversify";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";

@injectable()
export class PrivateCustomerService {

    private privateCustomers : IPrivateCustomer[]  = [];
    add(privateCustomer: any): IPrivateCustomer {
        this.privateCustomers.push(privateCustomer);
        return privateCustomer; 
    }

    // privateCustomerRepo = new this.privateCustomerRepository();
    public deletePrivateCustomer(id:number):IPrivateCustomer{

        //toDo: privateCustomerRepo.delete( ......
        const index = this.privateCustomers.findIndex(p => p.id == id);
        
        return this.privateCustomers.splice(index, 1)[0];

    }

    public getAllPrivateCustomers() : IPrivateCustomer[] {
        return this.privateCustomers;
    }
} 