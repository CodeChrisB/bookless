import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  
  title = 'bookless';
  showName:boolean = true;
  showID:boolean = true;
  showEmail:boolean = true;
  showPhone:boolean = true;
  showAdress:boolean = true;
  showCompanyName:boolean = true;

  public getColor(val:boolean) : string{
    return val ? 'green':'red';
  }

  

  public customers = 
  [
    {name:'Chris',id:1,email:'coc31',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Robert',id:2,email:'superfreisi',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Sebastian',id:3,email:'sebastianEgg',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Elias',id:3,email:'eliasAigner',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Chris',id:1,email:'coc31',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Robert',id:2,email:'superfreisi',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Sebastian',id:3,email:'sebastianEgg',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Elias',id:3,email:'eliasAigner',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Chris',id:1,email:'coc31',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Robert',id:2,email:'superfreisi',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Sebastian',id:3,email:'sebastianEgg',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Elias',id:3,email:'eliasAigner',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Chris',id:1,email:'coc31',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Robert',id:2,email:'superfreisi',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Sebastian',id:3,email:'sebastianEgg',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'},
    {name:'Elias',id:3,email:'eliasAigner',phone:'45325324',adress:'Ritzlhof',companyName:'Buchfrei'}
  ]



  public setName(){
    this.showName=!this.showName;
  }

  public setID(){
    this.showID=!this.showID;
  }
  public setEmail(){
    this.showEmail=!this.showEmail;
  }
  
  public setCompany(){
    this.showName=!this.showName;
  }

  public setLocation(){
    this.showID=!this.showID;
  }
  public setPhone(){
    this.showEmail=!this.showEmail;
  }

}
