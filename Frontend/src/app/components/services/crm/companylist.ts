import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { ContactPerson } from 'src/models/ContactPerson';


const companyCustomers : ICompanyCustomer[] = [
{id:1,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
{id:2,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
{id:3,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
{id:4,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
{id:5,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
{id:6,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
{id:7,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
{id:8,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne', gender:'M'}]},
]


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
