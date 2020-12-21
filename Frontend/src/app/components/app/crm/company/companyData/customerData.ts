import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import {IPrivateCustomer} from '../../../../../../models/Customer/PrivateCustomer'
import { DOCUMENT } from '@angular/common';
import { EmailHandler } from 'src/app/components/services/tools/emailHandler';
import { IEmailData } from 'src/models/email/emailData';


@Component({
selector: 'customer-component',
templateUrl: './customerData.component.html',
styleUrls: ['./customerData.component.css','../../../../css/forms.css']
})
export class addCompanyCustomer implements OnInit  {

  id:number = undefined;
  editMode = false;
  showMode = false;
  addMode = false;
  msg:string="";




  locked:boolean =false;

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
 constructor(private route :Router,public activatedRoute: ActivatedRoute) {}

  //#region All the Init Methods




  ngOnInit() {

  }


  initShow(){

   }



   initEdit(){

   }

   initAdd(){
     this.msg = "Hinzufügen";
   }



   //#endregion

  //decides what should happen when the green button is pressed
  doCustomer():void{
    if(history.state.mode=="show"){
    this.route.navigate(['/app/crm/customer']);
    }else if(this.editMode){
      this.updateCustomer();
    }else{
      this.addCustomer();
    }
  }

  addCustomer():void{

  }

  updateCustomer():void{

    this.route.navigate(['/app/crm/customer']);
  }


  mailCustomer(){

  }

  mailAllCustomers(){

  }




}

