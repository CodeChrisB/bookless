import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer'
import { IStringId } from 'src/models/misc/IStringID';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  url: string = environment.url + 'PrivateCustomer';
  http: HttpClient;
  customers:IPrivateCustomer[];

  constructor(http: HttpClient) {
    this.http = http;
    this.customers = [];
  } 

  async getAllCustomers(): Promise<IPrivateCustomer[]> {
    return this.http.get<IPrivateCustomer[]>(this.url + '/all').toPromise();
  }

  async addPrivatCustomer(newCustomer:IPrivateCustomer):Promise<void>
  {
    //this.customers.push(newCustomer);
    const body = JSON.stringify(newCustomer);
    console.log(newCustomer);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { 
      headers: headers
    }
    this.http.post<boolean>(this.url + ('/add'), body, options).toPromise();
  }

  getCustomer(id:number):IPrivateCustomer{
    console.log(this.customers);
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