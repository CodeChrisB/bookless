import { exception } from "console";
import { text } from "express";
import { Client } from "ts-postgres";
import { IUser } from "../models/Authorisation/IUser";

export class UserRepository {

    users:IUser[] = []
    private client:Client = new Client({
        "host":"database", 
        "port": 5432,
         "user": "user",
        "password":"pass", 
        "database":"booklessdb"
    }); 

    constructor() {
        
    }

    public async getAllUsers() {
        await this.client.connect();
        try{
            this.users = [];
            
            const resultIterator = await this.client.query("select id, username, password from users");
            console.log('Get Users from DB');
    
            for await (const row of resultIterator) {
       
                this.users.push( {
                    id:Number(row.get("id")),
                    fname:String(row.get('fname')),
                    lname:String(row.get('lname'))
                });
            }

            console.log(this.users)
        } finally{
            await this.client.end();
        }
    }

    public async addUser(user:IUser){
        await this.client.connect();
        try{ 
           await this.client.query(`insert into users (username, password) values('${user.fname}', '${user.lname}')`);
        } catch {
            throw exception("Insert failed");
        } finally {
            await this.client.end();
        }
    }
}