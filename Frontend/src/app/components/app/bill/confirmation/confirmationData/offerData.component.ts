
import { UserService } from 'src/app/components/services/profile/UserService';
import { IStringId } from 'src/models/misc/IStringID';
import { IUser } from 'src/models/Profile/User';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RawProductService } from 'src/app/components/services/prodcut/rawProduct';
import { IConsultant  } from 'src/models/Profile/Consultant';

import { IOfferData } from 'src/models/bill/offer/OfferData';
import { CompanyService } from 'src/app/components/services/crm/companylist';
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import { OfferService } from 'src/app/components/services/bill/OfferService';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';


@Component({
selector: 'customer-component',
templateUrl: './offerData.component.html',
styleUrls: ['./offerData.component.css','../../../../css/forms.css']
})
export class ConfirmationData implements OnInit  {

  locked=false;
  consultantList : IStringId[];
  customerList: IStringId[];
  consultant : IUser =null;
  showConsultant =false;
  showProducts = true;
  msg="Do"
  myControl = new FormControl();
  options: number[] = RawProductService.getProductIdList();
  filteredOptions: Observable<number[]>;
  search:string
  editMode=false;
  constructor(private route :Router) {}


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    //consultant init
     this.consultantList = UserService.getUserNameList();
    //customer init
    this.customerList = CompanyService.getCompanyCustomerIdList();

    //get the current mode
    //check if url routing
    if(history.state.mode == undefined && this.route.url.includes('edit')){
      this.route.navigate(['/app/sales/offer'])
    }
    else{
        this.editMode = history.state.mode =='edit';
        if(this.editMode){
          this.initEdit()
          this.editMode=true;
        }
      }
  }

  initEdit(){
    console.log( OfferService.getOffer(history.state.id))
    this.offerData = OfferService.getOffer(history.state.id)
  }

  doOffer(){


    if(this.editMode){
      OfferService.updateOffer(this.offerData)
    }else{
      this.fillInOffer()
      OfferService.addOffer(this.offerData);
      this.route.navigate(['/app/sales/offer']);
    }
  }

  setPrice(event:KeyboardEvent){
    event.stopPropagation();
  }

  //#region Fill in the Offer Data
  fillInOffer(){
    this.offerData.offer.possibleDelivery = new Date(this.offerData.offer.possibleDelivery)

    //brutto value
    this.offerData.offer.bruttoValue = this.getBruttoValue()
    //number --> will be provided by backend
    //status
    this.offerData.offer.status = 'Erstellt'
    //this.offerData.offer.town = this.getTown()
    //uid
    this.offerData.offer.uid = this.getCustomerUID()
    //date of creation
    this.offerData.offer.date = new Date();
  }

  getBruttoValue():number{
    let sum: number = 0;
    this.offerData.prodcuts.forEach(a => sum += a.product.price*a.amount);
    return sum;
  }

  getTown():string{
    return 'this.offerData.offer.isCompany ?  CompanyService.getCustomer(this.offerData.offer.customerId).'
  }

  getCustomerUID():string{
    return this.offerData.offer.isCompany ? CompanyService.getCustomer(this.offerData.offer.customerId).uid : 'PK-EK-40000';
  }

  //#endregion


  changeCustomerType(){
    this.offerData.offer.isCompany=!this.offerData.offer.isCompany;
    this.customerList =  this.offerData.offer.isCompany ? CompanyService.getCompanyCustomerIdList():CustomerService.getPrivateCustomerIdList();
  }

  onCustomerChange(val:number){
    this.offerData.offer.customerId=val
  }

  onConsultantChange(val:number){
    this.offerData.offer.consultantId=val
    this.consultant = UserService.getUser(val);
  }


  private _filter(value: string): number[] {
    return this.options
  }





  setProdcutData(productId:number){
    this.search=""
    this.offerData.prodcuts.push({product:RawProductService.getProduct(productId),amount:1})
  }

  getProductNameById(id:number):String{
    return RawProductService.getProductFullName(id);
  }

  removeProduct(id:number){
    alert(this.offerData.prodcuts[id].product.name)
    console.dir(this.offerData.prodcuts)

    this.offerData.prodcuts.splice(id,1)
  }









  offerData :IOfferData = {
    offer:{
      number:0,
      date:null,
      customerId:0,
      uid:'',
      projectName:'',
      isCompany:true,
      name:'',
      plz:'',
      town:'',
      street:'',
      bruttoValue:0,
      status:'',
      possibleDelivery:null,
      consultantId:-1,
    // at start a offer is just a offer it is not transformed yet into anything else
    stages:{
      offer:false,
      order:false,
      bill:false,
      finished:false,
      canceld:false,
    }
  },
  prodcuts:[]
  }
}

