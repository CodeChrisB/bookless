import { Component, OnInit } from '@angular/core';
import {IPrivateCustomer} from '../../../../../models/Customer/PrivateCustomer'



const customers: IPrivateCustomer[] = [
  {id:1,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
  {id:2,fName:'Sebi',lName:'Egger',adress:'Blümelguberstraße 9',phoneNumber:'06502232282',email:'c.knoll@gmail.com',gender:'m'},
  {id:3,fName:'Robert',lName:'Freißi',adress:'Blümelguberstraße 9',phoneNumber:'06502232283',email:'c.knoll@gmail.com',gender:'m'},
  {id:4,fName:'Marc',lName:'Kruiß',adress:'Blümelguberstraße 9',phoneNumber:'06502232284',email:'c.knoll@gmail.com',gender:'m'},
  {id:5,fName:'Markus',lName:'Happo',adress:'Blümelguberstraße 9',phoneNumber:'06502232285',email:'c.knoll@gmail.com',gender:'m'},
  {id:6,fName:'Franz',lName:'Auernig',adress:'Blümelguberstraße 9',phoneNumber:'06502232286',email:'c.knoll@gmail.com',gender:'m'},
  {id:7,fName:'Maximillian',lName:'Kiesenhofer',adress:'Blümelguberstraße 9',phoneNumber:'06502232287',email:'m.knoll@gmail.com',gender:'m'},
  {id:8,fName:'Markus',lName:'Hasi',adress:'Blümelguberstraße 9',phoneNumber:'06502232288',email:'m.hasi@gmail.com',gender:'m'},
  {id:9,fName:'Thomi',lName:'Stütz',adress:'Blümelguberstraße 9',phoneNumber:'06502232289',email:'t.Stütz@gmail.com',gender:'m'},
  {id:10,fName:'Kemal',lName:'Yavuz',adress:'Blümelguberstraße 9',phoneNumber:'06502232290',email:'k.yavuz@gmail.com',gender:'f'},
  {id:1,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
  {id:2,fName:'Sebi',lName:'Egger',adress:'Blümelguberstraße 9',phoneNumber:'06502232282',email:'c.knoll@gmail.com',gender:'m'},
  {id:3,fName:'Robert',lName:'Freißi',adress:'Blümelguberstraße 9',phoneNumber:'06502232283',email:'c.knoll@gmail.com',gender:'m'},
  {id:4,fName:'Marc',lName:'Kruiß',adress:'Blümelguberstraße 9',phoneNumber:'06502232284',email:'c.knoll@gmail.com',gender:'m'},
  {id:5,fName:'Markus',lName:'Happo',adress:'Blümelguberstraße 9',phoneNumber:'06502232285',email:'c.knoll@gmail.com',gender:'m'},
  {id:6,fName:'Franz',lName:'Auernig',adress:'Blümelguberstraße 9',phoneNumber:'06502232286',email:'c.knoll@gmail.com',gender:'m'},
  {id:7,fName:'Maximillian',lName:'Kiesenhofer',adress:'Blümelguberstraße 9',phoneNumber:'06502232287',email:'m.knoll@gmail.com',gender:'m'},
  {id:8,fName:'Markus',lName:'Hasi',adress:'Blümelguberstraße 9',phoneNumber:'06502232288',email:'m.hasi@gmail.com',gender:'m'},
  {id:9,fName:'Thomi',lName:'Stütz',adress:'Blümelguberstraße 9',phoneNumber:'06502232289',email:'t.Stütz@gmail.com',gender:'m'},
  {id:10,fName:'Kemal',lName:'Yavuz',adress:'Blümelguberstraße 9',phoneNumber:'06502232290',email:'k.yavuz@gmail.com',gender:'f'},
  {id:1,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
  {id:2,fName:'Sebi',lName:'Egger',adress:'Blümelguberstraße 9',phoneNumber:'06502232282',email:'c.knoll@gmail.com',gender:'m'},
  {id:3,fName:'Robert',lName:'Freißi',adress:'Blümelguberstraße 9',phoneNumber:'06502232283',email:'c.knoll@gmail.com',gender:'m'},
  {id:4,fName:'Marc',lName:'Kruiß',adress:'Blümelguberstraße 9',phoneNumber:'06502232284',email:'c.knoll@gmail.com',gender:'m'},
  {id:5,fName:'Markus',lName:'Happo',adress:'Blümelguberstraße 9',phoneNumber:'06502232285',email:'c.knoll@gmail.com',gender:'m'},
  {id:6,fName:'Franz',lName:'Auernig',adress:'Blümelguberstraße 9',phoneNumber:'06502232286',email:'c.knoll@gmail.com',gender:'m'},
  {id:7,fName:'Maximillian',lName:'Kiesenhofer',adress:'Blümelguberstraße 9',phoneNumber:'06502232287',email:'m.knoll@gmail.com',gender:'m'},
  {id:8,fName:'Markus',lName:'Hasi',adress:'Blümelguberstraße 9',phoneNumber:'06502232288',email:'m.hasi@gmail.com',gender:'m'},
  {id:9,fName:'Thomi',lName:'Stütz',adress:'Blümelguberstraße 9',phoneNumber:'06502232289',email:'t.Stütz@gmail.com',gender:'m'},
  {id:10,fName:'Kemal',lName:'Yavuz',adress:'Blümelguberstraße 9',phoneNumber:'06502232290',email:'k.yavuz@gmail.com',gender:'f'},
  {id:1,fName:'Christopher',lName:'Knoll',adress:'Blümelguberstraße 9',phoneNumber:'06502232281',email:'c.knoll@gmail.com',gender:'m'},
  {id:2,fName:'Sebi',lName:'Egger',adress:'Blümelguberstraße 9',phoneNumber:'06502232282',email:'c.knoll@gmail.com',gender:'m'},
  {id:3,fName:'Robert',lName:'Freißi',adress:'Blümelguberstraße 9',phoneNumber:'06502232283',email:'c.knoll@gmail.com',gender:'m'},
  {id:4,fName:'Marc',lName:'Kruiß',adress:'Blümelguberstraße 9',phoneNumber:'06502232284',email:'c.knoll@gmail.com',gender:'m'},
  {id:5,fName:'Markus',lName:'Happo',adress:'Blümelguberstraße 9',phoneNumber:'06502232285',email:'c.knoll@gmail.com',gender:'m'},
  {id:6,fName:'Franz',lName:'Auernig',adress:'Blümelguberstraße 9',phoneNumber:'06502232286',email:'c.knoll@gmail.com',gender:'m'},
  {id:7,fName:'Maximillian',lName:'Kiesenhofer',adress:'Blümelguberstraße 9',phoneNumber:'06502232287',email:'m.knoll@gmail.com',gender:'m'},
  {id:8,fName:'Markus',lName:'Hasi',adress:'Blümelguberstraße 9',phoneNumber:'06502232288',email:'m.hasi@gmail.com',gender:'m'},
  {id:9,fName:'Thomi',lName:'Stütz',adress:'Blümelguberstraße 9',phoneNumber:'06502232289',email:'t.Stütz@gmail.com',gender:'m'},
  {id:10,fName:'Kemal',lName:'Yavuz',adress:'Blümelguberstraße 9',phoneNumber:'06502232290',email:'k.yavuz@gmail.com',gender:'f'},
  {id:11,fName:'Flock',lName:'Wilfi',adress:'Blümelguberstraße 9',phoneNumber:'06502232291',email:'f.wilfi@gmail.com',gender:'m'}
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

  updateCustomer(row : IPrivateCustomer){
    console.dir(row)
    alert(row.fName)
  }

  deleteCustomer(row : IPrivateCustomer){
    this.dataSource= this.dataSource.slice(row.id,row.id+1);
  }

}