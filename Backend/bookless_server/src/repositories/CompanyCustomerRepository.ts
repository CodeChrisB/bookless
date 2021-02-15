import { Pool } from "pg";
import { IContactPerson } from "../models/ContactPerson";
import { ICompanyCustomer, IShippingAdress } from "../models/Customer/CompanyCustomer";
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    
    format: format.combine(
      format.splat(),
      format.simple()
    ),
    transports: [new transports.Console()]
});

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
            logger.log('info' , this.compCustomers)
        } finally{

            return this.compCustomers;
        }
    }

    public async addCompanyCustomer(compCustomer:ICompanyCustomer){
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

            // get id 
            const insertID = await this.pool.query('select id from CompanyCustomer WHERE name LIKE $1',
            [
                compCustomer.name
            ]);


            // insert addresses
            for(const item of compCustomer.shippingAdress){
                await this.pool.query('insert into Address (companyCustomerID, address) values($1,$2)',
                [
                    insertID.rows[0].id,
                    item.adress
                ]);
            }

            // insert contactPersons
            for(const item of compCustomer.contactPersons){
                await this.pool.query('insert into ContactPerson (companyCustomerID,adress, phoneNumber, email, companyRank, firstName, lastName, gender) values($1,$2,$3,$4,$5,$6,$7,$8)',
                [
                    insertID.rows[0].id,
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
            logger.log('exception', 'Insert failed into CompanyCustomers faild');
        } finally {

        }
    }
}