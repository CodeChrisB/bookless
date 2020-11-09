import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dashboard } from "./components/dashboard.component";
//import { CustomerComponent } from "./customer/customer.component";
//import { HelloUniverseComponent } from "./hello-universe/hello-universe.component";
//import { HelloWorldComponent } from "./hello-world/hello-world.component";

const routes: Routes = [
    { path: "./components/dashboard",  component: Dashboard }
    //{ path: "main", pathMatch: "full", redirectTo: "main" },
    //{ path: "settings", pathMatch: "full", redirectTo: "settings" },

  //{ path: "", pathMatch: "full", redirectTo: "dashboard" },
 // { path: "hello-world", component: HelloWorldComponent },
  //{ path: "hello-universe", component: HelloUniverseComponent },
 // { path: "customers/:id", component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
