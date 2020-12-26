import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/components/services/crm/customerlist';

import { DOCUMENT } from '@angular/common';
import { EmailHandler } from 'src/app/components/services/tools/emailHandler';
import { IEmailData } from 'src/models/email/emailData';
import { IPrivateCustomer } from 'src/models/Customer/PrivateCustomer';
import { IRawProduct } from 'src/models/Product/RawProduct';
import { RawProductService } from 'src/app/components/services/prodcut/rawProduct';


@Component({
selector: 'customer-component',
templateUrl: './ProductData.component.html',
styleUrls: ['./ProductData.component.css','../../../css/forms.css']
})
export class HeatexchangerData implements OnInit  {

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



 product : IRawProduct = {productId:0,name:'',description:'',price:0}

 constructor(private route :Router,public activatedRoute: ActivatedRoute) {}

  //#region All the Init Methods


  ngOnInit() {
    //checks wheter we are in edit or show mode without data passed to the component
    if(history.state.mode ==undefined && this.route.url.includes('edit')|| history.state.mode ==undefined &&this.route.url.includes('show')){
      this.route.navigate(['/app/crm/customer'])
    }
    else{
      if(history.state.mode =='show'){
        this.locked=true;
        this.initShow();
        this.showMode=true;
      }else{
        //get the rawproduct
        this.id = history.state.id;
        this.product = RawProductService.getProduct(this.id)
        //set the correct mode
        this.editMode = history.state.mode =='edit';
        if(this.editMode){
          this.initEdit()
          this.editMode=true;
        }else{
          this.initAdd()
          this.addMode=true;
        }
      }
    }
  }


  initShow(){
    this.msg='Zurück'
    this.locked=true;
  }



   initEdit(){
    this.msg='Bearbeiten'
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

    this.route.navigate(['/app/products/heatexchanger']);
  }


  mailCustomer(){

  }

  mailAllCustomers(){

  }




}

