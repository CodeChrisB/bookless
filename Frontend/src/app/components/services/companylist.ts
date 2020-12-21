import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IPrivateCustomer} from '../../../models/Customer/PrivateCustomer'
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { ContactPerson } from 'src/models/ContactPerson';

/*
id : number;
    companyId : number;
    adress : string;
    phoneNumber : string;
    email : string;
    fName : string;
    lName : string;
    gender : string;
*/

const companyCustomers : ICompanyCustomer[] = [{id:1,name:'ChrisGmbh', 
companyLocation:'Ansfelden',shippingAdress:['Ansfelden','Wolfern'],
contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300',
email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]}]
 

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  static getData(): ICompanyCustomer[] {
    return companyCustomers;
  }

  static addPrivatCustomer(newCustomer:ICompanyCustomer)
  {
    newCustomer.id = companyCustomers.length + 1;
    companyCustomers.push(newCustomer);
  }


}