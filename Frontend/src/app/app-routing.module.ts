import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dashboard } from "./components/dashboard/dashboard.component";
import { Profile } from "./components/profile/profile.component";
import { Company } from "./components/crm/company/company.component";
import { Customer } from "./components/crm/customer/customer.component";
import { Offer } from './components/bill/offer.component';
import { Heatexchanger } from './components/products/heatexchanger.component';
import { MainComponent } from './main/main/main.component';
//import { CustomerComponent } from "./customer/customer.component";
//import { HelloUniverseComponent } from "./hello-universe/hello-universe.component";
//import { HelloWorldComponent } from "./hello-world/hello-world.component";

const routes: Routes = [
    //if you have problems with the component 
    //check the name of it in the name.component.ts file
    { path: 'app', component: MainComponent,
      children: [
        { path: "dashboard",  component: Dashboard, },
        { path: "crm/customer",  component: Customer, },
        { path: "crm/company",  component: Company, },
        { path: "bill/offer",  component: Offer, },  
        { path: "products/heatexchanger",  component: Heatexchanger, },

      ] },
    { path: '', pathMatch: 'full', redirectTo: 'app' },
    { path: "*", redirectTo:"app/dashboard"}, //redirect wrong urls to the dashboard
    { path: "profile",  component: Profile, },
];






@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
