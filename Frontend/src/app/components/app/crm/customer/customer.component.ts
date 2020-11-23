import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CustomerDataSource, CustomerItem } from './customer-datasource';


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
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class Customer  {
  //init the data
  displayedColumns:string[] =['name','age','subject', 'country'];
  dataSource = ELEMENT_DATA;
}
