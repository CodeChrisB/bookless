import { Component, OnInit } from '@angular/core';
import {IPrivateCustomer} from '../../../../../models/Customer/PrivateCustomer'
import {MatDialog} from '@angular/material/dialog';
import {CustomerService} from '../../../services/customerlist'
import { Router } from '@angular/router';


const customers: IPrivateCustomer[] = CustomerService.getData();



@Component({
  selector: 'customer-component',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class Customer  {
  //init the data
  displayedColumns = ["id", "fName", "lName","adress","phoneNumber","email","gender","actions"];


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

  constructor(public dialog: MatDialog,private route :Router) {}

  deleteCustomer(row : IPrivateCustomer){
     if(confirm('Wollen Sie ' + row.fName +' '+row.lName +' löschen?')){
          this.dataSource = this.dataSource.filter(customers => customers.id !== row.id);
          this.length = this.dataSource.length;
          this.refresh();
     }
  }





  refresh() {
      this.dataSource = this.dataSource;
    }

}
