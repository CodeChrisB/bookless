import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/components/services/customerlist';
import {IPrivateCustomer} from '../../../../../../models/Customer/PrivateCustomer'
import { Customer } from '../customer.component';
import { DOCUMENT } from '@angular/common';







@Component({
selector: 'customer-component',
templateUrl: './customerData.component.html',
styleUrls: ['./customerData.component.css','../../../../css/forms.css']
})
export class addCustomer implements OnInit  {

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

  doCustomer():void{
    if(this.editMode){
      this.updateCustomer();
    }else{
      this.addCustomer();
    }
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

  updateCustomer():void{
    this.customerObject.fName = this.customer.fName;
    this.customerObject.lName = this.customer.lName;
    this.customerObject.adress = this.customer.location.domicile;
    this.customerObject.email = this.customer.email;
    this.customerObject.gender =this.customer.gender;
    this.customerObject.phoneNumber = this.customer.phone;
    this.customerObject.id = this.id;

    CustomerService.setCustomer(this.id,this.customerObject);
    this.route.navigate(['/app/crm/customer']);
  }


  ngOnInit() {
    if(history.state.mode ==undefined && this.route.url.includes('edit')){
      this.route.navigate(['/app/crm/customer'])
    }
    else{
      this.editMode = history.state.mode =='edit';
      if(this.editMode){
        this.initEdit()
      }else{
        this.initAdd()
      }
    }
  }

  initEdit(){

    this.msg = "Änderungen speichern";
    this.id = history.state.id;
    var customer = CustomerService.getCustomer(this.id)
   this.customer.fName = customer.fName;
   this.customer.lName = customer.lName;
   this.customer.location.domicile = 'Nope'
   this.customer.email = customer.email;
   this.customer.gender = this.customer.gender;
  }

  initAdd(){
    this.msg = "Hinzufügen";

  }


}

