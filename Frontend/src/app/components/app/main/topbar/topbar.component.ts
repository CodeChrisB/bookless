import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from 'src/app/components/services/profile/UserService';
import { IUser } from 'src/models/Profile/User';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  constructor(private _sanitizer: DomSanitizer, private route: Router) { }

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
}
