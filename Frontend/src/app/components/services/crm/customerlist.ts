import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer'
import { IStringId } from 'src/models/misc/IStringID';

var customers: IPrivateCustomer[] = [
    {id:1,fName:'Sebi',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:2,fName:'Chris',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:3,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:4,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:5,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:6,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:7,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:8,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:9,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:10,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:11,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:12,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:13,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:14,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:15,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:16,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:17,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:18,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:19,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:20,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:21,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}},
    {id:22,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m',customerLocation : {town :"Ansfelden",plz:"4052",street : "Ritzlhofstr.",country : "Österreich"}}
  ]

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
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
