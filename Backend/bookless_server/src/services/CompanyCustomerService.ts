import { inject, injectable } from "inversify";
import { ICompanyCustomer } from "../models/Customer/CompanyCustomer";

@injectable()
export class CompanyCustomerService {

    private companyCustomers : ICompanyCustomer[]  = [];
    add(privateCustomer: any): ICompanyCustomer[] {
        this.companyCustomers.push(privateCustomer);
        return this.companyCustomers; 
    }

    // privateCustomerRepo = new this.privateCustomerRepository();
    public deleteCompanyCustomer(id:number):ICompanyCustomer{

        //toDo: privateCustomerRepo.delete( ......
        const index = this.companyCustomers.findIndex(p => p.id == id);
        
        return this.companyCustomers.splice(index, 1)[0];

    }

    public getAllCompanyCustomers() : ICompanyCustomer[] {
        return this.companyCustomers;
    }
} 