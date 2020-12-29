import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//main
import { Dashboard } from "./components/app/dashboard/dashboard.component";
import { Company } from "./components/app/crm/company/company.component";
import { Customer } from "./components/app/crm/customer/customer.component";
import { Offer } from './components/app/bill/offer/list/offer.component';
import { OfferView } from './components/app/bill/offer/offerView/offerView.component'
import { Heatexchanger } from './components/app/products/heatexchanger/heatexchanger.component';
import { MainComponent } from './components/app/main/main/main.component';
//profile
import { Profile } from "./components/profile/profile/profile.component";
//settings

import { SettingsComponent } from './components/settings/settings/Settings.component';
import { SettingsDashboard } from "./components/settings/dashboard/dashboard.component"
import { addCustomer } from "./components/app/crm/customer/customerData/customerData";
import { addCompanyCustomer } from "./components/app/crm/company/companyData/customerData";
import { HeatexchangerData } from "./components/app/products/ProductData/ProductData";
import { ProfileSettings } from "./components/profile/settings/profileSettings.component";
const routes: Routes = [
    { path: 'app', component: MainComponent,
      children: [
        { path: "dashboard",  component: Dashboard, },
        //crm
        { path: "crm/customer",  component: Customer, },
        { path: "crm/company",  component: Company, },
        { path: "crm/customer/new",  component: addCustomer, },
        { path: "crm/customer/edit",  component: addCustomer, },
        { path: "crm/customer/show",  component: addCustomer, },
        { path: "crm/company/show",  component: addCompanyCustomer, },
        { path: "crm/company/edit",  component: addCompanyCustomer, },
        { path: "crm/company/new",  component: addCompanyCustomer, },

        //bills
        { path: "bill/offer",  component: Offer, },
        { path: "bill/offer/pdf", component:OfferView},
        { path: "products/heatexchanger",  component: Heatexchanger },
        { path: "products/heatexchanger/edit",  component: HeatexchangerData },
        { path: "products/heatexchanger/show",  component: HeatexchangerData },
        { path: "products/heatexchanger/new",  component: HeatexchangerData }
      ]
    },

      { path: 'settings', component: SettingsComponent,
        children: [
          { path: "dashboard",  component: SettingsDashboard, }
        ] },
    { path: "profile/user",  component: Profile},
    { path: "profile/settings",  component: ProfileSettings},

    { path: '', pathMatch: 'full', redirectTo: 'app/dashboard' }, //standard path
    { path: "*", redirectTo:"app/dashboard"}, //redirect wrong urls to the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
