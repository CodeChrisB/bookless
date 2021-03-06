import * as express from "express";
import { request } from "http";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPatch, httpPost, requestParam, response } from "inversify-express-utils";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";
import { PrivateCustomerService } from "../services/PrivateCustomerService";

@controller("/PrivateCustomer")
export class PrivateCustomerController {

    constructor(@inject("PrivateCustomerService") private privateCustomerService:PrivateCustomerService){}

    @httpGet("/all")
    private async getAllCustomers(req:express.Request) : Promise<IPrivateCustomer[]> {
        // Get Data from customerService
        
        return await this.privateCustomerService.getAllPrivateCustomers();;
    }
 
    @httpGet("/")
    private get(req:express.Request):string{ 
        return "PrivateCustomerController works!!";
    }

    @httpDelete("/:id")
    private delete(@requestParam("id") id: number, @response()  res: express.Response): any {

        return this.privateCustomerService.deletePrivateCustomer(id);
    } 

    @httpPost("/add")
    private add(req:express.Request, res:express.Response):  Promise<boolean> {
        return this.privateCustomerService.add(req.body);
    }
}