import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { UserService } from 'src/app/components/services/profile/UserService';
import { SideNavService } from 'src/app/components/services/tools/SidenavHandler';
import { IUser } from 'src/models/Profile/User';
import { TopbarComponent } from '../topbar/topbar.component';

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

  @ViewChild('drawer') sidenav:any;


  public openProduct(): void {
    this.productOpen = !this.productOpen;

    if (this.closeOnClick){
      this.billOpen = !this.productOpen;
      this.crmOpen = false;
    }
  }

  public openBill(drawer): void {
    this.billOpen = !this.billOpen;

    if (this.closeOnClick){
      this.productOpen = false;
      this.crmOpen = false;
    }
  }

  public openCrm(drawer): void {
    this.crmOpen = !this.crmOpen;

    if (this.closeOnClick){
      this.productOpen = false;
      this.billOpen = !this.crmOpen;
    }
  }

  public close(){
    this.sidenav.toggle();

  }

  constructor(private top: TopbarComponent,public navHandler:SideNavService) {}

  ngOnInit() {
    this.user = UserService.getUser(1);
  }

  ngAfterViewInit():any {

    this.navHandler.nav = this.sidenav
    this.top.sideNavToggleSubject.subscribe(()=> {
       this.sidenav
     });
  }
}
