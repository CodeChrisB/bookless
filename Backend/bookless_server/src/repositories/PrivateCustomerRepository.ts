import { exception } from "console";
import { Pool, QueryResult } from "pg";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";

export class PrivateCustomerRepository {

    public privateCustomers:IPrivateCustomer[] = [];
    private pool:Pool =  new Pool({
        "host":process.env.DB_HOST, 
        "port":Number(process.env.DB_PORT),
        "user":process.env.DB_USER,
        "password":process.env.DB_PASSWORD, 
        "database":process.env.DB_DATABASE
    }); 

    constructor() {

    }

    public get():IPrivateCustomer[]{
        //console.log(this.privateCustomers)
        return this.privateCustomers;
    }

    public async getPrivateCustomer() : Promise<IPrivateCustomer[]>{
        
        try{
            this.privateCustomers = [];
            const result:QueryResult<IPrivateCustomer> = await this.pool.query("select id, adress,phoneNumber,email,fName,lName,gender from PrivateCustomer");
            console.log('Get privateCustomers from DB');
    
            for await (const row of result.rows) {
       
                this.privateCustomers.push( {
                    id:row.id,
                    adress:row.adress,
                    phoneNumber:row.phoneNumber,
                    email:row.email,
                    fName:row.fName,
                    lName:row.lName,
                    gender:row.gender,
                });
            }

            
        } finally{
          
          console.log(this.privateCustomers)
          return this.privateCustomers;
        }
    }

    public async addPrivateCustomer(privateCustomer:IPrivateCustomer){

        try{ 
           await this.pool.query('insert into privateCustomer (adress,phoneNumber,email,fName,lName,gender ) values($1, $2, $3, $4, $5,$6)', 
           [
               privateCustomer.adress,
               privateCustomer.phoneNumber,
               privateCustomer.email,
               privateCustomer.fName,
               privateCustomer.lName,
               privateCustomer.gender
           ]);
        } catch { 
            throw exception("Insert failed");
        } finally {

        }
    }
}