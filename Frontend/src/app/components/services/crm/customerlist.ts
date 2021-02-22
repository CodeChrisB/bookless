import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer'
import { IStringId } from 'src/models/misc/IStringID';

var customers: IPrivateCustomer[] = [
    {id:1,fName:'Sebi',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:2,fName:'Chris',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:3,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:4,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:5,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:6,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:7,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:8,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:9,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:10,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:11,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:12,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:13,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:14,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:15,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:16,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:17,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:18,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:19,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:20,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:21,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
    {id:22,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'}
  ]

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  http: HttpClient;
  public IPrivateCustomer;
  url: string = 'http://localhost:4200/app/crm/customer';
  
  static getAllCustomers(): IPrivateCustomer[] {
    return customers;
  }

  static addPrivatCustomer(newCustomer:IPrivateCustomer)
  {
    newCustomer.id = customers.length + 1;
    customers.push(newCustomer);
  }

  static getCustomer(id:number){
    return customers.filter(a=> a.id==id)[0];
  }

  static setCustomer(id:number,newCustomer:IPrivateCustomer){
    const index = customers.indexOf(customers.filter(a=> a.id==id)[0]);
    customers[index] = newCustomer;
  }

  static removeCustomer(id:number){
    customers = customers.slice(id,id+1);
  }

  static getPrivateCustomerIdList():IStringId[]{
    var arr : IStringId[] = [];
    customers.forEach(c=>arr.push({id:c.id,string:c.fName+" "+c.lName}))
    return arr;
  }



}
