"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard.component");
//import { CustomerComponent } from "./customer/customer.component";
//import { HelloUniverseComponent } from "./hello-universe/hello-universe.component";
//import { HelloWorldComponent } from "./hello-world/hello-world.component";
var routes = [
    { path: "./components/dashboard", component: dashboard_component_1.Dashboard }
    //{ path: "main", pathMatch: "full", redirectTo: "main" },
    //{ path: "settings", pathMatch: "full", redirectTo: "settings" },
    //{ path: "", pathMatch: "full", redirectTo: "dashboard" },
    // { path: "hello-world", component: HelloWorldComponent },
    //{ path: "hello-universe", component: HelloUniverseComponent },
    // { path: "customers/:id", component: CustomerComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { enableTracing: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
