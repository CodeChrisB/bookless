import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// main
import { Dashboard } from './components/app/dashboard/dashboard.component';
import { Company } from './components/app/crm/company/company.component';
import { Customer } from './components/app/crm/customer/customer.component';
import { Offer } from './components/app/bill/offer/listOffer/offer.component';
import { Heatexchanger } from './components/app/products/heatexchanger/heatexchanger.component';
import { MainComponent } from './components/app/main/main/main.component';
// profile
import { Profile } from './components/profile/profile/profile.component';
// settings

import { addCustomer } from './components/app/crm/customer/customerData/customerData';
import { addCompanyCustomer } from './components/app/crm/company/companyData/customerData';
import { HeatexchangerData } from './components/app/products/ProductData/ProductData';
import { ProfileSettings } from './components/profile/settings/profileSettings.component';
import { Confirmation } from './components/app/bill/confirmation/list/confirmation.component';
const routes: Routes = [
    { path: 'app', component: MainComponent,
      children: [
        { path: 'dashboard',  component: Dashboard, },
        // crm
          // customer
          { path: 'crm/customer',  component: Customer, },
          { path: 'crm/customer/new',  component: addCustomer, },
          { path: 'crm/customer/edit',  component: addCustomer, },
          { path: 'crm/customer/show',  component: addCustomer, },
          // company
          { path: 'crm/company',  component: Company, },
          { path: 'crm/company/show',  component: addCompanyCustomer, },
          { path: 'crm/company/edit',  component: addCompanyCustomer, },
          { path: 'crm/company/new',  component: addCompanyCustomer, },
        // sales
        { path: 'sales/offer',  component: Offer, },
        { path: 'sales/offer/show', component: Offer},
        { path: 'sales/offer/edit', component: Offer},
        //confirmation
        { path: 'sales/confirmation',  component: Confirmation, },
        { path: 'sales/confirmation/show', component: Confirmation},
        { path: 'sales/confirmation/edit', component: Confirmation},

        // products
        { path: 'products/heatexchanger',  component: Heatexchanger },
        { path: 'products/heatexchanger/edit',  component: HeatexchangerData },
        { path: 'products/heatexchanger/show',  component: HeatexchangerData },
        { path: 'products/heatexchanger/new',  component: HeatexchangerData },


        //Add Bill Data
        { path: 'sales/offer/new',  component: AddDialog },
        { path: 'sales/confirmation/new',  component: AddDialog, }

      ]
    },

      { path: 'settings', component: MainsettingsComponent,
        children: [
          { path: 'dashboard',  component: SettingsdashboardComponent},
          { path: 'sales',  component: SalesComponent}
        ] },
    { path: 'profile/user',  component: Profile},
    { path: 'profile/settings',  component: ProfileSettings},

    { path: '', pathMatch: 'full', redirectTo: 'app/dashboard' }, // standard path
    { path: '*', redirectTo: 'app/dashboard'}, // redirect wrong urls to the dashboard
];

import { MainsettingsComponent } from './components/settings/Main/MainSettings.component';

import { SettingsdashboardComponent } from './components/settings/Dashboard/SettingsDashboard.component';


import { SalesComponent } from './components/settings/Sales/Sales.component';
import { AddDialog } from './components/app/bill/AddDialog/addDialog.component';


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
