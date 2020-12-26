import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';


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

  companyCustomers : ICompanyCustomer =
    {
    id:1,name:'ChrisGmbh',companyLocation:'Ansfelden',
    shippingAdress:['Ansfelden','Wolfern','Wolfern','Wolfern','Wolfern','Wolfern','Wolfern'],
    contactPersons:[
      {id:1, adress:'KA', phoneNumber:'4940300'
    ,email:'chris.gmx.at',companyRank:'Sales', fName:'Hallo', lName:'Gewinne', gender:'M'
  }]}







 constructor(private route :Router,public activatedRoute: ActivatedRoute) {}

  //#region All the Init Methods




  ngOnInit() {
    if(history.state.mode ==undefined && this.route.url.includes('edit')|| history.state.mode ==undefined &&this.route.url.includes('show')){
      this.route.navigate(['/app/crm/company'])
    }
    else{

      if(history.state.mode =='show'){
        this.locked=true;
        this.initShow();
        this.showMode=true;
      }else{
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
    this.msg = "Zurück";
   }



   initEdit(){
    this.msg = "Bearbeiten";
   }

   initAdd(){
     this.msg = "Hinzufügen";
   }



   //#endregion

  //decides what should happen when the green button is pressed
  doCustomer():void{
    if(history.state.mode=="show"){
    this.route.navigate(['/app/crm/company']);
    }else if(this.editMode){
      this.updateCustomer();
    }else{
      this.addCustomer();
    }
  }

  addCustomer():void{

  }

  updateCustomer():void{

    this.route.navigate(['/app/crm/company']);
  }

  addShipping(){
    this.companyCustomers.shippingAdress.push("");
    console.dir(this.companyCustomers)
  }

  addContact(){
    this.companyCustomers.contactPersons.push(
      {
        id:1,
        adress:'',
        phoneNumber:'',
        email:'',
        fName:'',
        companyRank:'',
        lName:'',
        gender:''
      });
    console.dir(this.companyCustomers)
  }



}

