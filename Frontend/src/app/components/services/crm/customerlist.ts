import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../../models/Customer/PrivateCustomer';
import { IStringId } from 'src/models/misc/IStringID';

let customers: IPrivateCustomer[] = [
    {id: 1, fName: 'Mayer', lName: 'Knoll', adress: 'Buchweg 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 2, fName: 'Buchmayr', lName: 'Knoll', adress: 'Litzlstraße 13', phoneNumber: '0650254314', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 3, fName: 'Wiegl', lName: 'Knoll', adress: 'Limestraße 2', phoneNumber: '06502543215', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 4, fName: 'Rotkan', lName: 'Knoll', adress: 'Rotgasse 9', phoneNumber: '06502431441', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 5, fName: 'Auernig', lName: 'Knoll', adress: 'Ourway 12', phoneNumber: '06775413214', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 6, fName: 'Stropek', lName: 'Knoll', adress: 'Technikweg 4', phoneNumber: '06773241343', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 7, fName: 'Schroeder', lName: 'Knoll', adress: 'Staßenweg 3', phoneNumber: '06775346753', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 8, fName: 'Egga', lName: 'Knoll', adress: 'Bauernwegal 17', phoneNumber: '06774321431', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 9, fName: 'Aigner', lName: 'Knoll', adress: 'Warweg 5', phoneNumber: '06773421413', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 10, fName: 'Wokner', lName: 'Knoll', adress: 'Ritzlhofstraße 28', phoneNumber: '06773432813', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
    {id: 11, fName: 'Christopher', lName: 'Knoll', adress: 'Salamanderweg 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation : {town : 'Ansfelden', plz: '4052', street : 'Ritzlhofstr.', country : 'Österreich'}},
 ];

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  static getAllCustomers(): IPrivateCustomer[] {
    return customers;
  }

  static addPrivatCustomer(newCustomer: IPrivateCustomer)
  {
    newCustomer.id = customers.length + 1;
    customers.push(newCustomer);
  }

  static getCustomer(id: number){
    return customers.filter(a => a.id == id)[0];
  }

  static setCustomer(id: number, newCustomer: IPrivateCustomer){
    const index = customers.indexOf(customers.filter(a => a.id == id)[0]);
    customers[index] = newCustomer;
  }

  static removeCustomer(id: number){
    customers = customers.slice(id, id + 1);
  }

  static getPrivateCustomerIdList(): IStringId[]{
    let arr: IStringId[] = [];
    customers.forEach(c => arr.push({id: c.id, string: c.fName + ' ' + c.lName}));
    return arr;
  }



}
