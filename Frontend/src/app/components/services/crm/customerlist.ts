import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer'
import { IStringId } from 'src/models/misc/IStringID';;


@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  url: string = 'http://localhost:3000/PrivateCustomer';
  http: HttpClient;
  public customers:any;

  constructor(http: HttpClient) {
    this.http = http;
  } 

    async getAllCustomers(): Promise<IPrivateCustomer[]> {
      return this.http.get<IPrivateCustomer[]>(this.url + '/all').toPromise();
    
    }

  async addPrivatCustomer(newCustomer:IPrivateCustomer)
  {
    this.customers.push(newCustomer);
    const body = JSON.stringify(newCustomer);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { 
      headers: headers
    }
    this.http.post<boolean>(this.url + ('/add'), body, options);
  }

  getCustomer(id:number){
    return this.customers.filter(a=> a.id==id)[0];
  }

  setCustomer(id:number,newCustomer:IPrivateCustomer){
    const index = this.customers.indexOf(this.customers.filter(a=> a.id==id)[0]);
    this.customers[index] = newCustomer;
  }

  removeCustomer(id:number):Promise<boolean>{
    return this.http.delete<boolean>(this.url + "/"+id).toPromise();
  }

   getPrivateCustomerIdList():IStringId[]{
    var arr : IStringId[] = [];
    this.customers.forEach(c=>arr.push({id:c.id,string:c.fName+" "+c.lName}))
    return arr;
  }
}