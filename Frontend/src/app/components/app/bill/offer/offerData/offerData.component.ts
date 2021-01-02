
import { UserService } from 'src/app/components/services/profile/UserService';
import { IStringId } from 'src/models/misc/IStringID';
import { IUser } from 'src/models/Profile/User';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RawProductService } from 'src/app/components/services/prodcut/rawProduct';
import { IOfferData } from 'src/models/bill/offer/OfferData';


@Component({
selector: 'customer-component',
templateUrl: './offerData.component.html',
styleUrls: ['./offerData.component.css','../../../../css/forms.css']
})
export class OfferData implements OnInit  {

  locked=false;
  consultantList : IStringId[];
  consultant : IUser =null;
  showConsultant =false;

  onConsultantChange(val){
    this.consultant = UserService.getUser(val);
    this.showConsultant=true;
  }

  myControl = new FormControl();
  options: IStringId[];
  filteredOptions: Observable<String[]>;

  ngOnInit() {


    //set up autocomplete
    this.options = RawProductService.getProductNameList();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      console.clear()


  }

  private _filter(value: any): String[] {
    if(value.hasOwnProperty('id')){
      alert(value.id)
    }else{

      console.dir(this.options)
      var filterd :String[]=[];
      var id:number=-1;
      this.options.forEach(obj=>{
        if(obj.string==value)
        {
        id = obj.id;
        console.dir(RawProductService.getProduct(obj.id))
        }

      })

      this.options.forEach(o=>filterd.push(o.string))



      const filterValue = value.toLowerCase();
      return filterd.filter(option => option.toLowerCase().includes(filterValue));
    }
  }

  newProduct(){
    this.offerData.prodcuts.push({product:{productId:0,name:'',description:'',price:0},amount:0})
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
      administrator:{
        firstname:'',
        lastname:'',
        phone:'',
        fax:'',
        email:''
    },
    // at start a offer is just a offer it is not transformed yet into anything else
    stages:{
      offer:false,
      order:false,
      bill:false,
      finished:false,
      canceld:false,
    }
  },
  prodcuts:[{product:{productId:-1,name:'',description:'',price:0},amount:0}]
  }
}

