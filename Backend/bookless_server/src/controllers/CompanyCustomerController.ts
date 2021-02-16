import * as express from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, requestParam, response } from "inversify-express-utils";
import { ICompanyCustomer } from "../models/Customer/CompanyCustomer";
import { CompanyCustomerService } from "../services/CompanyCustomerService";

@controller("/CompanyCustomer")
export class CompanyCustomerController {

    constructor(@inject("CompanyCustomerService") private companyCustomerService:CompanyCustomerService){}

    @httpGet("/all")
    private GetAllCustomers(req:express.Request):Promise<ICompanyCustomer[]> {

        // Get Data from customerService
        return this.companyCustomerService.getAllCompanyCustomers();
    }

    @httpGet("/")
    private Get(req:express.Request):string{ 
        return "PrivateCustomerController works!!";
    }

    @httpDelete("/:id")
    private delete(@requestParam("id") id: number, @response()  res: express.Response): Promise<ICompanyCustomer[]> {

        return this.companyCustomerService.deleteCompanyCustomer(id);
    }

    @httpPost("/add")
    private add(req:express.Request, res:express.Response):  Promise<ICompanyCustomer[]> {
        return this.companyCustomerService.add(req.body);
    }
}