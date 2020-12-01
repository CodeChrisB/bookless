import { Component, OnInit } from '@angular/core';
import {PrivateCustomer} from '../../../../../models/Customer/PrivateCustomer'


const customers: PrivateCustomer[] = [
  {id:1,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
]



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
   pageSizeOptions: number[] = [5, 10];
   dataSource = customers.slice(0,this.pageSize);
   goToPage($event){

     this.length = $event.length;
     this.pageSize =$event.pageSize;
     this.dataSource = customers.slice(this.pageSize* $event.pageIndex,this.pageSize* $event.pageIndex+this.pageSize)
   }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  updateCustomer(row){
    alert(row.name)
  }

  deleteCustomer(row){
    alert(row.name + " kann momentan nicht gelöscht werden, weil "+row.name+" zu cool ist.")
  }

}
