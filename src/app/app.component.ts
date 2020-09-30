import { Component } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookless';
  username = ''
  password  ="";


  //SHA256
  public hash256() : string{
    return Md5.hashStr(this.password).toString()
  }

  public check() {
    let password=''
    this.user.forEach(user =>{
      if(user.name ==this.username)
        password = user.password;
    })

    console.log(this.hash256())
  if(this.hash256() == password){
    alert('Login')
  }
  }

  user = 
  [{name:'admin',password:'21232f297a57a5a743894a0e4a801fc3'},
  {name:'chris',password:'d0fb963ff976f9c37fc81fe03c21ea7b'}]
}
