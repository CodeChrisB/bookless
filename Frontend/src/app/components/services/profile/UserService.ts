import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer'
import { IUser } from 'src/models/Profile/User';
import { IPremissions } from 'src/models/Profile/Premissions';

var prems : IPremissions = {admin:true,dashboard:true,crm:true,bills:true,products:true};
var user: IUser = {name:'Chris',rank:'Boss',premissions:prems,image:null}

@Injectable({
  providedIn: 'root',
})
export class UserService {

    static getUser(id:number): IUser{
      return user;
    }

}


