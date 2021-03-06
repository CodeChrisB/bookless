import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { IPrivateCustomer } from 'src/models/Customer/PrivateCustomer';
import { CompanyService } from '../../services/crm/companylist';
import { TotalCustomerService } from '../../services/crm/customerData';
import { CustomerService } from '../../services/crm/customerlist';
import { DateFormatter } from '../../services/tools/dateFormatter';
@Component({
selector: 'Settings-component',
templateUrl: './Settings.component.html',
styleUrls: ['./Settings.component.css']
})
export class SettingsComponent implements OnInit {
  companyService: any;
    constructor(private route :Router, public customerService:CustomerService) {
    this.timer = setInterval(() => {
      this.now = DateFormatter.getCurrentTimeAsString();
    }, 1000);
    this.totalCustomers = TotalCustomerService.getTotalCustomerAmount();
    this.newCustomers = TotalCustomerService.getNewCustomerAmount();
    this.customerService = customerService;
}
    public now: String = "."
    timer =null;
    public customers: IPrivateCustomer[]; 
    companies: ICompanyCustomer[];
    show=true;
    totalCustomers:number=100;
    newCustomers:number=100; 
  
    private weekDays=['Sontag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
    private months=['Jänner','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];

  
  async ngOnInit(){
    this.now = DateFormatter.getCurrentTimeAsString();
    this.customers = await this.customerService.getAllCustomers();
    console.log(this.customers);
    this.companies = this.companyService.getData().filter(c=>c.id<10)
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