import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{

  //current stat of the tabs
  crmOpen = false;
  billOpen =false;
  productOpen =false;

  //close others tabs when open a new one
  closeOnClick =false


  public openProduct() : void {
    this.productOpen=!this.productOpen;

    if(this.closeOnClick){
      this.billOpen=!this.productOpen;
      this.crmOpen=false;
    }
  }

  public openBill() : void {
    this.billOpen=!this.billOpen;
    
    if(this.closeOnClick){
      this.productOpen=false;
      this.crmOpen=false
    }
  }

  public openCrm() : void {
    this.crmOpen=!this.crmOpen;
    
    if(this.closeOnClick){
      this.productOpen=false;
      this.billOpen=!this.crmOpen;
    }
  }

}
