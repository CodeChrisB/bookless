import { exception } from "console";
import { text } from "express";
import { Client } from "ts-postgres";
import { User } from "../models/Authorisation/User";

export class UserRepository {

    users:User[] = []
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
                
                this.users.push(new User( Number(row.get("id")), String(row.get('username')), String(row.get('password'))));
            }

            console.log(this.users)
        } finally{
            await this.client.end();
        }
    }

    public async addUser(user:User){
        await this.client.connect();
        try{ 
           await this.client.query(`insert into users (username, password) values('${user.username}', '${user.password}')`);
        } catch {
            throw exception("Insert failed");
        } finally {
            await this.client.end();
        }
    }
}