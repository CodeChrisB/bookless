import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models/Profile/User';
import { UserService } from '../../services/profile/UserService';

@Component({
selector: 'SettingsSidenav-component',
templateUrl: './SettingsSidenav.component.html',
styleUrls: ['./SettingsSidenav.component.css']
})
export class SettingssidenavComponent implements OnInit {

      public user: IUser;
      // current stat of the tabs
      crmOpen = false;
      salesOpen = false;
      productOpen = false;

      // close others tabs when open a new one
      closeOnClick = true;

    ngOnInit(){
        this.user = UserService.getUser(1);
      }

      public openDashboard(): void {
        console.log('Called: openDashboard');
      }

      public openSales(): void {
        this.salesOpen = !this.salesOpen;

        if (this.closeOnClick){
          this.salesOpen = !this.productOpen;
        }
      }

}
