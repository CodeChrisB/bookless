import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import {IPrivateCustomer} from '../../../../../../models/Customer/PrivateCustomer'
import { EmailHandler } from 'src/app/components/services/tools/emailHandler';
import { IEmailData } from 'src/models/email/emailData';


@Component({
selector: 'customer-component',
templateUrl: './customerData.component.html',
styleUrls: ['./customerData.component.css','../../../../css/forms.css']
})
export class addCustomer implements OnInit  {

  id:number;
  editMode = false;
  showMode = false;
  addMode = false;
  msg:string="";


  customerService:CustomerService;
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
 constructor(private route :Router,public activatedRoute: ActivatedRoute, customerService:CustomerService) {
   this.customerService = customerService;
 }

  //#region All the Init Methods




  ngOnInit() {
    if(history.state.mode ==undefined && this.route.url.includes('edit')|| history.state.mode ==undefined &&this.route.url.includes('show')){
      this.route.navigate(['/app/crm/customer'])
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


  async initShow():Promise<void>{
    this.msg = "Zurück";
    this.id = history.state.id;
    var customer = await this.customerService.getCustomer(this.id);
    console.dir(customer)
    this.customer.fName = customer.fName;
    this.customer.lName = customer.lName;
    this.customer.location.domicile = 'Nope'
    this.customer.email = customer.email;

   }



   async initEdit():Promise<void>{

    this.msg = "Änderungen speichern";
    this.id = Number(history.state.id);
    var customer:IPrivateCustomer = await this.customerService.getCustomer(this.id);
    console.log(customer.fName)
    this.customer.fName = customer.fName;
    this.customer.lName = customer.lName;
    this.customer.location.domicile = 'Nope'
    this.customer.email = customer.email;
    this.customer.gender = this.customer.gender;
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

  async addCustomer():Promise<void>{
    this.customerObject.fName = this.customer.fName;
    this.customerObject.lName = this.customer.lName;
    this.customerObject.adress = this.customer.location.domicile;
    this.customerObject.email = this.customer.email;
    this.customerObject.gender =this.customer.gender;
    this.customerObject.phoneNumber = this.customer.phone;
    this.customerObject.id = 100;
    console.log(this.customerObject);
    await this.customerService.addPrivatCustomer(this.customerObject); //return Promise<boolean> to handle
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

    this.customerService.setCustomer(this.id,this.customerObject);
    this.route.navigate(['/app/crm/customer']);
  }






  mailCustomer(){
    var text = "Sehr "+ (this.customer.gender =='m' ? 'geehrter Herr,' :'geehrte Frau,') +this.customer.lName
    var emailData: IEmailData = {email:this.customer.email,subject:'Subject ',content:text}
    EmailHandler.sendEmail(emailData)
  }


  async mailAllCustomers(){
    const emailData: string[] = (await this.customerService.getAllCustomers()).map(x=>x.email)
    EmailHandler.sendBulkEmail(emailData)
  }
}

