import { Component, OnInit } from '@angular/core';
import {IPrivateCustomer} from '../../../../../models/Customer/PrivateCustomer'
import {MatDialog} from '@angular/material/dialog';
import {CompanyService} from '../../../services/companylist'
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';



const company: ICompanyCustomer[] = CompanyService.getData();



@Component({
selector: 'company-component',
templateUrl: './company.component.html',
styleUrls: ['./company.component.css']
})
export class Company  {
  //init the data
  displayedColumns = ["id", "name", "companyLocation","shippingAdress","contactPerson"];


   // MatPaginator Inputs
   length = company.length;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10];
   dataSource = company.slice(0,this.pageSize);
   pageIndex = 0
   goToPage($event){
     this.length = $event.length;
     this.pageSize =$event.pageSize;
     this.dataSource = company.slice(this.pageSize* $event.pageIndex,this.pageSize* $event.pageIndex+this.pageSize);
     this.pageIndex = $event.pageIndex;
    }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  updateCustomer(row : ICompanyCustomer){
    console.dir(row)
    alert(row.contactPersons)
  }

  constructor(public dialog: MatDialog) {}

  deleteCustomer(row : ICompanyCustomer){
     if(confirm('Wollen Sie ' + row.contactPersons +'löschen?')){
          this.dataSource = this.dataSource.filter(companies => companies.contactPersons !== row.contactPersons);
          this.length = this.dataSource.length;
          this.refresh();
     }
  }

  addCustomer(){
    alert('Mhh das geht noch nicht ganz')
  }

  refresh() {
      this.dataSource = this.dataSource;
    }

}