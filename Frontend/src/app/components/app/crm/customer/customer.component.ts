import { Component, OnInit } from '@angular/core';




export interface User{
  name:string;
  age:number;
  subject:string;
  country:string;
}

const ELEMENT_DATA: User[] = [
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Sebi',age:19,subject:'Project Manager', country:'America'},
  {name:'Robert',age:19,subject:'Project Manager', country:'America'},
  {name:'Marc',age:19,subject:'Project Manager', country:'America'},
  {name:'Markus',age:19,subject:'Project Manager', country:'America'},
  {name:'Florian',age:19,subject:'Project Manager', country:'America'},
  {name:'Kemal',age:19,subject:'Project Manager', country:'America'},
  {name:'Stöttigner',age:19,subject:'Project Manager', country:'America'},
  {name:'Stütz',age:19,subject:'Project Manager', country:'America'},
  {name:'Auernig',age:19,subject:'Project Manager', country:'America'},
  {name:'Da Chef',age:19,subject:'Project Manager', country:'America'},
  {name:'Haslinger',age:19,subject:'Project Manager', country:'America'},
  {name:'Kiesenhofer',age:19,subject:'Project Manager', country:'America'},
  {name:'Rene',age:19,subject:'Project Manager', country:'America'},
]

@Component({
selector: 'customer-component',
templateUrl: './customer.component.html',
styleUrls: ['./customer.component.css']
})
export class Customer  {
  //init the data
  displayedColumns = ["seqNo", "description", "duration"];
  dataSource = ELEMENT_DATA.slice(0,15);

   // MatPaginator Inputs
   length = ELEMENT_DATA.length;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25];

   goToPage($event){
     console.dir($event);
     console.dir($event.length)
     this.length = $event.length;
     this.pageSize =$event.pageSize;
     this.dataSource = ELEMENT_DATA.slice(this.pageSize* $event.pageIndex,this.pageSize* $event.pageIndex+this.pageSize)
   }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}
}
