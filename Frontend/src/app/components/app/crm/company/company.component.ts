import { Component, OnInit } from '@angular/core';
import {IPrivateCustomer} from '../../../../../models/Customer/PrivateCustomer'
import {MatDialog} from '@angular/material/dialog';
import {CompanyService} from '../../../services/crm/companylist'
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { ContactPerson } from 'src/models/ContactPerson';
import { Router } from '@angular/router';



@Component({
selector: 'company-component',
templateUrl: './company.component.html',
styleUrls: ['./company.component.css']
})
export class Company  {
  //init the data
  company: ICompanyCustomer[] =   this.companyService.getData();
  displayedColumns = ["id", "name", "companyLocation","shippingAdress","contactPerson","actions"];


   // MatPaginator Inputs
   length = this.company.length;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10];
   dataSource = this.company.slice(0,this.pageSize);
   pageIndex = 0
   goToPage($event){
     this.length = $event.length;
     this.pageSize =$event.pageSize;
     this.dataSource = this.company.slice(this.pageSize* $event.pageIndex,this.pageSize* $event.pageIndex+this.pageSize);
     this.pageIndex = $event.pageIndex;
    }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  } 


  constructor(public dialog: MatDialog,public route: Router, private companyService:CompanyService) {
     this.companyService = companyService;
  }

  deleteCustomer(row : ICompanyCustomer){
     if(confirm('Wollen Sie ' + row.contactPersons +'löschen?')){
          this.dataSource = this.dataSource.filter(companies => companies.contactPersons !== row.contactPersons);
          this.length = this.dataSource.length;
          this.refresh();
     }
  }



  refresh() {
      this.dataSource = this.dataSource;
    }




    getFirstAdress(p:ICompanyCustomer):string{
      //get the first shipping adress

      return p.shippingAdress[0].adress;
    }

    getFirstContactPerson(p:ContactPerson):string{
      //get the first contact person phone number
      return p[0].email;
    }


    //customerData routing methods

    showCustomer(row : ICompanyCustomer) {
      this.route.navigate(['/app/crm/company/show'], { state: {mode:'show', id: row.id } });
     }

     updateCustomer(row : ICompanyCustomer){
       console.dir(row)
       this.route.navigate(['/app/crm/company/edit'], { state: {mode:'edit', id: row.id } });
     }

     addCustomer(){
       this.route.navigate(['/app/crm/company/new'] , { state: {mode:'add' } });
     }






}
