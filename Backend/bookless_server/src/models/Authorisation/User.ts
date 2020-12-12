import e from "express";
import { userInfo } from "os";
import { basename } from "path";
import { arrayDataTypeMapping } from "ts-postgres";

export class User {

    constructor(   
        public id : number,
        public username: string,
        public email: string,
        public admin: boolean) {};

   /* constructor(id:number, username:string, email:string, admin:boolean, password: string){
        
        this.id = id || 0;
        this.username = username ||'';
        this.email = email || '';
        this.admin = admin ||false;
        this.password = password || ' ';
    }*/
}