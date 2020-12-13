import { Component, OnInit } from '@angular/core';
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

  addCustomer():void{
    console.dir(this.customer)
    alert("Waiting for eggers service")
  }


}
