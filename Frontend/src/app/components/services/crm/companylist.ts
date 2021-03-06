import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { ContactPerson } from 'src/models/ContactPerson';
import { IStringId } from 'src/models/misc/IStringID';


const companyCustomers : ICompanyCustomer[] = [
{id:12265,name:'ChrisGmbh',uid:'4321234562',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhofstraße 28',country:'Österreich'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],
contactPersons:[
  {id:1, adress:'Ritzlhof 28', phoneNumber:'067762390005',email:'chris@gmx.at', fName:'Chirstopher', lName:'Buchberger',companyRank:'Chef', gender:'M'},
  {id:1, adress:'Limes 24', phoneNumber:'067762390005',email:'chris.htl@at', fName:'Chris', lName:'Buchi',companyRank:'Schüler', gender:'M'},
  {id:1, adress:'Styrerweg 24', phoneNumber:'067762390005',email:'chris@rk.at', fName:'Christoph', lName:'Herr Buchberger',companyRank:'Sanitäter', gender:'M'}]},


{id:2,name:'Autech',uid:'4321234562',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhof 28',country:'Austria'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'egger.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:3,uid:'4321234562',name:'Stroptech',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhof 28',country:'Austria'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'chrizzly.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:4,uid:'4321234562',name:'BauTech CO',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhof 28',country:'Austria'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:5,uid:'4321234562',name:'TomTech',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhof 28',country:'Austria'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'wolf.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:6,uid:'4321234562',name:'Auernig Syp Gmbh',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhof 28',country:'Austria'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'franz.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:7,uid:'4321234562',name:'SchroTech',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhof 28',country:'Austria'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'hans.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
{id:8,uid:'4321234562',name:'Stropek Gmbh',companyLocation:{town:'Ansfelden',plz:'4052',street:'Ritzlhof 28',country:'Austria'},
shippingAdress:[{adress:'Vauweg 1'},{adress:'Htlweg 1'}],contactPersons:[{id:1, adress:'KA', phoneNumber:'4940300'
,email:'master.gemx.at', fName:'Hallo', lName:'Gewinne',companyRank:'Sales', gender:'M'}]},
]


@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor() {}
  getData(): ICompanyCustomer[] {
    return companyCustomers;
  }

  addCustomer(newCustomer:ICompanyCustomer)
  {
    newCustomer.id = companyCustomers.length + 1;
    companyCustomers.push(newCustomer);
  }

  getCustomer(id:number): ICompanyCustomer{
    return companyCustomers.filter(x=>x.id==id)[0];
  }

  updateCustomer(customer:ICompanyCustomer){
    companyCustomers.find(c => c.id==customer.id) == customer
  }

  getCompanyCustomerIdList():IStringId[]{
    var arr : IStringId[] = [];
    companyCustomers.forEach(c=>arr.push({id:c.id,string:c.name}))
    return arr;
  }




}
