import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models/Profile/User';
import { UserService } from '../../services/profile/UserService';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface User {
    name: string;
    employeeRank: string;
    created: Date;
 }

@Component({
selector: 'profile-component',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.css']
})

export class Profile implements OnInit  {

  constructor(private _sanitizer: DomSanitizer, private route: Router) { }


  user: IUser;

  showPass;


    url;
    msg = '';
    password = {
      current: '',
      newFirst: '',
      newSecond: ''
    };

    // the password data that will be sent to the server for change
    hashed = {
      current: '',
      new: ''
    };
  ngOnInit(){
    // when we have backend access we need to specify which user we want to get.
    this.user = UserService.getUser(1);
    // get the imge from the user
    this.showPass = {
      old: false,
      first: false,
      second: false
    };
  }

	selectFile(event) {
		if (!event.target.files[0] || event.target.files[0].length == 0) {
			this.user.image = 'You must select an image';
			return;
		}

		const mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = 'Only images are supported';
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = '';
   this.user.image = reader.result.toString();
		};
  }

  submitNewPassword(): void{

    const regexPassword =  new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$');

    // Check if the password follows the rules
    if (!(regexPassword.test(this.password.current) && regexPassword.test(this.password.newFirst) && regexPassword.test(this.password.newSecond)))
    {
      alert('Das Passwort muss folgende Regeln befolgen :\n1 Großbuchstabe\n1 Kleinbuchstaben\n1 Zahl');
      this.clearPassFields();
      return;
    }
    else if (this.password.newFirst != this.password.newSecond)
    {
      alert('Bitte geben sie zweimal das gleiche Passwort ein.');
      this.clearPassFields();
      return;
    }

    // hash passwords
    this.hashed.current = this.hash(this.password.current);
    this.hashed.new = this.hash(this.password.newFirst);
    // api sent
    // roberts.backend.subscribe(backend =>{backend.sent(this.hashed.current,this.hashed.new)})

  }

  hash(pass: string): string{
    // call a hash function idk
    return pass;
  }

  clearPassFields(){
    this.password = {
      current: '',
      newFirst: '',
      newSecond: ''
    };
  }

  routeTo(route: string){
    this.route.navigate([('/app/' + route)]);
  }

  getUserCount() {
    return UserService.getUserCount();
  }

  toSettings(){
    this.route.navigate(['/settings/dashboard']);
  }

  saveUser(){
    UserService.updateUser(this.user);
  }

  userSettings(){
    this.route.navigate(['/profile/settings'], { state: {id: this.user.id } });
  }
}
