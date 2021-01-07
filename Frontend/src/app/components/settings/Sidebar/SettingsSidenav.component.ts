import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models/Profile/User';
import { UserService } from '../../services/profile/UserService';

@Component({
selector: 'SettingsSidenav-component',
templateUrl: './SettingsSidenav.component.html',
styleUrls: ['./SettingsSidenav.component.css']
})
export class SettingssidenavComponent implements OnInit {

    ngOnInit(){
        this.user = UserService.getUser(1);
      }
    
      public user:IUser;
      //current stat of the tabs
      crmOpen = false;
      billOpen =false;
      productOpen =false;
    
      //close others tabs when open a new one
      closeOnClick =true;
    
      public openDashboard() : void {
        console.log('Called: openDashboard')
      }
    
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