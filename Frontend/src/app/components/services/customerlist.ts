import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../models/Customer/PrivateCustomer'

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
    {id:21,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'}
  ]

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  static getData(): IPrivateCustomer[] {
    return customers;
  }

  static addPrivatCustomer(newCustomer:IPrivateCustomer)
  {
    newCustomer.id = customers.length + 1;
    customers.push(newCustomer);
  }

  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

}
