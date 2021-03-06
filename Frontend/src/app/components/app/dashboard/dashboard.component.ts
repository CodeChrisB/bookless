import { Component, OnInit } from '@angular/core';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { IPrivateCustomer } from 'src/models/Customer/PrivateCustomer';
import { CompanyService } from '../../services/crm/companylist';
import { CustomerService } from '../../services/crm/customerlist';
import { TotalCustomerService } from '../../services/crm/customerData';
import { Router } from '@angular/router';
import { DateFormatter } from '../../services/tools/dateFormatter';

@Component({
selector: 'dashboard-component',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {


  public now: String = "."
  timer =null;
  customers: IPrivateCustomer[];
  companies: ICompanyCustomer[] = this.companyService.getData().filter(c=>c.id<10);
  show=true;
  totalCustomers:number=100;
  newCustomers:number=100;

  private weekDays=['Sontag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
  private months=['Jänner','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  customerService: CustomerService;

  constructor(private route :Router , customerService:CustomerService, private companyService:CompanyService) {
      this.timer = setInterval(() => {
        this.now = DateFormatter.getCurrentTimeAsString();
      }, 1000);
      this.totalCustomers = TotalCustomerService.getTotalCustomerAmount();
      this.newCustomers = TotalCustomerService.getNewCustomerAmount();
      this.customerService = customerService;
      this.companyService = companyService;
  }

async ngOnInit(){
  this.now = DateFormatter.getCurrentTimeAsString();
  this.customers = (await this.customerService.getAllCustomers());
  console.log(this.customers);
}

ngOnDestroy() {
  // Will remove the timer on component change
  clearInterval(this.timer);
}
 
goToShowCustomerPage(id:number){
  this.route.navigate(['/app/crm/customer/show'], { state: {mode:'show', id: id } });
}

goToShowCompanyPage(id:number){
  this.route.navigate(['/app/crm/company/show'], { state: {mode:'show', id: id } });
}

}
