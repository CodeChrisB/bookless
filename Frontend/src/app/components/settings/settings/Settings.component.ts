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
    public now: String = '.';
    timer = null;
    customers: IPrivateCustomer[] = CustomerService.getAllCustomers().filter(c => c.id < 10);
    companies: ICompanyCustomer[] = CompanyService.getData().filter(c => c.id < 10);
    show = true;
    totalCustomers = 100;
    newCustomers = 100;

    private weekDays = ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    private months = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

    constructor(private route: Router) {
        this.timer = setInterval(() => {
          this.now = DateFormatter.getCurrentTimeAsString();
        }, 1000);
        this.totalCustomers = TotalCustomerService.getTotalCustomerAmount();
        this.newCustomers = TotalCustomerService.getNewCustomerAmount();
    }

  ngOnInit(){
    this.now = DateFormatter.getCurrentTimeAsString();
  }

  ngOnDestroy() {
    // Will remove the timer on component change
    clearInterval(this.timer);
  }

  goToShowCustomerPage(id: number){
    this.route.navigate(['/app/crm/customer/show'], { state: {mode: 'show', id } });
  }

  goToShowCompanyPage(id: number){
    this.route.navigate(['/app/crm/company/show'], { state: {mode: 'show', id } });
  }
}
