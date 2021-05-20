import { inject, injectable } from "inversify";
import { ICompanyCustomer } from "../models/Customer/CompanyCustomer";
import {CompanyCustomerRepository} from "./../repositories/CompanyCustomerRepository"
@injectable()
export class CompanyCustomerService {

    private repo : CompanyCustomerRepository;

    constructor() {
        this.repo = new CompanyCustomerRepository();
    }
    //private companyCustomers : ICompanyCustomer[]  = [];
    add(compCustomer: ICompanyCustomer): Promise<boolean> {
        return this.repo.addCompanyCustomer(compCustomer);
    }
    
    public deleteCompanyCustomer(id:number):Promise<ICompanyCustomer[]>{
        this.deleteCompanyCustomer(id);
        return this.repo.getAllCompCustomers();
    }

    public getAllCompanyCustomers() : Promise<ICompanyCustomer[]> {
        return this.repo.getAllCompCustomers();
    }
} 