import { Component, OnInit } from '@angular/core';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { IPrivateCustomer } from 'src/models/Customer/PrivateCustomer';
import { CompanyService } from '../../services/crm/companylist';
import { CustomerService } from '../../services/crm/customerlist';
import { TotalCustomerService } from '../../services/crm/customerData';

@Component({
selector: 'dashboard-component',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {

  public now: String = "."
  timer =null;
  customers: IPrivateCustomer[] = CustomerService.getAllCustomers().filter(c=>c.id<10);
  companies: ICompanyCustomer[] = CompanyService.getData().filter(c=>c.id<10);
  show=true;
  totalCustomers:number=100;
  newCustomers:number=100;

  private weekDays=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sontag'];
  private months=['Jänner','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  constructor() {
      this.timer = setInterval(() => {
        this.setTime()
      }, 1000);
      this.totalCustomers = TotalCustomerService.getTotalCustomerAmount();
      this.newCustomers = TotalCustomerService.getNewCustomerAmount();
  }

  setTime(){
    var date = new Date();
    //todo rework this part this has to be done easier
    this.now = this.weekDays[date.getUTCDay()-1]
    this.now += date.toString().substring(7,11)
    this.now+= this.months[date.getUTCMonth()]
    this.now +=date.toString().substring(15,25)
  }

ngOnInit(){
  this.setTime()
}

ngOnDestroy() {
  // Will remove the timer on component change
  clearInterval(this.timer);
}

}
