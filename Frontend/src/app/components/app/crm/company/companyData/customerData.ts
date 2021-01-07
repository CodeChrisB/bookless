import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CompanyService } from 'src/app/components/services/crm/companylist';
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import { ICompanyCustomer, IShippingAdress } from 'src/models/Customer/CompanyCustomer';


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
  maxAdresses=5;
  maxContacts=10;




  locked:boolean =false;

  companyCustomer : ICompanyCustomer =
    {
    id:0,name:'',uid:'',companyLocation:{town:'',plz:'',street:'',country:''},
    shippingAdress:[],
    contactPersons:[
      {id:0, adress:'', phoneNumber:''
    ,email:'',companyRank:'', fName:'', lName:'', gender:''
  }]}






 constructor(private route :Router,public activatedRoute: ActivatedRoute) {}

  //#region All the Init Methods

  trackBy(index: number, obj: any): string {
    return obj;
}


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
    this.companyCustomer = CompanyService.getCustomer(history.state.id)
   }



   initEdit(){
    this.msg = "Bearbeiten";
    this.companyCustomer = CompanyService.getCustomer(history.state.id)
   }

   initAdd(){
     this.msg = "Hinzufügen";
   }



   //#endregion

  //decides what should happen when the green button is pressed
  doCustomer():void{
    if(this.editMode){
      this.updateCustomer();
    }else{
      this.addCustomer();
    }
    this.route.navigate(['/app/crm/company']);
  }

  addCustomer():void{
    console.dir(this.companyCustomer)
    CompanyService.addCustomer(this.companyCustomer)
  }

  updateCustomer():void{
    CompanyService.updateCustomer(this.companyCustomer)
    this.route.navigate(['/app/crm/company']);
  }

  addShipping(){
    if(this.companyCustomer.shippingAdress.length>=this.maxAdresses){
      alert('Es können nur '+this.maxAdresses+' Lieferadressen gespeichert werden.')
      return;
    }
    this.companyCustomer.shippingAdress.push({adress:''});
    console.dir(this.companyCustomer)
  }

  addContact(){
    if(this.companyCustomer.contactPersons.length>=this.maxContacts){
      alert('Es können nur '+this.maxContacts+' Kontakte gespeichert werden.')
      return;
    }
    this.companyCustomer.contactPersons.push(
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
    console.dir(this.companyCustomer)
  }

  deleteContact(index:number){
    this.companyCustomer.contactPersons.splice(index,index+1);
  }



}

