import { User } from "../models/Authorisation/IUser";

export class LoginManager {
    users: Array<User> = new Array();
    
    constructor() {
        this.users = new Array<User>();
        
        this.users.push( new User(1,'test_User', 'test@gmail.com', true, 'testpass'));
    }

    public login(id:number, username:string, password:string): any {

        for (let index = 0; index < this.users.length; index++) {
            const u = this.users[index];
            
            if(u.username === username && u.id === id){
                if(u.password === password){
                    return this.users[index];
                } 
            }
        }

        return null;
    }
}