import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/components/services/customerlist';
import {IPrivateCustomer} from '../../../../../../models/Customer/PrivateCustomer'








@Component({
selector: 'customer-component',
templateUrl: './customerData.component.html',
styleUrls: ['./customerData.component.css','../../../../css/forms.css']
})
export class addCustomer  {

  // if this number is undefined it means we
  //are currently adding a new customer and not editing an existing one
  id:number = undefined;
  editMode = true;
  msg:string="";

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



  customerObject : IPrivateCustomer = {id:0,adress:"",phoneNumber:"",email:"",fName:"",lName:"",gender:""};
  constructor(private route :Router,public activatedRoute: ActivatedRoute) {

  }


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


  ngOnInit() {
    this.id = history.state.id;
    console.dir(this.id)

    if(this.id==undefined)
      this.editMode=false;

    this.msg = this.editMode? "Änderungen speichern" : "Hinzufügen"
  }



}

