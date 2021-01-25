import { exception } from "console";
import { Client } from "ts-postgres";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";

export class PrivateCustomerRepository {

    public privateCustomers:IPrivateCustomer[] = [];
    private client:Client =  new Client({
        "host":"database", 
        "port": 5432,
        "user": "user",
        "password":"pass", 
        "database":"booklessdb"
    }); 

    constructor() {

        this.client.connect()
    }

    public get():IPrivateCustomer[]{
        //console.log(this.privateCustomers)
        return this.privateCustomers;
    }

    public async getPrivateCustomer() : Promise<IPrivateCustomer[]>{
        
        try{
            this.privateCustomers = [];
            const resultIterator = await this.client.query("select id, adress,phoneNumber,email,fName,lName,gender from PrivateCustomer");
            console.log('Get privateCustomers from DB');
    
            for await (const row of resultIterator) {
       
                this.privateCustomers.push( {
                    id:Number(row.get("id")),
                    adress:String(row.get('adress')),
                    phoneNumber:String(row.get('phoneNumber')),
                    email:String(row.get('email')),
                    fName:String(row.get('fName')),
                    lName:String(row.get('lName')),
                    gender:String(row.get('gender')),
                });
            }

            
        } finally{
          
          console.log(this.privateCustomers)
          return this.privateCustomers;
        }
    }

    public async addPrivateCustomer(privateCustomer:IPrivateCustomer){

        try{ 
           await this.client.query(`insert into privateCustomer (adress,phoneNumber,email,fName,lName,gender ) 
           values('${privateCustomer.adress}', '${privateCustomer.email}', '${privateCustomer.email}', '${privateCustomer.email}', '${privateCustomer.email}', '${privateCustomer.gender}')`);
        } catch { 
            throw exception("Insert failed");
        } finally {
            await this.client.end();
        }
    }
}