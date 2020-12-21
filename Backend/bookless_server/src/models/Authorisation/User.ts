export class User {

    constructor(   
        public id : number,
        public username: string,
        public password: string) {};

   /* constructor(id:number, username:string, email:string, admin:boolean, password: string){
        
        this.id = id || 0;
        this.username = username || '';
        this.email = email || ' ';
        this.admin = admin ||false;
        this.password = password || '';
    }*/
}