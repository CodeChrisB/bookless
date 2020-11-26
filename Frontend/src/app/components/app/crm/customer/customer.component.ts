import { Component, OnInit } from '@angular/core';




export interface User{
  name:string;
  age:number;
  subject:string;
  country:string;
}

const ELEMENT_DATA: User[] = [
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
  {name:'Chris',age:19,subject:'Project Manager', country:'America'},
]

@Component({
selector: 'customer-component',
templateUrl: './customer.component.html',
styleUrls: ['./customer.component.css']
})
export class Customer  {
  //init the data
  displayedColumns = ["seqNo", "description", "duration"];
  dataSource = ELEMENT_DATA;

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}
}
