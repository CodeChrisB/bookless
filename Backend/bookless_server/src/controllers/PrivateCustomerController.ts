import * as express from "express";
import { request } from "http";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPatch, httpPost, requestBody, requestParam, response } from "inversify-express-utils";
import { isPrimitive } from "util";
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
    private add(req:express.Request):  Promise<boolean> {
        return this.privateCustomerService.add(req.body);
    }

    @httpPost("/update")
    private update(req:express.Request, res:express.Response): Promise<boolean>{
        const privateCustomer : IPrivateCustomer = {
            id : req.body.id,
            adress : req.body.adress,
            phoneNumber : req.body.phoneNumber,
            email: req.body.email,
            fName : req.body.fName,
            lName : req.body.lName, 
            gender : req.body.gender,
            
        };

        return this.privateCustomerService.updatePrivateCustomer(privateCustomer);
    }
}