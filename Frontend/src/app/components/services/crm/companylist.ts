import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { ContactPerson } from 'src/models/ContactPerson';


const companyCustomers : ICompanyCustomer[] = [
{id:1,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Ansfelden','Wolfern'],
contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'chris.gmx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},


{id:2,name:'EggerGmbh',companyLocation:'Ansfelden',
shippingAdress:['Linz','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'egger.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:3,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Leonding','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'chrizzly.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:4,name:'Hadien CO',companyLocation:'Ansfelden',
shippingAdress:['New York','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:5,name:'RobertDB',companyLocation:'Ansfelden',
shippingAdress:['No idea','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'wolf.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:6,name:'Auernig Syp Gmbh',companyLocation:'Ansfelden',
shippingAdress:['Ritzlweg 28','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'franz.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:7,name:'ChrisGmbh',companyLocation:'Ansfelden',
shippingAdress:['Cadner 21','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:8,name:'Stropek Gmbh',companyLocation:'Ansfelden',
shippingAdress:['Vaustraße 1','Wolfern'],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'master.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
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
