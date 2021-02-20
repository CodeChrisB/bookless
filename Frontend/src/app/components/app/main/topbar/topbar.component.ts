import { Component, Injectable, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/components/services/profile/UserService';
import { SideNavService } from 'src/app/components/services/tools/SidenavHandler';
import { IUser } from 'src/models/Profile/User';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  constructor(private _sanitizer: DomSanitizer, private route: Router,public navHandler:SideNavService) { }

  user: IUser;
  image;
  ngOnInit(){
    // when we have backend access we need to specify which user we want to get.
    this.user = UserService.getUser(1);
    // get the imge from the user
    this.image = this._sanitizer.bypassSecurityTrustUrl(this.user.image);
  }



  backToHome(){
    this.route.navigate(['app/dashboard']);
  }


 clickMenu() {
  this.toggle();
}

public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

public toggle() {
  //only open sidenav when in the app otherwise go back to the app
  if(this.route.url.toString().indexOf('app')!=-1){
    this.navHandler.toggle();
  }else{
    this.route.navigate(['/app/dashboard']);
  }
}

ngAfterView(){

}
}
