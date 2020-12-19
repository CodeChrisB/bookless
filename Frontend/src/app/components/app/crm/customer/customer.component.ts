import { Component, OnInit, ViewChild } from '@angular/core';
import {IPrivateCustomer} from '../../../../../models/Customer/PrivateCustomer'
import {MatDialog} from '@angular/material/dialog';
import {CustomerService} from '../../../services/customerlist'
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { IEmailData } from 'src/models/email/emailData';
import { EmailHandler } from 'src/app/components/services/emailHandler';
import { StringShortener } from 'src/app/components/services/tools/StringShortner';


const customers: IPrivateCustomer[] = CustomerService.getAllCustomers();



@Component({
  selector: 'customer-component',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class Customer  {
  //init the data
  displayedColumns = ["fName", "lName","adress","phoneNumber","email","gender","actions"];

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

   // MatPaginator Inputs
   length = customers.length;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10,25,100];
   dataSource = customers.slice(0,this.pageSize);
   pageIndex = 0
   goToPage($event){
     this.length = $event.length;
     this.pageSize =$event.pageSize;
     this.dataSource = customers.slice(this.pageSize* $event.pageIndex,this.pageSize* $event.pageIndex+this.pageSize);
     this.pageIndex = $event.pageIndex;
    }

  showCustomer(row : IPrivateCustomer) {
   this.route.navigate(['/app/crm/customer/show'], { state: {mode:'show', id: row.id } });
  }

  updateCustomer(row : IPrivateCustomer){
    console.dir(row)
    this.route.navigate(['/app/crm/customer/edit'], { state: {mode:'edit', id: row.id } });
  }

  addCustomer(){
    this.route.navigate(['/app/crm/customer/new'] , { state: {mode:'add' } });
  }


  short( string:string,number:number){
    return StringShortener.Trim(string,number);
  }


  constructor(public dialog: MatDialog,private route :Router) {}

  deleteCustomer(row : IPrivateCustomer){
     if(confirm('Wollen Sie ' + row.fName +' '+row.lName +' löschen?')){
          this.dataSource = this.dataSource.filter(customers => customers.id !== row.id);
          this.length = this.dataSource.length;
          this.refresh();
     }
  }

  mailCustomer(row: IPrivateCustomer){
    var customer = CustomerService.getCustomer(row.id)
      var text = "Sehr "+ (customer.gender =='m' ? 'geehrter Herr,' :'geehrte Frau,') +customer.lName
      var emailData: IEmailData = {email:customer.email,subject:'Subject ',content:text}
      EmailHandler.sendEmail(emailData)
  }




  refresh() {
      this.dataSource = this.dataSource;
    }

}
