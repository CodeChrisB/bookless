import { Pool, QueryResult } from "pg";
import { IContactPerson } from "../models/ContactPerson";
import { ICompanyCustomer, IShippingAdress } from "../models/Customer/CompanyCustomer";
import Logger from '../loaders/logger';
import e from "express";


export class CompanyCustomerRepository {

    compCustomers:ICompanyCustomer[] = []
    private pool:Pool =  new Pool({
        "host":process.env.DB_HOST, 
        "port":Number(process.env.DB_PORT),
        "user":process.env.DB_USER,
        "password":process.env.DB_PASSWORD, 
        "database":process.env.DB_DATABASE
    }); 

    constructor() { 
        
    }

    public async deleteCompCustomer(id:number){
        try {
            await this.pool.query('delete from CompanyCustomer where id = $1', [id]);
        } finally {
            
        }
    }

    public async getAllCompCustomers():Promise<ICompanyCustomer[]> {

        try{
            this.compCustomers = [];

            const result = await this.pool.query('select id,name, uid, town, plz, street, country from CompanyCustomer');

            for(const item of result.rows){
                const shipingAddressesToAdd:IShippingAdress[] = []; 
                const addresses = await this.pool.query('select id, companyCustomerID, adress from Address where companyCustomerID = $1', 
                [
                    item.id
                ]);

                addresses.rows.forEach(element => {
                    shipingAddressesToAdd.push({adress: element.adress});
                });

                const contactPersonsToAdd:IContactPerson[] = [];

                const contactPersons = await this.pool.query('select companyCustomerID,adress, phoneNumber, email, companyRank, firstName, lastName, gender from ContactPerson where companyCustomerID = $1', 
                [
                    item.id
                ]);

                contactPersons.rows.forEach(element => {
                    contactPersonsToAdd.push({
                        id:element.id,
                        adress: element.adress,
                        phoneNumber: element.phoneNumber,
                        companyRank: element.companyRank,
                        email: element.email,
                        fName: element.firstName,
                        lName: element.lastName,
                        gender: element.gender
                    })
                });

                this.compCustomers.push({
                    id: item.id,
                    name: item.name,
                    uid:item.uid,
                    companyLocation : {
                        town: item.town,
                        plz: item.plz,
                        street: item.street, 
                        country: item.country
                    },
                    shippingAdress: shipingAddressesToAdd,
                    contactPersons: contactPersonsToAdd
                });
            }
            Logger.log('info' , this.compCustomers)
        } finally{

            return this.compCustomers;
        }
    }

    public async addCompanyCustomer(compCustomer:ICompanyCustomer) : Promise<boolean>{
        try{ 

             await this.pool.query('insert into CompanyCustomer (name, uid, town, plz, street, country) values($1,$2,$3,$4,$5,$6)',
            [
                compCustomer.name,
                compCustomer.uid,
                compCustomer.companyLocation.town,
                compCustomer.companyLocation.plz,
                compCustomer.companyLocation.street,
                compCustomer.companyLocation.country 
            ]); 

            const insertId = await this.pool.query('SELECT LASTVAL()');
    
            // insert addresses
            for(const item of compCustomer.shippingAdress){
                await this.pool.query('insert into Address (companyCustomerID, adress) values($1,$2)',
                [
                    insertId.rows[0].lastval,
                    item.adress
                ]);
            }

            // insert contactPersons
            for(const item of compCustomer.contactPersons){
                await this.pool.query('insert into ContactPerson (companyCustomerID,adress, phoneNumber, email, companyRank, firstName, lastName, gender) values($1,$2,$3,$4,$5,$6,$7,$8)',
                [
                    insertId.rows[0].lastval,
                    item.adress,
                    item.phoneNumber,
                    item.email,
                    item.companyRank, 
                    item.fName,
                    item.lName,
                    item.gender
                ]);
            }

        } catch {
            return false;
            
        } finally {

            return true;

        }
    }
}