import { Component, OnInit, ViewChild } from '@angular/core';
import {IPrivateCustomer} from '../../../../../models/Customer/PrivateCustomer';
import {MatDialog} from '@angular/material/dialog';
import {CustomerService} from '../../../services/crm/customerlist';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { IEmailData } from 'src/models/email/emailData';
import { EmailHandler } from 'src/app/components/services/tools/emailHandler';
import { StringShortener } from 'src/app/components/services/tools/StringShortner';
import { IRawProduct } from 'src/models/Product/RawProduct';
import { RawProductService } from 'src/app/components/services/prodcut/rawProduct';


const products: IRawProduct[] = RawProductService.getAllProducts();



@Component({
  selector: 'customer-component',
  templateUrl: './heatexchanger.component.html',
  styleUrls: ['./heatexchanger.component.css']
})
export class Heatexchanger  {
  // init the data
  displayedColumns = ['id', 'name', 'description', 'price', 'actions'];
  productId: number;
  name: string;
  description: string;

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

   // MatPaginator Inputs
   length = products.length;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];
   dataSource = products.slice(0, this.pageSize);
   pageIndex = 0;
   goToPage($event){
     this.length = $event.length;
     this.pageSize = $event.pageSize;
     this.dataSource = products.slice(this.pageSize * $event.pageIndex, this.pageSize * $event.pageIndex + this.pageSize);
     this.pageIndex = $event.pageIndex;
    }

  showCustomer(row: IRawProduct) {
   this.route.navigate(['/app/products/heatexchanger/show'], { state: {mode: 'show', id: row.productId } });
  }

  updateCustomer(row: IRawProduct){
    console.dir(row);
    this.route.navigate(['/app/products/heatexchanger/edit'], { state: {mode: 'edit', id: row.productId } });
  }

  addCustomer(){
    this.route.navigate(['/app/products/heatexchanger/new'] , { state: {mode: 'add' } });
  }


  short( string: string, number: number){
    return StringShortener.Trim(string, number);
  }


  constructor(public dialog: MatDialog, private route: Router) {}

  deleteCustomer(row: IRawProduct){
     if (confirm('Wollen Sie löschen?')){
          this.dataSource = RawProductService.getAllProducts().filter(customers => customers.productId !== row.productId);
          this.length = this.dataSource.length;
          this.refresh();
     }
  }

  mailCustomer(row: IRawProduct){
    let customer = CustomerService.getCustomer(row.productId);
    let text = 'Sehr ' + (customer.gender == 'm' ? 'geehrter Herr,' : 'geehrte Frau,') + customer.lName;
    let emailData: IEmailData = {email: customer.email, subject: 'Subject ', content: text};
    EmailHandler.sendEmail(emailData);
  }




  refresh() {
      this.dataSource = this.dataSource;
    }

}
