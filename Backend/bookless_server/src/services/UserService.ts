import { text } from "express";
import { Client } from "ts-postgres";
import { User } from "../models/Authorisation/User";

export class UserRepository {

    users:User[] = []

    constructor() {}

    public async getAllUsers() {
        const client = new Client({
            "host":"database", 
            "port": 5432,
             "user": "user",
            "password":"pass", 
            "database":"booklessdb"
        });
        await client.connect();
        try{
            const resultIterator = await client.query("select id, name, password from product");
            console.log('Get Users from DB');
    
            for await (const row of resultIterator) {
                this.users.push(new User( Number(row.get('id')), String(row.get('name')), String(row.get('password'))));
            }
        } finally{
            await client.end();
        }
    }
}