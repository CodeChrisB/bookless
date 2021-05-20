import { Component, OnInit, ViewChild } from '@angular/core';
import { ICompanyCustomer } from 'src/models/Customer/CompanyCustomer';
import { IPrivateCustomer } from 'src/models/Customer/PrivateCustomer';
import { CompanyService } from '../../services/crm/companylist';
import { CustomerService } from '../../services/crm/customerlist';
import { TotalCustomerService } from '../../services/crm/customerData';
import { Router } from '@angular/router';
import { DateFormatter } from '../../services/tools/dateFormatter';
import { DashboardType } from 'src/models/Dashboard/DashboardType';
import { MatRipple } from '@angular/material/core';

@Component({
selector: 'dashboard-component',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {


  public now: String = '.';
  timer = null;
  customers: IPrivateCustomer[] = CustomerService.getAllCustomers().filter(c => c.id < 10);
  companies: ICompanyCustomer[] = CompanyService.getData().filter(c => c.id < 10);
  show = true;
  totalCustomers = 100;
  newCustomers = 100;
  type:DashboardType= DashboardType.Today;
  types ={
    today:DashboardType.Today,
    order:DashboardType.Order,
    sale:DashboardType.Sale,
    bill:DashboardType.Bill,
    customer:DashboardType.Customer
  }

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

  today(){
    this.changeDashboard(DashboardType.Today)
  }

  order(){
    this.changeDashboard(DashboardType.Order);
  }
  sale(){
    this.changeDashboard(DashboardType.Sale);
  }
  bill(){
    this.changeDashboard(DashboardType.Bill)
  }
  customer(){
    this.changeDashboard(DashboardType.Customer);
  }
  private changeDashboard(type : DashboardType){
    this.type=type;
  }


   /** Reference to the directive instance of the ripple. */
   @ViewChild(MatRipple) ripple: MatRipple;

   /** Shows a centered and persistent ripple. */
   launchRipple() {
     const rippleRef = this.ripple.launch({
       persistent: true,
       centered: true
     });
 
     // Fade out the ripple later.
     rippleRef.fadeOut();
   }

}
