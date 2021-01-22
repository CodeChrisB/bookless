import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/services/profile/UserService';
import { IStringId } from 'src/models/misc/IStringID';
import { IUser } from 'src/models/Profile/User';
import {FormControl} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RawProductService } from 'src/app/components/services/prodcut/rawProduct';
import { IConsultant  } from 'src/models/Profile/Consultant';
import { CompanyService } from 'src/app/components/services/crm/companylist';
import { CustomerService } from 'src/app/components/services/crm/customerlist';
import { OfferService } from 'src/app/components/services/bill/OfferService';
import { Router } from '@angular/router';
import {IBillData} from  'src/models/bill/offer/BillData';
import { BillService } from 'src/app/components/services/bill/BillService'

@Component({
selector: 'billData-component',
templateUrl: './billData.component.html',
styleUrls: ['./billData.component.css']
})
export class BilldataComponent implements OnInit {
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
      console.log( BillService.getBill(history.state.id))
      this.billData = BillService.getBill(history.state.id)
    }
  
    doOffer(){
  
  
      if(this.editMode){
        BillService.updateBill(this.billData)
      }else{
        this.fillInOffer()
        BillService.addBill(this.billData);
        this.route.navigate(['/app/sales/offer']);
      }
    }
  
    //#region Fill in the Offer Data
    fillInOffer(){
      this.billData.bill.possibleDelivery = new Date(this.billData.bill.possibleDelivery)
  
      //brutto value
      this.billData.bill.bruttoValue = this.getBruttoValue()
      //number --> will be provided by backend
      //status
      this.billData.bill.status = 'Erstellt'
      //this.offerData.offer.town = this.getTown()
      //uid
      this.billData.bill.uid = this.getCustomerUID()
      //date of creation
      this.billData.bill.date = new Date();
    }
  
    getBruttoValue():number{
      let sum: number = 0;
      this.billData.prodcuts.forEach(a => sum += a.product.price*a.amount);
      return sum;
    }
  
    getTown():string{
      return 'this.offerData.offer.isCompany ?  CompanyService.getCustomer(this.offerData.offer.customerId).'
    }
  
    getCustomerUID():string{
      return this.billData.bill.isCompany ? CompanyService.getCustomer(this.billData.bill.customerId).uid : 'PK-EK-40000';
    }
  
    //#endregion
  
  
    changeCustomerType(){
      this.billData.bill.isCompany=!this.billData.bill.isCompany;
      this.customerList =  this.billData.bill.isCompany ? CompanyService.getCompanyCustomerIdList():CustomerService.getPrivateCustomerIdList();
    }
  
    onCustomerChange(val:number){
      this.billData.bill.customerId=val
    }
  
    onConsultantChange(val:number){
      this.billData.bill.consultantId=val
      this.consultant = UserService.getUser(val);
    }
  
  
    private _filter(value: string): number[] {
      return this.options
    }
  
  
  
  
  
    setProdcutData(productId:number){
      this.search=""
      this.billData.prodcuts.push({product:RawProductService.getProduct(productId),amount:1})
    }
  
    getProductNameById(id:number):String{
      return RawProductService.getProductFullName(id);
    }
  
    removeProduct(id:number){
      alert(this.billData.prodcuts[id].product.name)
      console.dir(this.billData.prodcuts)
  
      this.billData.prodcuts.splice(id,1)
    }
  
  
  
  
  
  
  
  
  
    billData :IBillData = {
      bill:{
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