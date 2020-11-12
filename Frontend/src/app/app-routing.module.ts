import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dashboard } from "./components/dashboard.component";
//import { CustomerComponent } from "./customer/customer.component";
//import { HelloUniverseComponent } from "./hello-universe/hello-universe.component";
//import { HelloWorldComponent } from "./hello-world/hello-world.component";

const routes: Routes = [
    { path: "components/dashboard",  component: Dashboard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
