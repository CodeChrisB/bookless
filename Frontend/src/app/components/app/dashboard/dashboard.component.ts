import { Component, OnInit } from '@angular/core';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { IPrivateCustomer } from 'src/models/Customer/PrivateCustomer';
import { CompanyService } from '../../services/crm/companylist';
import { CustomerService } from '../../services/crm/customerlist';

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

  private weekDays=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sontag'];
  private months=['Jänner','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  constructor() {
      this.timer = setInterval(() => {
        this.setTime()
      }, 1000);
  }

  setTime(){
    var date = new Date();
    this.now = this.weekDays[date.getUTCDay()-1]
    this.now += date.toString().substring(7,11)
    this.now+= this.months[date.getUTCMonth()]
    this.now +=date.toString().substring(15,25)
  }

ngOnInit(){
  this.setTime()
}

ngOnDestroy() {
  // Will clear the timer on component change
  clearInterval(this.timer);
}

}
