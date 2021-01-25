import { exception } from "console";
import { text } from "express";
import { Client } from "ts-postgres";
import { ICompanyCustomer } from "../models/Customer/CompanyCustomer";

export class UserRepository {

    compCustomers:ICompanyCustomer[] = []
    private client:Client = new Client({
        "host":"database", 
        "port": 5432,
        "user": "user",
        "password":"pass", 
        "database":"booklessdb"
    }); 

    constructor() {
        
    }

    public async getAllCompCustomers() {
        await this.client.connect();
        try{
            this.compCustomers = [];
            
            const resultIterator = await this.client.query("select id, shippingAdress, contactPerson from compCustomers");
            console.log('Get compCustomers from DB');
    
            for await (const row of resultIterator) {
       
                /*this.compCustomers.push( {
                    id:Number(row.get("id")),
                    contactPersons
                });*/
            }

            console.log(this.compCustomers)
        } finally{
            await this.client.end();
        }
    }

    public async addCompanyCustomer(compCustomer:ICompanyCustomer){
        await this.client.connect();
        try{ 
           await this.client.query(`insert into compCustomers (id, shippingAdress,contactPersons ) values('${compCustomer.id}', '${compCustomer.shippingAdress}', '${compCustomer.contactPersons}')`);
        } catch {
            throw exception("Insert failed");
        } finally {
            await this.client.end();
        }
    }
}