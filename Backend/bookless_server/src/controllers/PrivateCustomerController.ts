import * as express from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, requestParam, response } from "inversify-express-utils";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";
import { PrivateCustomerService } from "../services/PrivateCustomerService";

@controller("/PrivateCustomer")
export class PrivateCustomerController {

    constructor(@inject("PrivateCustomerService") private privateCustomerService:PrivateCustomerService){}

    @httpGet("/GetAll")
    private GetAllCustomers(req:express.Request):IPrivateCustomer[] {

        // Get Data from customerService
        return [];
    }

    @httpGet("/")
    private Get(req:express.Request):string{
        return "PrivateCustomerController works!!";
    }

    @httpDelete("/:id")
    private delete(@requestParam("id") id: number, @response()  res: express.Request): IPrivateCustomer {

        return this.privateCustomerService.deletePrivateCustomer(id);
    }
}