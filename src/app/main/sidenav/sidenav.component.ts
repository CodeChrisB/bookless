import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{

  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;
  crmOpen = false;
  billOpen =false;
  productOpen =false;


  public openProduct() : void {
    this.productOpen=true;
    this.billOpen=false;
    this.crmOpen=false;
  }

  public openBill() : void {
    this.productOpen=false;
    this.billOpen=true;
    this.crmOpen=false
  }

  public openCrm() : void {
    this.productOpen=false;
    this.billOpen=false;
    this.crmOpen=true
  }

}
