import * as express from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, requestParam, response } from "inversify-express-utils";
import { ICompanyCustomer } from "../models/Customer/CompanyCustomer";
import { CompanyCustomerService } from "../services/CompanyCustomerService";

@controller("/CompanyCustomer")
export class PrivateCustomerController {

    constructor(@inject("CompanyCustomerService") private companyCustomerService:CompanyCustomerService){}

    @httpGet("/all")
    private GetAllCustomers(req:express.Request):ICompanyCustomer[] {

        // Get Data from customerService
        return this.companyCustomerService.getAllCompanyCustomers();
    }

    @httpGet("/")
    private get(req:express.Request):string{
        return "CompanyCustomerController works!!";
    }

    @httpDelete("/:id")
    private delete(@requestParam("id") id: number, @response()  res: express.Response): ICompanyCustomer {

        return this.companyCustomerService.deleteCompanyCustomer(id);
    }

    @httpPost("/add")
    private add(req:express.Request, res:express.Response):  ICompanyCustomer[] {
        return this.companyCustomerService.add(req.body);
    }
}