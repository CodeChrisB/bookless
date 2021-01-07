import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models/Profile/User';
import { UserService } from '../../services/profile/UserService';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface User {
    name:    string;
    employeeRank: string;
    created: Date;
 }

@Component({
selector: 'profile-component',
templateUrl: './profileSettings.component.html',
styleUrls: ['./profileSettings.component.css']
})

export class ProfileSettings implements OnInit  {

  constructor(private _sanitizer: DomSanitizer,private route: Router) { }

  user : IUser;
  image;
  showPass;
  ngOnInit(){
    //when we have backend access we need to specify which user we want to get.
    this.user = UserService.getUser(1);
    //get the imge from the user
    this.image = this._sanitizer.bypassSecurityTrustUrl(this.user.image)
    this.showPass={
      old:false,
      first:false,
      second:false
    }
  }


    url;
    msg = "";
    password = {
      "current":"",
      "newFirst":"",
      "newSecond":""
    }

    //the password data that will be sent to the server for change
    hashed ={
      "current":"",
      "new":""
    }

}
