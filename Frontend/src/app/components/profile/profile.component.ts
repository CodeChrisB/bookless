import { Component, OnInit } from '@angular/core';

interface User {
    name:    string;
    employeeRank: string;
    created: Date;
 }

@Component({
selector: 'profile-component',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.css']
})

export class Profile  {


    user: User = {name: 'Chris',employeeRank:'Master',created : new Date("2019-01-16") }
    url;
	msg = "";
	
	selectFile(event) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
            this.url = reader.result; 
            console.dir(this.url);
		}
	}

}