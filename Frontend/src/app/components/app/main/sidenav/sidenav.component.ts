import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/services/profile/UserService';
import { IUser } from 'src/models/Profile/User';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  public user: IUser;
  // current stat of the tabs
  crmOpen = false;
  billOpen = false;
  productOpen = false;

  // close others tabs when open a new one
  closeOnClick = true;

  ngOnInit(){
    this.user = UserService.getUser(1);
  }

  public openDashboard(): void {
    console.log('Called: openDashboard');
  }

  public openProduct(): void {
    this.productOpen = !this.productOpen;

    if (this.closeOnClick){
      this.billOpen = !this.productOpen;
      this.crmOpen = false;
    }
  }

  public openBill(): void {
    this.billOpen = !this.billOpen;

    if (this.closeOnClick){
      this.productOpen = false;
      this.crmOpen = false;
    }
  }

  public openCrm(): void {
    this.crmOpen = !this.crmOpen;

    if (this.closeOnClick){
      this.productOpen = false;
      this.billOpen = !this.crmOpen;
    }
  }

}
