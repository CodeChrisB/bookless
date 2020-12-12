import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//main
import { Dashboard } from "./components/app/dashboard/dashboard.component";
import { Company } from "./components/app/crm/company/company.component";
import { Customer } from "./components/app/crm/customer/customer.component";
import { Offer } from './components/app/bill/offer.component';
import { Heatexchanger } from './components/app/products/heatexchanger.component';
import { MainComponent } from './components/app/main/main/main.component';
//profile
import { Profile } from "./components/profile/profile.component";
//settings

import { SettingsComponent } from './components/settings/settings/Settings.component';
import { SettingsDashboard } from "./components/settings/dashboard/dashboard.component"
const routes: Routes = [
    //if you have problems with the component
    //check the name of it in the name.component.ts file
    { path: 'app', component: MainComponent,
      children: [
        { path: "dashboard",  component: Dashboard, },
        { path: "crm/customer",  component: Customer, },
        { path: "crm/company",  component: Company, },
        { path: "bill/offer",  component: Offer, },
        { path: "products/heatexchanger",  component: Heatexchanger, }

      ] },


      { path: 'settings', component: SettingsComponent,
        children: [
          { path: "dashboard",  component: SettingsDashboard, }
        ] },

    { path: "profile/user",  component: Profile,children:[]},

    { path: '', pathMatch: 'full', redirectTo: 'app/dashboard' }, //standard path
   // { path: "*", redirectTo:"app/dashboard"}, //redirect wrong urls to the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
