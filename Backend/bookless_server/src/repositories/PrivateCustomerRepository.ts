import { exception } from "console";
import { Pool, QueryResult } from "pg";
import { createLogger, format, transports } from "winston";
import { IPrivateCustomer } from "../models/Customer/PrivateCustomer";
import Logger from '../loaders/logger';
import { pid } from "process";

export class PrivateCustomerRepository {

    public privateCustomers:IPrivateCustomer[];
    private pool:Pool =  new Pool({
        "host":process.env.DB_HOST, 
        "port":Number(process.env.DB_PORT),
        "user":process.env.DB_USER,
        "password":process.env.DB_PASSWORD, 
        "database":process.env.DB_DATABASE
    }); 

    constructor() {
        this.privateCustomers = [];
    }

    public get():IPrivateCustomer[]{
        Logger.info(this.privateCustomers)
        return this.privateCustomers;
    }

    public async updatePrivateCustomer(privateCustomer : IPrivateCustomer) : Promise<boolean> {
        try {
            await this.pool.query("update privateCustomer set adress=$1, phonenumber=$2, email=$3, fname=$4, lname=$5, gender=$6 where id=$7", [
                privateCustomer.adress,
                privateCustomer.phoneNumber,
                privateCustomer.email,
                privateCustomer.fName,
                privateCustomer.lName,
                privateCustomer.gender,
                privateCustomer.id,
            ]);
            Logger.info('PrivateCustomer' + privateCustomer.id +  'updated!');
        } catch {
            return false;
        }
        
        return true; 
    }

    public async getPrivateCustomer() : Promise<IPrivateCustomer[]>{
        
        try{
            this.privateCustomers = [];
            const result = await this.pool.query("select id, adress,phonenumber,email,fname,lname,gender from PrivateCustomer");
            Logger.info('Get privateCustomers from DB');
    
            for await (const row of result.rows) {
       
                this.privateCustomers.push( {
                    id:row.id,
                    adress:row.adress,
                    phoneNumber:row.phonenumber,
                    email:row.email,
                    fName:row.fname,
                    lName:row.lname,
                    gender:row.gender,
                });


            }

            Logger.info(this.privateCustomers[0].phoneNumber);
            return this.privateCustomers;
            
        } catch {
            return [];
        }
    }

    public async deletePrivateCustomer(id:number){
        try{
            this.privateCustomers.splice( this.privateCustomers.findIndex(v => v.id === id),1 );

            await this.pool.query('delete from privateCustomer where id = $1', [id]);
        } finally {

        }
    }

    public async addPrivateCustomer(privateCustomer:IPrivateCustomer):Promise<boolean>{
        let ret = true;
        try{ 
           const result:QueryResult<IPrivateCustomer> = await this.pool.query('insert into PrivateCustomer (adress,phoneNumber,email,fName,lName,gender ) values($1, $2, $3, $4, $5,$6)', 
           [
               privateCustomer.adress,
               privateCustomer.phoneNumber,
               privateCustomer.email,
               privateCustomer.fName,
               privateCustomer.lName,
               privateCustomer.gender
           ]);
    
           const insertId = await this.pool.query('select id, fname, lname from privateCustomer');

           Logger.info(insertId.rows[0].fname);
           

           return true;
        } catch {
            throw exception("Insert failed");
            return false
        }
    }
}