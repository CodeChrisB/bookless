import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dashboard } from "./components/dashboard/dashboard.component";
import { Profile } from "./components/profile/profile.component";
//import { CustomerComponent } from "./customer/customer.component";
//import { HelloUniverseComponent } from "./hello-universe/hello-universe.component";
//import { HelloWorldComponent } from "./hello-world/hello-world.component";

const routes: Routes = [
    //if you have problems with the component 
    //check the name of it in the name.component.ts file
    { path: "dashboard",  component: Dashboard, },
    { path: "profile",  component: Profile, }, 
    { path: "*",redirectTo:"dashboard"} //redirect wrong urls to the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
