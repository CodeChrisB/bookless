import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/components/services/customerlist';
import {IPrivateCustomer} from '../../../../../../models/Customer/PrivateCustomer'








@Component({
selector: 'customer-component',
templateUrl: './addCustomer.component.html',
styleUrls: ['./addCustomer.component.css','../../../../css/forms.css']
})
export class addCustomer  {
  customer={
    "fName":"",
    "lName":"",
    "gender":"",
    "phone":"",
    "email":"",
    "location": {
      "domicile":"",
      "orderAdress":"",
      "orderAdressOptional":""
    }
  }


  id : number;
  adress : string;
  phoneNumber : string;
  email: string;
  fName : string;
  lName : string;
  gender : string;

  customerObject : IPrivateCustomer = {id:0,adress:"",phoneNumber:"",email:"",fName:"",lName:"",gender:""};
  constructor(private route :Router) {}


  addCustomer():void{
    this.customerObject.fName = this.customer.fName;
    this.customerObject.lName = this.customer.lName;
    this.customerObject.adress = this.customer.location.domicile;
    this.customerObject.email = this.customer.email;
    this.customerObject.gender =this.customer.gender;
    this.customerObject.id = 100;

    CustomerService.addPrivatCustomer(this.customerObject);
    this.route.navigate(['/app/crm/customer']);
  }
}
