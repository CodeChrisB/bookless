(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Git\bookless\Frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0VDA":
/*!******************************************************************!*\
  !*** ./src/app/components/app/main/sidenav/sidenav.component.ts ***!
  \******************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/services/profile/UserService */ "2BtR");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function SidenavComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_p_2_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_p_3_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.openCrm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CRM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "perm_identity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kunden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "business");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Firmen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_p_6_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openBill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Verkauf");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angebot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Best\u00E4tigung");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rechnung");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lieferschein");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_p_11_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Produkte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "microwave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "W\u00E4rmetauscher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        // current stat of the tabs
        this.crmOpen = false;
        this.billOpen = false;
        this.productOpen = false;
        // close others tabs when open a new one
        this.closeOnClick = true;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.user = src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUser(1);
    };
    SidenavComponent.prototype.openDashboard = function () {
        console.log('Called: openDashboard');
    };
    SidenavComponent.prototype.openProduct = function () {
        this.productOpen = !this.productOpen;
        if (this.closeOnClick) {
            this.billOpen = !this.productOpen;
            this.crmOpen = false;
        }
    };
    SidenavComponent.prototype.openBill = function () {
        this.billOpen = !this.billOpen;
        if (this.closeOnClick) {
            this.productOpen = false;
            this.crmOpen = false;
        }
    };
    SidenavComponent.prototype.openCrm = function () {
        this.crmOpen = !this.crmOpen;
        if (this.closeOnClick) {
            this.productOpen = false;
            this.billOpen = !this.crmOpen;
        }
    };
    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
    SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["sidenav"]], decls: 13, vars: 11, consts: [["ngIF", "isMenuOpen", 1, "example-container"], ["class", "button-container", "routerLink", "dashboard", 3, "click", 4, "ngIf"], ["class", "button-container", 3, "click", 4, "ngIf"], ["id", "child", "class", "button-container", "routerLink", "crm/customer", 4, "ngIf"], ["id", "child", "class", "button-container", "routerLink", "crm/company", 4, "ngIf"], ["id", "child", "class", "button-container", 4, "ngIf"], ["id", "child", "class", "button-container", "routerLink", "products/heatexchanger", 4, "ngIf"], ["routerLink", "dashboard", 1, "button-container", 3, "click"], ["mat-button", ""], [1, "button-container", 3, "click"], ["id", "child", "routerLink", "crm/customer", 1, "button-container"], ["id", "child", "routerLink", "crm/company", 1, "button-container"], ["id", "child", 1, "button-container"], ["mat-button", "", "routerLink", "sales/offer"], ["mat-button", "", "routerLink", "sales/confirmation"], ["mat-button", "", "routerLink", "sales/bill"], ["disabled", "", "mat-button", "", "routerLink", "sales/null"], ["id", "child", "routerLink", "products/heatexchanger", 1, "button-container"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_p_2_Template, 5, 0, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_p_3_Template, 5, 0, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavComponent_p_4_Template, 5, 0, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_p_5_Template, 5, 0, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_p_6_Template, 5, 0, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_p_7_Template, 5, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidenavComponent_p_8_Template, 5, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidenavComponent_p_9_Template, 5, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SidenavComponent_p_10_Template, 5, 0, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidenavComponent_p_11_Template, 5, 0, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidenavComponent_p_12_Template, 5, 0, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.dashboard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.crm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.crmOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.crmOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.bills);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.products);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productOpen);
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    height: 85vh;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    float: left;\r\n    width: 15vw;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    margin-left: 1.5vw;\r\n  }\r\n\r\n  .mat-icon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    float: left;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%]{\r\n    all: unset;\r\n    margin: auto;\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  div[_ngcontent-lgl-c156][_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\n  div[_ngcontent-%COMP%]{\r\n  padding-left: 5%;\r\n  margin:0px\r\n}\r\n\r\n  p[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n}\r\n\r\n  p.button-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding-left: 1vw;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n  .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n}\r\n\r\n  .mat-drawer-content[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n}\r\n\r\n  #child[_ngcontent-%COMP%]{\r\n margin: 0px;\r\n  padding-left: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUdBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtBQUNoQjs7RUFJQTtFQUNFLGdCQUFnQjtFQUNoQjtBQUNGOztFQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCOztFQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0VBR0E7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBR0E7Q0FDQyxXQUFXO0VBQ1Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIH1cclxuXHJcblxyXG4gIGRpdntcclxuICAgIGFsbDogdW5zZXQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBkaXZbX25nY29udGVudC1sZ2wtYzE1Nl0ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbmRpdntcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbjowcHhcclxufVxyXG5cclxuXHJcbnA6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnAuYnV0dG9uLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDF2dztcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LXR5cG9ncmFwaHkgcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm1hdC1kcmF3ZXItY29udGVudHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuI2NoaWxke1xyXG4gbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
    return SidenavComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "2BtR":
/*!************************************************************!*\
  !*** ./src/app/components/services/profile/UserService.ts ***!
  \************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


//#region init the image
var image = 'data:image/jpeg;base64,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';
//#endregion
var prems = { admin: { read: true, write: true }, dashboard: { read: true, write: true }, crm: { read: true, write: true }, bills: { read: true, write: true }, products: { read: true, write: true }, settings: { read: true, write: true } };
var user = [
    { id: 1, fname: 'Chris', lname: 'Buchberger', phone: '06776239005', email: 'c.buchberger01@gmail.com', fax: '+43 06473/42221', rank: 'Project Manager', premissions: prems, image: image, globals: { generateEmailText: true } },
    { id: 2, fname: 'Max', lname: 'Buchberger', phone: '06776239005', email: 'c.buchberger01@gmail.com', fax: '+43 06473/42221', rank: 'Project Manager', premissions: prems, image: image, globals: { generateEmailText: true } },
    { id: 3, fname: 'Manuel', lname: 'Brandstätter', phone: '06776239005', email: 'c.buchberger01@gmail.com', fax: '+43 06473/42221', rank: 'Project Manager', premissions: prems, image: image, globals: { generateEmailText: true } },
    { id: 4, fname: 'Niklas', lname: 'Moser', phone: '06776239005', email: 'c.buchberger01@gmail.com', fax: '+43 06473/42221', rank: 'Project Manager', premissions: prems, image: image, globals: { generateEmailText: true } },
    { id: 5, fname: 'Franz', lname: 'Auernig', phone: '06776239005', email: 'c.buchberger01@gmail.com', fax: '+43 06473/42221', rank: 'Project Manager', premissions: prems, image: image, globals: { generateEmailText: true } },
    { id: 6, fname: 'Peter', lname: 'Bauer', phone: '06776239005', email: 'c.buchberger01@gmail.com', fax: '+43 06473/42221', rank: 'Project Manager', premissions: prems, image: image, globals: { generateEmailText: true } },
    { id: 1, fname: 'Chris', lname: 'Buchberger', phone: '06776239005', email: 'c.buchberger01@gmail.com', fax: '+43 06473/42221', rank: 'Project Manager', premissions: prems, image: null, globals: { generateEmailText: true } },
];
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.getUser = function (id) {
        return user.filter(function (user) { return user.id == id; })[0];
    };
    UserService.getUserCount = function () {
        return;
    };
    UserService.getUserNameList = function () {
        var list = new Array();
        user.forEach(function (user) {
            list.push({ string: user.fname + ' ' + user.lname, id: user.id });
        });
        return list;
    };
    UserService.updateUser = function (updatedUser) {
        user.filter(function (x) {
            if (x.id == updatedUser.id) {
                x = updatedUser;
            }
        });
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "2dNW":
/*!************************************!*\
  !*** ./src/models/bill/PdfType.ts ***!
  \************************************/
/*! exports provided: PdfType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfType", function() { return PdfType; });
var PdfType;
(function (PdfType) {
    PdfType[PdfType["Offer"] = 0] = "Offer";
    PdfType[PdfType["Confirmation"] = 1] = "Confirmation";
    PdfType[PdfType["Bill"] = 2] = "Bill";
    PdfType[PdfType["DeliveryNote"] = 3] = "DeliveryNote";
})(PdfType || (PdfType = {}));


/***/ }),

/***/ "2tP4":
/*!********************************************************************!*\
  !*** ./src/app/components/settings/Main/MainSettings.component.ts ***!
  \********************************************************************/
/*! exports provided: MainsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainsettingsComponent", function() { return MainsettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Sidebar_SettingsSidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sidebar/SettingsSidenav.component */ "SwVC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/main/footer/footer.component */ "Dfmv");





var MainsettingsComponent = /** @class */ (function () {
    function MainsettingsComponent() {
    }
    MainsettingsComponent.prototype.ngOnInit = function () {
    };
    MainsettingsComponent.ɵfac = function MainsettingsComponent_Factory(t) { return new (t || MainsettingsComponent)(); };
    MainsettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainsettingsComponent, selectors: [["MainSettings-component"]], decls: 5, vars: 0, template: function MainsettingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SettingsSidenav-component");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Test ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_Sidebar_SettingsSidenav_component__WEBPACK_IMPORTED_MODULE_1__["SettingssidenavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _app_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJNYWluU2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"] });
    return MainsettingsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainsettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'MainSettings-component',
                templateUrl: './MainSettings.component.html',
                styleUrls: ['./MainSettings.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3YZS":
/*!**************************************************************************!*\
  !*** ./src/app/components/app/crm/customer/customerData/customerData.ts ***!
  \**************************************************************************/
/*! exports provided: addCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomer", function() { return addCustomer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/services/crm/customerlist */ "rh7+");
/* harmony import */ var src_app_components_services_tools_emailHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/services/tools/emailHandler */ "h97D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function addCustomer_mat_button_toggle_29_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function addCustomer_mat_button_toggle_29_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.mailCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "local_post_office");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var addCustomer = /** @class */ (function () {
    function addCustomer(route, activatedRoute) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.id = undefined;
        this.editMode = false;
        this.showMode = false;
        this.addMode = false;
        this.msg = '';
        this.locked = false;
        this.customer = {
            fName: '',
            lName: '',
            gender: '',
            phone: '',
            email: '',
            location: {
                domicile: '',
                orderAdress: '',
                orderAdressOptional: ''
            },
            customerLocation: {
                town: '',
                plz: '',
                street: '',
                country: ''
            }
        };
        this.customerObject = { id: 0,
            adress: '',
            phoneNumber: '',
            email: '', fName: '',
            lName: '', gender: '',
            customerLocation: {
                town: '',
                plz: '',
                street: '',
                country: ''
            }
        };
    }
    //#region All the Init Methods
    addCustomer.prototype.ngOnInit = function () {
        if (history.state.mode == undefined && this.route.url.includes('edit') || history.state.mode == undefined && this.route.url.includes('show')) {
            this.route.navigate(['/app/crm/customer']);
        }
        else {
            if (history.state.mode == 'show') {
                this.locked = true;
                this.initShow();
                this.showMode = true;
            }
            else {
                this.editMode = history.state.mode == 'edit';
                if (this.editMode) {
                    this.initEdit();
                    this.editMode = true;
                }
                else {
                    this.initAdd();
                    this.addMode = true;
                }
            }
        }
    };
    addCustomer.prototype.initShow = function () {
        this.msg = 'Zurück';
        this.id = history.state.id;
        var customer = src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].getCustomer(this.id);
        console.dir(customer);
        this.customer.fName = customer.fName;
        this.customer.lName = customer.lName;
        this.customer.location.domicile = 'Nope';
        this.customer.email = customer.email;
    };
    addCustomer.prototype.initEdit = function () {
        this.msg = 'Änderungen speichern';
        this.id = history.state.id;
        var customer = src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].getCustomer(this.id);
        this.customer.fName = customer.fName;
        this.customer.lName = customer.lName;
        this.customer.location.domicile = 'Nope';
        this.customer.email = customer.email;
        this.customer.gender = this.customer.gender;
    };
    addCustomer.prototype.initAdd = function () {
        this.msg = 'Hinzufügen';
    };
    //#endregion
    // decides what should happen when the green button is pressed
    addCustomer.prototype.doCustomer = function () {
        if (history.state.mode == 'show') {
            this.route.navigate(['/app/crm/customer']);
        }
        else if (this.editMode) {
            this.updateCustomer();
        }
        else {
            this.addCustomer();
        }
    };
    addCustomer.prototype.addCustomer = function () {
        this.customerObject.fName = this.customer.fName;
        this.customerObject.lName = this.customer.lName;
        this.customerObject.adress = this.customer.location.domicile;
        this.customerObject.email = this.customer.email;
        this.customerObject.gender = this.customer.gender;
        this.customerObject.id = 100;
        src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].addPrivatCustomer(this.customerObject);
        this.route.navigate(['/app/crm/customer']);
    };
    addCustomer.prototype.updateCustomer = function () {
        this.customerObject.fName = this.customer.fName;
        this.customerObject.lName = this.customer.lName;
        this.customerObject.adress = this.customer.location.domicile;
        this.customerObject.email = this.customer.email;
        this.customerObject.gender = this.customer.gender;
        this.customerObject.phoneNumber = this.customer.phone;
        this.customerObject.id = this.id;
        src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].setCustomer(this.id, this.customerObject);
        this.route.navigate(['/app/crm/customer']);
    };
    addCustomer.prototype.mailCustomer = function () {
        var text = 'Sehr ' + (this.customer.gender == 'm' ? 'geehrter Herr,' : 'geehrte Frau,') + this.customer.lName;
        var emailData = { email: this.customer.email, subject: 'Subject ', content: text };
        src_app_components_services_tools_emailHandler__WEBPACK_IMPORTED_MODULE_2__["EmailHandler"].sendEmail(emailData);
    };
    addCustomer.prototype.mailAllCustomers = function () {
        var emailData = src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].getAllCustomers().map(function (x) { return x.email; });
        src_app_components_services_tools_emailHandler__WEBPACK_IMPORTED_MODULE_2__["EmailHandler"].sendBulkEmail(emailData);
    };
    addCustomer.ɵfac = function addCustomer_Factory(t) { return new (t || addCustomer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    addCustomer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: addCustomer, selectors: [["customer-component"]], decls: 30, vars: 25, consts: [[1, "block"], ["type", "text", "name", "fname", "placeholder", "Vorname", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "lname", "placeholder", "Nachname", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", 3, "disabled"], ["value", "m"], ["value", "f"], ["type", "text", "name", "phone", "placeholder", "Telefonnummer", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "email", "placeholder", "E-Mail", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "town", "placeholder", "Ort", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "plz", "placeholder", "Postleitzahl", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "street", "placeholder", "Stra\u00DFe", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "country", "placeholder", "Land", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "domicile", "placeholder", "Wohnort", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "adress", "placeholder", "Lieferadresse", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "optional", "placeholder", "Zweite Lieferadresse [Optional]", 3, "readonly", "ngModel", "ngModelChange"], ["type", "submit", 3, "value", "click"], [3, "click", 4, "ngIf"], [3, "click"]], template: function addCustomer_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Personen Daten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_5_listener($event) { return ctx.customer.fName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_6_listener($event) { return ctx.customer.lName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Herr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Frau");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_12_listener($event) { return ctx.customer.phone = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_13_listener($event) { return ctx.customer.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Adress Daten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_17_listener($event) { return ctx.customer.customerLocation.town = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_18_listener($event) { return ctx.customer.customerLocation.plz = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_19_listener($event) { return ctx.customer.customerLocation.street = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_20_listener($event) { return ctx.customer.customerLocation.country = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Orts Daten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_24_listener($event) { return ctx.customer.location.domicile = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_25_listener($event) { return ctx.customer.location.orderAdress = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCustomer_Template_input_ngModelChange_26_listener($event) { return ctx.customer.location.orderAdressOptional = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function addCustomer_Template_input_click_28_listener() { return ctx.doCustomer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, addCustomer_mat_button_toggle_29_Template, 3, 0, "mat-button-toggle", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.fName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.lName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.locked ? "disabled" : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.customerLocation.town);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.customerLocation.plz);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.customerLocation.street);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.customerLocation.country);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.location.domicile);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.location.orderAdress);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.customer.location.orderAdressOptional);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.msg);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMode);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n  height: 80vh;\r\n  border-radius: 0px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 10px;\r\n  width: 20%;\r\n  margin: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled{\r\n  background-color: white;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  border-radius: 0px 50px 50px 0px;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #303030 ;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n position: relative;\r\n left: 10px;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #c2185b;\r\n  border-color: #c2185b;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  height: 50px;\r\n  width: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyRGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJjdXN0b21lckRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gIGhlaWdodDogODB2aDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dDpkaXNhYmxlZCxzZWxlY3Q6ZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuZGl2LmJsb2Nre1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwIDtcclxufVxyXG5cclxuZGl2LmJsb2NrIGgxe1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gbGVmdDogMTBweDtcclxufVxyXG5cclxuI2FkZEJ1dHRvblxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxODViO1xyXG4gIGJvcmRlci1jb2xvcjogI2MyMTg1YjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */", "input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button#form[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\npadding-left: 2vw;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=password][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBYUEsNkJBQTZCOztBQUM3QixnQ0FBZ0M7O0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJmb3Jtcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiNmb3JtIHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5wYWRkaW5nLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdLCBzZWxlY3QsdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDEycHggNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlJlbW92ZSBudW1iZXIgaW5wdXQgYXJyb3dzKi9cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbiJdfQ== */"] });
    return addCustomer;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](addCustomer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './customerData.component.html',
                styleUrls: ['./customerData.component.css', '../../../../css/forms.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "5NdR":
/*!*************************************************************!*\
  !*** ./src/app/components/services/pdf/bills/PdfService.ts ***!
  \*************************************************************/
/*! exports provided: PdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfService", function() { return PdfService; });
/* harmony import */ var _models_bill_PdfType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../models/bill/PdfType */ "2dNW");
/* harmony import */ var _services_pdf_bills_offer_offer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/pdf/bills/offer/offer */ "ppYj");


var PdfService = /** @class */ (function () {
    function PdfService() {
    }
    // the generic download method
    PdfService.DownloadPdf = function (data, type) {
        switch (type) {
            case _models_bill_PdfType__WEBPACK_IMPORTED_MODULE_0__["PdfType"].Offer:
                this.downloadOffer(data);
                break;
            case _models_bill_PdfType__WEBPACK_IMPORTED_MODULE_0__["PdfType"].Confirmation:
                break;
        }
    };
    // the generic open method
    PdfService.OpenPdf = function (data, type) {
        switch (type) {
            case _models_bill_PdfType__WEBPACK_IMPORTED_MODULE_0__["PdfType"].Offer:
                this.openOffer(data);
                break;
        }
    };
    // offer
    PdfService.downloadOffer = function (data) {
        var ops = new _services_pdf_bills_offer_offer__WEBPACK_IMPORTED_MODULE_1__["OfferPdfService"](data);
        ops.download('Angebot.pdf');
    };
    PdfService.openOffer = function (data) {
        var ops = new _services_pdf_bills_offer_offer__WEBPACK_IMPORTED_MODULE_1__["OfferPdfService"](data);
        ops.download('Angebot.pdf');
    };
    return PdfService;
}());



/***/ }),

/***/ "6CLl":
/*!******************************************************************************!*\
  !*** ./src/app/components/settings/Dashboard/SettingsDashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingsdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsdashboardComponent", function() { return SettingsdashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var SettingsdashboardComponent = /** @class */ (function () {
    function SettingsdashboardComponent() {
    }
    SettingsdashboardComponent.prototype.ngOnInit = function () {
    };
    SettingsdashboardComponent.ɵfac = function SettingsdashboardComponent_Factory(t) { return new (t || SettingsdashboardComponent)(); };
    SettingsdashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsdashboardComponent, selectors: [["SettingsDashboard-component"]], decls: 2, vars: 0, template: function SettingsdashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SettingsDashboard.component component generated ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return SettingsdashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsdashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'SettingsDashboard-component',
                templateUrl: './SettingsDashboard.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "77hX":
/*!*****************************************************************!*\
  !*** ./src/app/components/app/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/crm/companylist */ "uOvJ");
/* harmony import */ var _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crm/customerlist */ "rh7+");
/* harmony import */ var _services_crm_customerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crm/customerData */ "YKJh");
/* harmony import */ var _services_tools_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tools/dateFormatter */ "R5LB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function Dashboard_div_27_tr_9_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_27_tr_9_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var c_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.goToShowCustomerPage(c_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_27_tr_9_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var c_r3 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.goToShowCustomerPage(c_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_27_tr_9_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var c_r3 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.goToShowCustomerPage(c_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.fName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.lName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.email);
} }
function Dashboard_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vorname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nachname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Dashboard_div_27_tr_9_Template, 7, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.customers);
} }
function Dashboard_div_28_tr_9_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_28_tr_9_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var c_r9 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.goToShowCompanyPage(c_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_28_tr_9_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var c_r9 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.goToShowCompanyPage(c_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_28_tr_9_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var c_r9 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.goToShowCompanyPage(c_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r9.contactPersons[0].lName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r9.shippingAdress[0].adress);
} }
function Dashboard_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Firmename");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vertreter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lieferadresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Dashboard_div_28_tr_9_Template, 7, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.companies);
} }
var Dashboard = /** @class */ (function () {
    function Dashboard(route) {
        var _this = this;
        this.route = route;
        this.now = '.';
        this.timer = null;
        this.customers = _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_2__["CustomerService"].getAllCustomers().filter(function (c) { return c.id < 10; });
        this.companies = _services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].getData().filter(function (c) { return c.id < 10; });
        this.show = true;
        this.totalCustomers = 100;
        this.newCustomers = 100;
        this.weekDays = ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        this.months = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        this.timer = setInterval(function () {
            _this.now = _services_tools_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["DateFormatter"].getCurrentTimeAsString();
        }, 1000);
        this.totalCustomers = _services_crm_customerData__WEBPACK_IMPORTED_MODULE_3__["TotalCustomerService"].getTotalCustomerAmount();
        this.newCustomers = _services_crm_customerData__WEBPACK_IMPORTED_MODULE_3__["TotalCustomerService"].getNewCustomerAmount();
    }
    Dashboard.prototype.ngOnInit = function () {
        this.now = _services_tools_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["DateFormatter"].getCurrentTimeAsString();
    };
    Dashboard.prototype.ngOnDestroy = function () {
        // Will remove the timer on component change
        clearInterval(this.timer);
    };
    Dashboard.prototype.goToShowCustomerPage = function (id) {
        this.route.navigate(['/app/crm/customer/show'], { state: { mode: 'show', id: id } });
    };
    Dashboard.prototype.goToShowCompanyPage = function (id) {
        this.route.navigate(['/app/crm/company/show'], { state: { mode: 'show', id: id } });
    };
    Dashboard.ɵfac = function Dashboard_Factory(t) { return new (t || Dashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    Dashboard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard, selectors: [["dashboard-component"]], decls: 37, vars: 6, consts: [[1, "row"], [1, "column"], [1, "big"], [1, "box"], ["id", "changeTop", 3, "click"], [4, "ngIf"], [2, "height", "2vh"], [1, "small"], ["id", "topCustomer-table"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function Dashboard_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Heute ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Auftr\u00E4ge ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Umsatz ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Rechnung ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_Template_button_click_25_listener() { return ctx.show = !ctx.show; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Dashboard_div_27_Template, 10, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Dashboard_div_28_Template, 10, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Daten ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.now, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Wechseln zu " + (ctx.show ? "Firmen" : "Kunden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Kunden insgesamt : ", ctx.totalCustomers, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Neue Kunden : ", ctx.newCustomers, "");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".left-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: column;\r\n  align-content: space-between;\r\n}\r\n\r\n.right-container[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 14vw;\r\n  top: 0;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  all: unset;\r\n  background-color: #464646;\r\n  color: white;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  white-space: normal;\r\n  width: 25vw;\r\n  height: 48vh;\r\n  display: inline-block;\r\n  margin-bottom: 0vh;\r\n\r\n  \r\n  padding: 0px;\r\n}\r\n\r\n.big[_ngcontent-%COMP%]{\r\n  height: 55.5vh;\r\n  width: 31.5vw;\r\n  position: absolute;\r\n  float: right;\r\n  right: 0.5vw;\r\n  top:9vh\r\n}\r\n\r\n.small[_ngcontent-%COMP%]{\r\nposition: absolute;\r\nright: 1vw;\r\nheight: 25.5vh;\r\nwidth: 31vw;\r\nbottom: 8.8vh;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  border-radius: 4px;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  margin-top: 1vh;\r\n  margin-left: 0.6vw;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.time[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  margin-left: 10px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  all: unset;\r\n  margin-top: 1vh;\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 95%;\r\n  max-width: 95%;\r\n  margin: 1vw;\r\n  margin-top: 3vh;\r\n\r\n}\r\n\r\n.box[_ngcontent-%COMP%]{\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 100%;\r\n  height: 98vh;\r\n  margin-bottom: 2vh;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\r\n  border: 0.1vw solid #dddddd;\r\n  text-align: left;\r\n  font-size: 16px;\r\n  font-size: 1.3vw;\r\n\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n  height: 6vh;\r\n  width: 8vw;\r\n  cursor: pointer;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #585252;\r\n}\r\n\r\ndiv.text[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  justify-content:space-around;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 80vw;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-basis: 66%;\r\n  height: 40.1vh;\r\n  flex: 1;\r\n  margin:0.5vw;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 5vh;\r\n}\r\n\r\n#changeTop[_ngcontent-%COMP%]{\r\n  background-color: #294b93;\r\n  border-color: #294b93;\r\n  color:white;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 28vw;\r\n  margin-top: 1vh;\r\n  margin-left: 1vw;\r\n  border-radius: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0FBQ1I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7O0VBRWxCLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaO0FBQ0Y7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLGNBQWM7QUFDZCxXQUFXO0FBQ1gsYUFBYTtBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFHQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0VBQ2QsT0FBTztFQUNQLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBSUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucmlnaHQtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTR2dztcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICBhbGw6IHVuc2V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2NDY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3aWR0aDogMjV2dztcclxuICBoZWlnaHQ6IDQ4dmg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDB2aDtcclxuXHJcbiAgLypQYWRkaW5nIDBweCB0byByZW1vdmUgY2hhbmdlcyBvbiB6b29tKi9cclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5iaWd7XHJcbiAgaGVpZ2h0OiA1NS41dmg7XHJcbiAgd2lkdGg6IDMxLjV2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OiAwLjV2dztcclxuICB0b3A6OXZoXHJcbn1cclxuLnNtYWxse1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAxdnc7XHJcbmhlaWdodDogMjUuNXZoO1xyXG53aWR0aDogMzF2dztcclxuYm90dG9tOiA4Ljh2aDtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuXHJcbmRpdi5oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBtYXJnaW4tbGVmdDogMC42dnc7XHJcbn1cclxuXHJcbmRpdi5jb250ZW50e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50aW1le1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGFsbDogdW5zZXQ7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAxdnc7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG5cclxufVxyXG5cclxuLmJveHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogOTh2aDtcclxuICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxudGQsIHRoLHRyIHtcclxuICBib3JkZXI6IDAuMXZ3IHNvbGlkICNkZGRkZGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxLjN2dztcclxuXHJcbn1cclxuXHJcbnRke1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIHdpZHRoOiA4dnc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODUyNTI7XHJcbn1cclxuXHJcblxyXG5kaXYudGV4dHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4ucm93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1iYXNpczogNjYlO1xyXG4gIGhlaWdodDogNDAuMXZoO1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luOjAuNXZ3O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5oMntcclxuICBmb250LXNpemU6IDV2aDtcclxufVxyXG5cclxuI2NoYW5nZVRvcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0YjkzO1xyXG4gIGJvcmRlci1jb2xvcjogIzI5NGI5MztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI4dnc7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
    return Dashboard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-component',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dfmv":
/*!****************************************************************!*\
  !*** ./src/app/components/app/main/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getVersion = function () {
        window.open('https://codechrisb.github.io/version.html?dev=1', '_blank');
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["footer"]], decls: 3, vars: 0, consts: [["color", "primary"], ["mat-button", "", "aria-label", "icon-button with menu icon", 1, "mat-elevation-z5", "icon", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_1_listener() { return ctx.getVersion(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Version ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".mat-toolbar[_ngcontent-%COMP%]{\r\n  bottom: 0;\r\n  margin: 0px;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 7vh;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 0;\r\n  min-width: 15vw;\r\n  max-height: 7vh;\r\n  font-size: 2vh;\r\n  border-radius: 0px;\r\n  text-align: center;\r\n  line-height: 7vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDd2aDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIG1pbi13aWR0aDogMTV2dztcclxuICBtYXgtaGVpZ2h0OiA3dmg7XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogN3ZoO1xyXG59XHJcblxyXG4iXX0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I4fD":
/*!*****************************************************************!*\
  !*** ./src/app/components/app/crm/company/company.component.ts ***!
  \*****************************************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/crm/companylist */ "uOvJ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");










function Company_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Company_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var company_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r14.id);
} }
function Company_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Firmenname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Company_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var company_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r15.name);
} }
function Company_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Company_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var company_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r16.companyLocation.country);
} }
function Company_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lieferadresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Company_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var company_r17 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getFirstAdress(company_r17));
} }
function Company_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kontakt Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Company_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var company_r18 = ctx.$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getFirstContactPerson(company_r18.contactPersons));
} }
function Company_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Company_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Company_mat_cell_20_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var row_r19 = ctx.$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.showCustomer(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ansehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Company_mat_cell_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var row_r19 = ctx.$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.updateCustomer(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bearbeiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Company_mat_cell_20_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var row_r19 = ctx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.deleteCustomer(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "L\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r20);
} }
function Company_mat_header_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function Company_mat_row_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
var company = _services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].getData();
var Company = /** @class */ (function () {
    function Company(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        // init the data
        this.displayedColumns = ['id', 'name', 'companyLocation', 'shippingAdress', 'contactPerson', 'actions'];
        // MatPaginator Inputs
        this.length = company.length;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10];
        this.dataSource = company.slice(0, this.pageSize);
        this.pageIndex = 0;
    }
    Company.prototype.goToPage = function ($event) {
        this.length = $event.length;
        this.pageSize = $event.pageSize;
        this.dataSource = company.slice(this.pageSize * $event.pageIndex, this.pageSize * $event.pageIndex + this.pageSize);
        this.pageIndex = $event.pageIndex;
    };
    Company.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    Company.prototype.deleteCustomer = function (row) {
        if (confirm('Wollen Sie ' + row.contactPersons + 'löschen?')) {
            this.dataSource = _services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].getData().filter(function (companies) { return companies.contactPersons !== row.contactPersons; });
            this.length = this.dataSource.length;
            this.refresh();
        }
    };
    Company.prototype.refresh = function () {
        this.dataSource = this.dataSource;
    };
    Company.prototype.getFirstAdress = function (p) {
        // get the first shipping adress
        return p.shippingAdress[0].adress;
    };
    Company.prototype.getFirstContactPerson = function (p) {
        // get the first contact person phone number
        return p[0].email;
    };
    // customerData routing methods
    Company.prototype.showCustomer = function (row) {
        this.route.navigate(['/app/crm/company/show'], { state: { mode: 'show', id: row.id } });
    };
    Company.prototype.updateCustomer = function (row) {
        console.dir(row);
        this.route.navigate(['/app/crm/company/edit'], { state: { mode: 'edit', id: row.id } });
    };
    Company.prototype.addCustomer = function () {
        this.route.navigate(['/app/crm/company/new'], { state: { mode: 'add' } });
    };
    Company.ɵfac = function Company_Factory(t) { return new (t || Company)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    Company.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Company, selectors: [["company-component"]], decls: 27, vars: 7, consts: [[1, "container"], [1, "lessons-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["class", "description-cell", 4, "matCellDef"], ["matColumnDef", "companyLocation"], ["class", "duration-cell", 4, "matCellDef"], ["matColumnDef", "shippingAdress"], ["matColumnDef", "contactPerson"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["id", "addButton", 3, "click"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "description-cell"], [1, "duration-cell"], [3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function Company_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Company_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Company_mat_cell_5_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Company_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Company_mat_cell_8_Template, 2, 1, "mat-cell", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Company_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Company_mat_cell_11_Template, 2, 1, "mat-cell", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Company_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Company_mat_cell_14_Template, 2, 1, "mat-cell", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Company_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Company_mat_cell_17_Template, 2, 1, "mat-cell", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Company_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Company_mat_cell_20_Template, 12, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, Company_mat_header_row_21_Template, 1, 0, "mat-header-row", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Company_mat_row_22_Template, 1, 0, "mat-row", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Company_Template_button_click_23_listener() { return ctx.addCustomer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-paginator", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function Company_Template_mat_paginator_page_26_listener($event) { return ctx.goToPage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex)("pageSizeOptions", ctx.pageSizeOptions);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: [".mat-table[_ngcontent-%COMP%] {\r\n  max-height: 71vh;\r\n  height: 71vh;\r\n  overflow-y: auto;\r\n  overflow-x: auto;\r\n\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  min-height: 100%;\r\n  border-radius: 0px;\r\n}\r\n\r\ndiv.mat-paginator-conatainer[_ngcontent-%COMP%]{\r\n  max-height:1vh;\r\n}\r\n\r\n#big[_ngcontent-%COMP%]{\r\n  flex: 0 0 200px !important;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  width: 80vw;\r\n\r\n  position: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  width: 10px;\r\n}\r\n\r\n#cButton[_ngcontent-%COMP%]{\r\n  color: lightgray;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #294B93;\r\n  border-color: #294B93;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  width: 80px;\r\n}\r\n\r\n.mat-menu-item[_ngcontent-%COMP%]{\r\n  font-size: 12pt;\r\n}\r\n\r\n.email[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.email[_ngcontent-%COMP%]:hover{\r\n  color: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th.mat-header-cell.cdk-column-position.mat-column-position[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  height: 85vh;\r\n  background-color: #424242;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFJQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJsZSB7XHJcbiAgbWF4LWhlaWdodDogNzF2aDtcclxuICBoZWlnaHQ6IDcxdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuXHJcbmRpdi5tYXQtcGFnaW5hdG9yLWNvbmF0YWluZXJ7XHJcbiAgbWF4LWhlaWdodDoxdmg7XHJcbn1cclxuXHJcblxyXG5cclxuI2JpZ3tcclxuICBmbGV4OiAwIDAgMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgd2lkdGg6IDgwdnc7XHJcblxyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuI2NCdXR0b257XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuI2FkZEJ1dHRvblxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0QjkzO1xyXG4gIGJvcmRlci1jb2xvcjogIzI5NEI5MztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LW1lbnUtaXRlbXtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbi5lbWFpbHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lbWFpbDpob3ZlcntcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuXHJcbnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLm1hdC1oZWFkZXItY2VsbC5jZGstY29sdW1uLXBvc2l0aW9uLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiNjb250ZW50e1xyXG4gIGhlaWdodDogODV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
    return Company;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Company, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'company-component',
                templateUrl: './company.component.html',
                styleUrls: ['./company.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "INSd":
/*!*****************************************************************!*\
  !*** ./src/app/components/profile/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/profile/UserService */ "2BtR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function Profile_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.msg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Profile_mat_chip_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Profile_mat_chip_44_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_mat_chip_44_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.routeTo("dashboard"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Sie k\u00F6nnen das " + (ctx_r2.user.premissions.dashboard.write ? "Dashboard bearbeiten" : "Dashboard sehen"));
} }
function Profile_mat_chip_45_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_mat_chip_45_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.routeTo("crm/customer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CRM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Sie k\u00F6nen den CRM Bereich " + (ctx_r3.user.premissions.crm.write ? "bearbeiten" : "sehen"));
} }
function Profile_mat_chip_46_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_mat_chip_46_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.routeTo("bill/offer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Einkauf");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Sie k\u00F6nnen den Einkaufsbreich " + (ctx_r4.user.premissions.bills.write ? "bearbeiten" : "sehen"));
} }
function Profile_mat_chip_47_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_mat_chip_47_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.routeTo("products/heatexchanger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Produkte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Sie k\u00F6nnen die " + (ctx_r5.user.premissions.products.write ? "Produkte bearbeiten" : "Produkte sehen"));
} }
function Profile_mat_chip_48_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_mat_chip_48_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Einstellungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Sie k\u00F6nnen die " + (ctx_r6.user.premissions.settings.write ? "Einstellungen bearbeiten" : "Einstellungen sehen"));
} }
function Profile_mat_card_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Verwaltung");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kunden Verwaltung");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-button-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email an alle Kunden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Z.b Preis\u00E4nderungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User Anzahl ", ctx_r7.getUserCount(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User Anzahl ", ctx_r7.getUserCount(), "");
} }
var Profile = /** @class */ (function () {
    function Profile(_sanitizer, route) {
        this._sanitizer = _sanitizer;
        this.route = route;
        this.msg = '';
        this.password = {
            current: '',
            newFirst: '',
            newSecond: ''
        };
        // the password data that will be sent to the server for change
        this.hashed = {
            current: '',
            new: ''
        };
    }
    Profile.prototype.ngOnInit = function () {
        // when we have backend access we need to specify which user we want to get.
        this.user = _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUser(1);
        // get the imge from the user
        this.showPass = {
            old: false,
            first: false,
            second: false
        };
    };
    Profile.prototype.selectFile = function (event) {
        var _this = this;
        if (!event.target.files[0] || event.target.files[0].length == 0) {
            this.user.image = 'You must select an image';
            return;
        }
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.msg = 'Only images are supported';
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (_event) {
            _this.msg = '';
            _this.user.image = reader.result.toString();
        };
    };
    Profile.prototype.submitNewPassword = function () {
        var regexPassword = new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$');
        // Check if the password follows the rules
        if (!(regexPassword.test(this.password.current) && regexPassword.test(this.password.newFirst) && regexPassword.test(this.password.newSecond))) {
            alert('Das Passwort muss folgende Regeln befolgen :\n1 Großbuchstabe\n1 Kleinbuchstaben\n1 Zahl');
            this.clearPassFields();
            return;
        }
        else if (this.password.newFirst != this.password.newSecond) {
            alert('Bitte geben sie zweimal das gleiche Passwort ein.');
            this.clearPassFields();
            return;
        }
        // hash passwords
        this.hashed.current = this.hash(this.password.current);
        this.hashed.new = this.hash(this.password.newFirst);
        // api sent
        // roberts.backend.subscribe(backend =>{backend.sent(this.hashed.current,this.hashed.new)})
    };
    Profile.prototype.hash = function (pass) {
        // call a hash function idk
        return pass;
    };
    Profile.prototype.clearPassFields = function () {
        this.password = {
            current: '',
            newFirst: '',
            newSecond: ''
        };
    };
    Profile.prototype.routeTo = function (route) {
        this.route.navigate([('/app/' + route)]);
    };
    Profile.prototype.getUserCount = function () {
        return _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUserCount();
    };
    Profile.prototype.toSettings = function () {
        this.route.navigate(['/settings/dashboard']);
    };
    Profile.prototype.saveUser = function () {
        _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"].updateUser(this.user);
    };
    Profile.prototype.userSettings = function () {
        this.route.navigate(['/profile/settings'], { state: { id: this.user.id } });
    };
    Profile.ɵfac = function Profile_Factory(t) { return new (t || Profile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    Profile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Profile, selectors: [["profile-component"]], decls: 73, vars: 30, consts: [["id", "full"], [2, "text-align", "center"], ["style", "color: red;", 3, "innerHtml", 4, "ngIf"], [1, "container"], [1, "image-upload"], ["for", "file-input"], ["matTooltipPosition", "right", "matTooltip", "Klicken Sie um ihr Profilbild zu \u00E4ndern", "id", "userImage", 3, "src"], ["id", "file-input", "type", "file", 3, "change"], [1, "flex-container"], ["id", "small"], ["id", "small", "matInput", "", "placeholder", "Christopher", 3, "disabled", "ngModel", "ngModelChange"], ["color", "primary", "id", "admin-button", "type", "submit", "value", "Speichern", 1, "mat-elevation-z5", 3, "click"], [1, "chip-container"], ["matTooltip", "Sie sind Administrator", "matTooltipPosition", "above", "id", "admin", 4, "ngIf"], ["matTooltipPosition", "above", "id", "dashbaord", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltipPosition", "above", "id", "crm", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltipPosition", "above", "id", "bill", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltipPosition", "above", "id", "product", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltipPosition", "above", "id", "settings", 3, "matTooltip", "click", 4, "ngIf"], ["id", "pass-window"], ["id", "pass"], ["matInput", "", "name", "old", 3, "type", "ngModel", "ngModelChange"], [3, "click"], ["matInput", "", "name", "new", 3, "type", "ngModel", "ngModelChange"], ["id", "admin-button", "type", "submit", "value", "Submit", 3, "click"], ["id", "admin-window", 4, "ngIf"], [2, "color", "red", 3, "innerHtml"], ["matTooltip", "Sie sind Administrator", "matTooltipPosition", "above", "id", "admin"], ["matTooltipPosition", "above", "id", "dashbaord", 3, "matTooltip", "click"], ["matTooltipPosition", "above", "id", "crm", 3, "matTooltip", "click"], ["matTooltipPosition", "above", "id", "bill", 3, "matTooltip", "click"], ["matTooltipPosition", "above", "id", "product", 3, "matTooltip", "click"], ["matTooltipPosition", "above", "id", "settings", 3, "matTooltip", "click"], ["id", "admin-window"], [1, "left-half"], ["id", "admin-button"], [1, "right-half"], ["src", "http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=Ich+wei%C3%9F+zwar+nicht+wieso%2C+aber+ein+Qr+Code+hier+%2Csieht+einfach+gut+aus%2C+eventuell+k%C3%B6nnte+der+bei+der+Kommunikation+zwischen+einem+Pc+und+einem+Smartphone+stehen%2C+also+k%C3%B6nnte+es+vielleicht+bei+der+Diplomarbeit+helfen.+Um+\u00FCber+das+Smartphone+sich+anzumelden+oder+als+2+factor+verifikation+keine+ahnung+es+ist+nach+mitternacht+hier. &qzone=1&margin=0&size=400x400&ecc=L", "alt", "qr code"]], template: function Profile_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Profile_div_2_Template, 1, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Profile_Template_input_change_7_listener($event) { return ctx.selectFile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vorname");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_13_listener($event) { return ctx.user.fname = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nachname");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_17_listener($event) { return ctx.user.lname = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Telefon Nummer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_22_listener($event) { return ctx.user.phone = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "FAX");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_26_listener($event) { return ctx.user.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_31_listener($event) { return ctx.user.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Firmen Rang");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_35_listener($event) { return ctx.user.rank = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-button-toggle", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_Template_mat_button_toggle_click_37_listener() { return ctx.saveUser(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Speichern");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-button-toggle", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_Template_mat_button_toggle_click_39_listener() { return ctx.userSettings(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Einstelungen");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-chip-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, Profile_mat_chip_43_Template, 2, 0, "mat-chip", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, Profile_mat_chip_44_Template, 2, 1, "mat-chip", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, Profile_mat_chip_45_Template, 2, 1, "mat-chip", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, Profile_mat_chip_46_Template, 2, 1, "mat-chip", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, Profile_mat_chip_47_Template, 2, 1, "mat-chip", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, Profile_mat_chip_48_Template, 2, 1, "mat-chip", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Momentanes Passwort");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_54_listener($event) { return ctx.password.current = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_Template_mat_icon_click_55_listener() { return ctx.showPass.old = !ctx.showPass.old; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Neues Passwort");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_61_listener($event) { return ctx.password.newFirst = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_Template_mat_icon_click_62_listener() { return ctx.showPass.first = !ctx.showPass.first; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Neues Passwort");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Profile_Template_input_ngModelChange_68_listener($event) { return ctx.password.newSecond = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_Template_mat_icon_click_69_listener() { return ctx.showPass.second = !ctx.showPass.second; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Profile_Template_input_click_71_listener() { return ctx.submitNewPassword(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, Profile_mat_card_72_Template, 18, 2, "mat-card", 25);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msg);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.premissions.admin ? "disabled" : null)("ngModel", ctx.user.fname);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.premissions.admin ? "disabled" : null)("ngModel", ctx.user.lname);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.premissions.admin ? "disabled" : null)("ngModel", ctx.user.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.premissions.admin ? "disabled" : null)("ngModel", ctx.user.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.premissions.admin ? "disabled" : null)("ngModel", ctx.user.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.premissions.admin ? "disabled" : null)("ngModel", ctx.user.rank);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.admin.read);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.dashboard.read);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.crm.read);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.bills.read);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.products.read);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.settings.read);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showPass.old ? "text" : "password")("ngModel", ctx.password.current);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showPass.old ? "visibility" : "visibility_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showPass.first ? "text" : "password")("ngModel", ctx.password.newFirst);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showPass.first ? "visibility" : "visibility_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showPass.second ? "text" : "password")("ngModel", ctx.password.newSecond);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showPass.second ? "visibility" : "visibility_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.admin);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"]], styles: [".mat-card[_ngcontent-%COMP%]{\r\n    width: 45vw;\r\n    float:left;\r\n    background:gray;\r\n    margin:1vh;\r\n}\r\n\r\n#full[_ngcontent-%COMP%]{\r\n  height:80vh;\r\n  max-height: 80vh;\r\n}\r\n\r\n#globals[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n\r\n.mat-checkbox[_ngcontent-%COMP%]{\r\n  margin: 2vw;\r\n  background-color: rgba(255, 0, 0, 0.4);\r\n  padding: 0.5vw;\r\n  border-radius: 2vw;\r\n}\r\n\r\n#gear[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top:2%;\r\n  right: 2%;\r\n}\r\n\r\n#pointer[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  width: 12vw;\r\n  height: 12vw\r\n}\r\n\r\n.centered[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n  padding: 2vh;\r\n  padding: 1vw;\r\n}\r\n\r\n#side-form[_ngcontent-%COMP%]{\r\n  width: 15vw;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.mat-chip[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  font-size: 5pt;\r\n}\r\n\r\n.chip-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 10px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  padding: 0.5vw;\r\n\r\n}\r\n\r\n#admin[_ngcontent-%COMP%]{\r\n  background-color:crimson;\r\n}\r\n\r\n#admin-window[_ngcontent-%COMP%]{\r\n  max-height: 50.5vh;\r\n  height: 36.5vh;\r\n}\r\n\r\n#pass-window[_ngcontent-%COMP%]{\r\n  max-height: 37vh;\r\n  height: 37vh;\r\n}\r\n\r\n#dashbaord[_ngcontent-%COMP%]{\r\n  background-color:darkorange;\r\n}\r\n\r\n#crm[_ngcontent-%COMP%]{\r\n  background-color:darkolivegreen\r\n}\r\n\r\n#bill[_ngcontent-%COMP%]{\r\n  background-color: dodgerblue;\r\n}\r\n\r\n#product[_ngcontent-%COMP%]{\r\n  background-color: mediumpurple;\r\n}\r\n\r\n#admin-button[_ngcontent-%COMP%]{\r\n  background-color: #294b93;\r\n  border-color: #294b93;\r\n  color:white;\r\n  min-height: 5vh;\r\n  min-width: 45%;\r\n  width: 50%;\r\n  margin-bottom: 5vh;\r\n  margin-right:1vw;\r\n  flex-grow:1;\r\n}\r\n\r\nh4[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  margin-left: 1vw;\r\n  margin-bottom: 5vh;\r\n}\r\n\r\n.left-half[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 1%;\r\n  width: 49%;\r\n}\r\n\r\n.right-half[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 1%;\r\n  width: 49%;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]\r\n{\r\n  width:42vw\r\n}\r\n\r\n#left[_ngcontent-%COMP%]{\r\n  float:left;\r\n  width:12vw;\r\n}\r\n\r\n#right[_ngcontent-%COMP%]{float:right;width:30vw}\r\n\r\n\r\n\r\ninput#small[_ngcontent-%COMP%], .mat-form-field#small[_ngcontent-%COMP%]{\r\n  width: 21vw;\r\n}\r\n\r\n#pass[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\r\n  margin-left: 1vw;\r\n}\r\n\r\n\r\n\r\n.image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n#userImage[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n#submit-user[_ngcontent-%COMP%]{\r\n  background-color: #294b93;\r\n  border-color: #294b93;\r\n  border-radius: 0px;\r\n  color: white;\r\n  height: 100%;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7QUFDRjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFJQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7QUFDRjs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFJQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUdBLDZDQUE2Qzs7QUFDN0M7O0VBRUU7QUFDRjs7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBQ0EsT0FBTyxXQUFXLENBQUMsVUFBVTs7QUFDN0IsbURBQW1EOztBQUVuRDtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGJhY2tncm91bmQ6Z3JheTtcclxuICAgIG1hcmdpbjoxdmg7XHJcbn1cclxuXHJcbiNmdWxse1xyXG4gIGhlaWdodDo4MHZoO1xyXG4gIG1heC1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbiNnbG9iYWxze1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5tYXQtY2hlY2tib3h7XHJcbiAgbWFyZ2luOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNCk7XHJcbiAgcGFkZGluZzogMC41dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMnZ3O1xyXG59XHJcblxyXG4jZ2VhcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjIlO1xyXG4gIHJpZ2h0OiAyJTtcclxufVxyXG4jcG9pbnRlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICB3aWR0aDogMTJ2dztcclxuICBoZWlnaHQ6IDEydndcclxufVxyXG4uY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxuICBwYWRkaW5nOiAxdnc7XHJcbn1cclxuXHJcbiNzaWRlLWZvcm17XHJcbiAgd2lkdGg6IDE1dnc7XHJcbn1cclxuZGl2LmNvbnRhaW5lciBhICp7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5tYXQtY2hpcHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiA1cHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNoaXAtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbiNhZG1pbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmNyaW1zb247XHJcbn1cclxuI2FkbWluLXdpbmRvd3tcclxuICBtYXgtaGVpZ2h0OiA1MC41dmg7XHJcbiAgaGVpZ2h0OiAzNi41dmg7XHJcbn1cclxuXHJcbiNwYXNzLXdpbmRvd3tcclxuICBtYXgtaGVpZ2h0OiAzN3ZoO1xyXG4gIGhlaWdodDogMzd2aDtcclxufVxyXG5cclxuI2Rhc2hiYW9yZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbiNjcm17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpkYXJrb2xpdmVncmVlblxyXG59XHJcbiNiaWxse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbn1cclxuI3Byb2R1Y3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xyXG59XHJcblxyXG5cclxuXHJcbiNhZG1pbi1idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NGI5MztcclxuICBib3JkZXItY29sb3I6ICMyOTRiOTM7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgbWluLWhlaWdodDogNXZoO1xyXG4gIG1pbi13aWR0aDogNDUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gIG1hcmdpbi1yaWdodDoxdnc7XHJcbiAgZmxleC1ncm93OjE7XHJcbn1cclxuaDR7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG4ubGVmdC1oYWxmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMSU7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuLnJpZ2h0LWhhbGYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMSU7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuXHJcbi8qVGhlIEJpZyBjb250YWluZXIgZm9yIGltYWdlIGFuZCB1c2VyIHN0dWZmKi9cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgd2lkdGg6NDJ2d1xyXG59XHJcbiNsZWZ0e1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6MTJ2dztcclxufVxyXG4jcmlnaHR7ZmxvYXQ6cmlnaHQ7d2lkdGg6MzB2d31cclxuLyp0aGUgaW5zaWRlIGNvbnRhaW5lciBmb3IgMiBjb2x1bW5zIG9mIHVzZXIgc3R1ZmYqL1xyXG5cclxuaW5wdXQjc21hbGwsIC5tYXQtZm9ybS1maWVsZCNzbWFsbHtcclxuICB3aWR0aDogMjF2dztcclxufVxyXG5cclxuXHJcbiNwYXNze1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciA+IG1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcblxyXG4vKmZha2UgaW1hZ2UgYnV0dG9uKi9cclxuLmltYWdlLXVwbG9hZD5pbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3VzZXJJbWFnZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdWJtaXQtdXNlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0YjkzO1xyXG4gIGJvcmRlci1jb2xvcjogIzI5NGI5MztcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
    return Profile;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Profile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profile-component',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "IS7t":
/*!**************************************************************************!*\
  !*** ./src/app/components/profile/settings/profileSettings.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettings", function() { return ProfileSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/profile/UserService */ "2BtR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






var ProfileSettings = /** @class */ (function () {
    function ProfileSettings(_sanitizer, route) {
        this._sanitizer = _sanitizer;
        this.route = route;
        this.msg = '';
        this.password = {
            current: '',
            newFirst: '',
            newSecond: ''
        };
        // the password data that will be sent to the server for change
        this.hashed = {
            current: '',
            new: ''
        };
    }
    ProfileSettings.prototype.ngOnInit = function () {
        // when we have backend access we need to specify which user we want to get.
        this.user = _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUser(1);
        // get the imge from the user
        this.image = this._sanitizer.bypassSecurityTrustUrl(this.user.image);
        this.showPass = {
            old: false,
            first: false,
            second: false
        };
    };
    ProfileSettings.ɵfac = function ProfileSettings_Factory(t) { return new (t || ProfileSettings)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    ProfileSettings.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileSettings, selectors: [["profile-component"]], decls: 5, vars: 0, consts: [["id", "full"]], template: function ProfileSettings_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is the Profile Settings page, the user will be able to change");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "stuff like the email generator settings (custom generated text, no generated text , standard subject text)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"]], styles: [".mat-card[_ngcontent-%COMP%]{\r\n    width: 96vw;\r\n    float:left;\r\n    background:gray;\r\n    margin:1vh;\r\n}\r\n\r\n#full[_ngcontent-%COMP%]{\r\n  height:80vh;\r\n  max-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGVTZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwcm9maWxlU2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiA5NnZ3O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGJhY2tncm91bmQ6Z3JheTtcclxuICAgIG1hcmdpbjoxdmg7XHJcbn1cclxuXHJcbiNmdWxse1xyXG4gIGhlaWdodDo4MHZoO1xyXG4gIG1heC1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuIl19 */"] });
    return ProfileSettings;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSettings, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profile-component',
                templateUrl: './profileSettings.component.html',
                styleUrls: ['./profileSettings.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Kh+L":
/*!*************************************************************!*\
  !*** ./src/app/components/services/tools/StringShortner.ts ***!
  \*************************************************************/
/*! exports provided: StringShortener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringShortener", function() { return StringShortener; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var StringShortener = /** @class */ (function () {
    function StringShortener() {
    }
    StringShortener.Trim = function (string, length) {
        if (length < string.length) {
            return string.substring(0, length - 3) + '...';
        }
        else {
            // the string is short enoguh to be displayed fully
            return string;
        }
    };
    StringShortener.ɵfac = function StringShortener_Factory(t) { return new (t || StringShortener)(); };
    StringShortener.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StringShortener, factory: StringShortener.ɵfac, providedIn: 'root' });
    return StringShortener;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StringShortener, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "LDeE":
/*!**********************************************************************!*\
  !*** ./src/app/components/app/bill/transform/transform.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformComponent", function() { return TransformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_components_services_pdf_bills_offer_offer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/services/pdf/bills/offer/offer */ "ppYj");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







var TransformComponent = /** @class */ (function () {
    function TransformComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TransformComponent.prototype.ngOnInit = function () {
        var ops = new src_app_components_services_pdf_bills_offer_offer__WEBPACK_IMPORTED_MODULE_2__["OfferPdfService"](this.data.offer);
        var doc = ops.create();
        var f = document.getElementById('currentPdf');
        var callback = function (url) { f.setAttribute('src', url); };
        doc.getDataUrl(callback, doc);
    };
    TransformComponent.ɵfac = function TransformComponent_Factory(t) { return new (t || TransformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    TransformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransformComponent, selectors: [["app-transform"]], decls: 17, vars: 3, consts: [["id", "transfrom-group"], ["id", "container"], ["id", "iframe"], ["id", "currentPdf", 3, "ngModel", "ngModelChange"]], template: function TransformComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-button-toggle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Best\u00E4tigung");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rechnung");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lieferschein");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "iframe", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransformComponent_Template_iframe_ngModelChange_12_listener($event) { return ctx.currentSrc = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-button-toggle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u2192");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "iframe", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransformComponent_Template_iframe_ngModelChange_16_listener($event) { return ctx.currentSrc = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transformieren von ", ctx.data.offer.offer.number, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentSrc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentSrc);
        } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["mat-button-toggle[_ngcontent-%COMP%]{\r\n  max-width: -webkit-fit-content;\r\n  max-width: -moz-fit-content;\r\n  max-width: fit-content;\r\n  max-height: -webkit-fit-content;\r\n  max-height: -moz-fit-content;\r\n  max-height: fit-content;\r\n}\r\n\r\n#transfrom-preview[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: cadetblue;\r\n}\r\n\r\n#currentPdf[_ngcontent-%COMP%]{\r\n  min-height: 80%;\r\n  width: 100%;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n  display: flex;                  \r\n  flex-direction: row;            \r\n  flex-wrap: nowrap;              \r\n  justify-content: space-between; \r\n  height: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n#container[_ngcontent-%COMP%]    > div#iframe[_ngcontent-%COMP%] {\r\n  width: 37.5%;\r\n  height: 100%;\r\n}\r\n\r\n#arrow[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 150pt;\r\n  text-align: center;\r\n  vertical-align: center;\r\n  height: 100%;\r\n}\r\n\r\nmat-button-toggle[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7RUFDdEIsK0JBQXVCO0VBQXZCLDRCQUF1QjtFQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhLG1CQUFtQiw2QkFBNkI7RUFDN0QsbUJBQW1CLGFBQWEsa0NBQWtDO0VBQ2xFLGlCQUFpQixlQUFlLGtDQUFrQztFQUNsRSw4QkFBOEIsRUFBRSxrREFBa0Q7RUFDbEYsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InRyYW5zZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWJ1dHRvbi10b2dnbGV7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuI3RyYW5zZnJvbS1wcmV2aWV3e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbn1cclxuXHJcbiNjdXJyZW50UGRme1xyXG4gIG1pbi1oZWlnaHQ6IDgwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDsgICAgICAgICAgICAgICAgICAvKiBlc3RhYmxpc2ggZmxleCBjb250YWluZXIgKi9cclxuICBmbGV4LWRpcmVjdGlvbjogcm93OyAgICAgICAgICAgIC8qIGRlZmF1bHQgdmFsdWU7IGNhbiBiZSBvbWl0dGVkICovXHJcbiAgZmxleC13cmFwOiBub3dyYXA7ICAgICAgICAgICAgICAvKiBkZWZhdWx0IHZhbHVlOyBjYW4gYmUgb21pdHRlZCAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogc3dpdGNoZWQgZnJvbSBkZWZhdWx0IChmbGV4LXN0YXJ0LCBzZWUgYmVsb3cpICovXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI2NvbnRhaW5lciA+IGRpdiNpZnJhbWUge1xyXG4gIHdpZHRoOiAzNy41JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNhcnJvd3tcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTUwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZXtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcblxyXG4iXX0= */"] });
    return TransformComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transform',
                templateUrl: './transform.component.html',
                styleUrls: ['./transform.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "QQMS":
/*!******************************************************************************************!*\
  !*** ./src/app/components/app/bill/confirmation/confirmationData/offerData.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ConfirmationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationData", function() { return ConfirmationData; });
/* harmony import */ var src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/services/profile/UserService */ "2BtR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/services/prodcut/rawProduct */ "q+uM");
/* harmony import */ var src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/services/crm/companylist */ "uOvJ");
/* harmony import */ var src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/services/crm/customerlist */ "rh7+");
/* harmony import */ var src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/services/bill/OfferService */ "oViW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function ConfirmationData_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var val_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", val_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](val_r7.string);
} }
function ConfirmationData_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var val_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", val_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](val_r8.string);
} }
function ConfirmationData_div_33_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_div_33_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.consultant.fname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_div_33_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.consultant.lname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_div_33_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.consultant.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_div_33_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.consultant.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_div_33_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.consultant.fax = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.fname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.lname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.fax);
} }
function ConfirmationData_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r15 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.getProductNameById(option_r15), " ");
} }
function ConfirmationData_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ConfirmationData_div_45_div_1_Template_input_keydown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.setPrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationData_div_45_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var i_r18 = ctx.index; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.removeProduct(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r18 = ctx.index;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r16.offerData.prodcuts[i_r18].amount * ctx_r16.offerData.prodcuts[i_r18].product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5);
} }
function ConfirmationData_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConfirmationData_div_45_div_1_Template, 11, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.offerData.prodcuts);
} }
var ConfirmationData = /** @class */ (function () {
    function ConfirmationData(route) {
        this.route = route;
        this.locked = false;
        this.consultant = null;
        this.showConsultant = false;
        this.showProducts = true;
        this.msg = 'Do';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__["RawProductService"].getProductIdList();
        this.editMode = false;
        this.offerData = {
            offer: {
                number: 0,
                date: null,
                customerId: 0,
                uid: '',
                projectName: '',
                isCompany: true,
                name: '',
                plz: '',
                town: '',
                street: '',
                bruttoValue: 0,
                status: '',
                possibleDelivery: null,
                consultantId: -1,
                // at start a offer is just a offer it is not transformed yet into anything else
                stages: {
                    offer: '',
                    order: '',
                    bill: '',
                    deliveryNote: '',
                    finished: false,
                    canceld: false,
                }
            },
            prodcuts: []
        };
    }
    ConfirmationData.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
        // consultant init
        this.consultantList = src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_0__["UserService"].getUserNameList();
        // customer init
        this.customerList = src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__["CompanyService"].getCompanyCustomerIdList();
        // get the current mode
        // check if url routing
        if (history.state.mode == undefined && this.route.url.includes('edit')) {
            this.route.navigate(['/app/sales/offer']);
        }
        else {
            this.editMode = history.state.mode == 'edit';
            if (this.editMode) {
                this.initEdit();
                this.editMode = true;
            }
        }
    };
    ConfirmationData.prototype.initEdit = function () {
        console.log(src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].getOffer(history.state.id));
        this.offerData = src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].getOffer(history.state.id);
    };
    ConfirmationData.prototype.doOffer = function () {
        if (this.editMode) {
            src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].updateOffer(this.offerData);
        }
        else {
            this.fillInOffer();
            src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].addOffer(this.offerData);
            this.route.navigate(['/app/sales/offer']);
        }
    };
    ConfirmationData.prototype.setPrice = function (event) {
        event.stopPropagation();
    };
    //#region Fill in the Offer Data
    ConfirmationData.prototype.fillInOffer = function () {
        this.offerData.offer.possibleDelivery = new Date(this.offerData.offer.possibleDelivery);
        // brutto value
        this.offerData.offer.bruttoValue = this.getBruttoValue();
        // number --> will be provided by backend
        // status
        this.offerData.offer.status = 'Erstellt';
        // this.offerData.offer.town = this.getTown()
        // uid
        this.offerData.offer.uid = this.getCustomerUID();
        // date of creation
        this.offerData.offer.date = new Date();
    };
    ConfirmationData.prototype.getBruttoValue = function () {
        var sum = 0;
        this.offerData.prodcuts.forEach(function (a) { return sum += a.product.price * a.amount; });
        return sum;
    };
    ConfirmationData.prototype.getTown = function () {
        return 'this.offerData.offer.isCompany ?  CompanyService.getCustomer(this.offerData.offer.customerId).';
    };
    ConfirmationData.prototype.getCustomerUID = function () {
        return this.offerData.offer.isCompany ? src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__["CompanyService"].getCustomer(this.offerData.offer.customerId).uid : 'PK-EK-40000';
    };
    //#endregion
    ConfirmationData.prototype.changeCustomerType = function () {
        this.offerData.offer.isCompany = !this.offerData.offer.isCompany;
        this.customerList = this.offerData.offer.isCompany ? src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__["CompanyService"].getCompanyCustomerIdList() : src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_6__["CustomerService"].getPrivateCustomerIdList();
    };
    ConfirmationData.prototype.onCustomerChange = function (val) {
        this.offerData.offer.customerId = val;
    };
    ConfirmationData.prototype.onConsultantChange = function (val) {
        this.offerData.offer.consultantId = val;
        this.consultant = src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_0__["UserService"].getUser(val);
    };
    ConfirmationData.prototype._filter = function (value) {
        return this.options;
    };
    ConfirmationData.prototype.setProdcutData = function (productId) {
        this.search = '';
        this.offerData.prodcuts.push({ product: src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__["RawProductService"].getProduct(productId), amount: 1 });
    };
    ConfirmationData.prototype.getProductNameById = function (id) {
        return src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__["RawProductService"].getProductFullName(id);
    };
    ConfirmationData.prototype.removeProduct = function (id) {
        alert(this.offerData.prodcuts[id].product.name);
        console.dir(this.offerData.prodcuts);
        this.offerData.prodcuts.splice(id, 1);
    };
    ConfirmationData.ɵfac = function ConfirmationData_Factory(t) { return new (t || ConfirmationData)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
    ConfirmationData.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmationData, selectors: [["customer-component"]], decls: 48, vars: 24, consts: [["id", "scroll"], [1, "block"], ["type", "text", "name", "offer", "placeholder", "Anfrage", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", "name", "plz", "placeholder", "Postleitzahl", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", "name", "town", "placeholder", "Ort", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", "name", "street", "placeholder", "Stra\u00DFe", 3, "ngModel", "readonly", "ngModelChange"], ["readonly", "", "placeholder", "M\u00F6glicher Liefertermin", "name", "possibleDate", "type", "text", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["id", "center-select"], ["id", "customer-button", 3, "click"], ["placeholder", "h", "placeholder", "customerId", "type", "text", 3, "change"], ["hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "h", "placeholder", "Sachbearbeiter", "type", "text", 3, "change"], ["id", "cursor", "matTooltip", "Zeigt oder verdeckt die Sachbearbeiter Daten", 3, "click"], [4, "ngIf"], ["type", "text", "placeholder", "Product w\u00E4hlen", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "optionSelected"], ["auto", "matAutocomplete"], ["id", "cursor", "matTooltip", "Zeigt oder verdeckt die Produkte f\u00FCr dieses Angebot", 3, "click"], ["type", "submit", 3, "value", "click"], [3, "value"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-1", "placeholder", "Vorname", 3, "ngModel", "ngModelChange"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-2", "placeholder", "Nachname", 3, "ngModel", "ngModelChange"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-3", "placeholder", "Telefon Nummer", 3, "ngModel", "ngModelChange"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-4", "placeholder", "E-Mail", 3, "ngModel", "ngModelChange"], ["readonly", "", "type", "text", "id", "small", "name", "consultant-5", "placeholder", "Fax", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "productId", "type", "text", "placeholder", "ID", 3, "ngModel", "name", "keydown"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Name", 3, "ngModel", "name"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Beschreibung", 3, "ngModel", "name"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Preis", 3, "ngModel", "name"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Gesammt Preis", 3, "value", "name"], ["name", "", 3, "click"]], template: function ConfirmationData_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Angebots Informationen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_Template_input_ngModelChange_5_listener($event) { return ctx.offerData.offer.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_Template_input_ngModelChange_6_listener($event) { return ctx.offerData.offer.plz = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_Template_input_ngModelChange_7_listener($event) { return ctx.offerData.offer.town = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_Template_input_ngModelChange_8_listener($event) { return ctx.offerData.offer.street = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfirmationData_Template_input_ngModelChange_9_listener($event) { return ctx.offerData.offer.possibleDelivery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-datepicker-toggle", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-datepicker", null, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Kunde");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-button-toggle", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationData_Template_mat_button_toggle_click_17_listener() { return ctx.changeCustomerType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ConfirmationData_Template_select_change_19_listener($event) { return ctx.onCustomerChange($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Kunde ausw\u00E4hlen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ConfirmationData_option_22_Template, 2, 2, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sachbearbeiter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ConfirmationData_Template_select_change_27_listener($event) { return ctx.onConsultantChange($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sachbearbeiter ausw\u00E4hlen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ConfirmationData_option_30_Template, 2, 2, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationData_Template_mat_icon_click_31_listener() { return ctx.showConsultant = !ctx.showConsultant; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ConfirmationData_div_33_Template, 6, 5, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Produkte");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-autocomplete", 18, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function ConfirmationData_Template_mat_autocomplete_optionSelected_39_listener($event) { return ctx.setProdcutData($event.option.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ConfirmationData_mat_option_41_Template, 2, 2, "mat-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-icon", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationData_Template_mat_icon_click_43_listener() { return ctx.showProducts = !ctx.showProducts; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ConfirmationData_div_45_Template, 2, 1, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationData_Template_input_click_47_listener() { return ctx.doOffer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.name)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.plz)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.town)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.street)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.possibleDelivery)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.offerData.offer.isCompany ? "Firmen Kunde" : "Privat Kunde");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customerList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.consultantList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showConsultant ? "visibility" : "visibility_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConsultant);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 22, ctx.filteredOptions));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showProducts ? "visibility" : "visibility_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showProducts);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.msg);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n  height: 80vh;\r\n  border-radius: 0px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 10px;\r\n  width: 20%;\r\n  margin: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled{\r\n  background-color: white;\r\n}\r\n\r\n#cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n#scroll[_ngcontent-%COMP%]{\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  padding-top: 16px;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  border-radius: 0px 50px 50px 0px;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #303030 ;\r\n}\r\n\r\n#center-select[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n position: relative;\r\n left: 10px;\r\n}\r\n\r\n#customer-button[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n  margin-left: 1vw;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #c2185b;\r\n  border-color: #c2185b;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\ninput#productId[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#name[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#desc[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#price[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#total[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyRGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJvZmZlckRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gIGhlaWdodDogODB2aDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dDpkaXNhYmxlZCxzZWxlY3Q6ZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNzY3JvbGx7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuZGl2LmJsb2Nre1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwIDtcclxufVxyXG5cclxuI2NlbnRlci1zZWxlY3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXYuYmxvY2sgaDF7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXItYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcblxyXG4jYWRkQnV0dG9uXHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzIxODViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbmlucHV0I3Byb2R1Y3RJZHtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5pbnB1dCNuYW1le1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcbmlucHV0I2Rlc2N7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0I3ByaWNle1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcbmlucHV0I3RvdGFse1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */", "input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button#form[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\npadding-left: 2vw;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=password][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBYUEsNkJBQTZCOztBQUM3QixnQ0FBZ0M7O0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJmb3Jtcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiNmb3JtIHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5wYWRkaW5nLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdLCBzZWxlY3QsdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDEycHggNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlJlbW92ZSBudW1iZXIgaW5wdXQgYXJyb3dzKi9cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbiJdfQ== */"] });
    return ConfirmationData;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmationData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './offerData.component.html',
                styleUrls: ['./offerData.component.css', '../../../../css/forms.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "R5LB":
/*!************************************************************!*\
  !*** ./src/app/components/services/tools/dateFormatter.ts ***!
  \************************************************************/
/*! exports provided: DateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return DateFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    DateFormatter.TimeFormatter = function (date) {
        if (date == null) {
            date = new Date();
        }
        // todo rework this part this has to be done easier
        this.dateString = this.weekDays[date.getUTCDay()];
        this.dateString += date.toString().substring(7, 11);
        this.dateString += this.months[date.getUTCMonth()];
        this.dateString += date.toString().substring(15, 25);
        return this.dateString;
    };
    DateFormatter.getCurrentTimeAsString = function () {
        return this.TimeFormatter(null);
    };
    DateFormatter.getDateAsString = function (date) {
        var text = this.TimeFormatter(date);
        return text.substring(0, text.length - 10);
    };
    DateFormatter.dateString = '';
    DateFormatter.weekDays = ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    DateFormatter.months = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    DateFormatter.ɵfac = function DateFormatter_Factory(t) { return new (t || DateFormatter)(); };
    DateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateFormatter, factory: DateFormatter.ɵfac, providedIn: 'root' });
    return DateFormatter;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "SwVC":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings/Sidebar/SettingsSidenav.component.ts ***!
  \**************************************************************************/
/*! exports provided: SettingssidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingssidenavComponent", function() { return SettingssidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/profile/UserService */ "2BtR");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







var SettingssidenavComponent = /** @class */ (function () {
    function SettingssidenavComponent() {
        // current stat of the tabs
        this.crmOpen = false;
        this.salesOpen = false;
        this.productOpen = false;
        // close others tabs when open a new one
        this.closeOnClick = true;
    }
    SettingssidenavComponent.prototype.ngOnInit = function () {
        this.user = _services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUser(1);
    };
    SettingssidenavComponent.prototype.openDashboard = function () {
        console.log('Called: openDashboard');
    };
    SettingssidenavComponent.prototype.openSales = function () {
        this.salesOpen = !this.salesOpen;
        if (this.closeOnClick) {
            this.salesOpen = !this.productOpen;
        }
    };
    SettingssidenavComponent.ɵfac = function SettingssidenavComponent_Factory(t) { return new (t || SettingssidenavComponent)(); };
    SettingssidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingssidenavComponent, selectors: [["SettingsSidenav-component"]], decls: 12, vars: 0, consts: [["ngIF", "isMenuOpen", 1, "example-container"], ["routerLink", "dashboard", 1, "button-container", 3, "click"], ["mat-button", ""], ["routerLink", "sales", 1, "button-container", 3, "click"]], template: function SettingssidenavComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingssidenavComponent_Template_p_click_2_listener() { return ctx.openDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingssidenavComponent_Template_p_click_7_listener() { return ctx.openSales(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verkauf");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    height: 85vh;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    float: left;\r\n    width: 15vw;\r\n    overflow: hidden;\r\n}\r\n\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin-left: 1.5vw;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    float: left;\r\n    margin-top: 1vh;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    all: unset;\r\n    margin: auto;\r\n    width: 100%;\r\n    padding: 10px;\r\n}\r\n\r\ndiv[_ngcontent-lgl-c156][_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    padding-left: 5%;\r\n    margin: 0px\r\n}\r\n\r\np[_ngcontent-%COMP%]:hover {\r\n    background-color: black;\r\n}\r\n\r\np.button-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-left: 1vw;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n}\r\n\r\n.mat-drawer-content[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\r\n\r\n#child[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding-left: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNldHRpbmdzU2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJTZXR0aW5nc1NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41dnc7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIGFsbDogdW5zZXQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmRpdltfbmdjb250ZW50LWxnbC1jMTU2XSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luOiAwcHhcclxufVxyXG5cclxucDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxucC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtdHlwb2dyYXBoeSBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNjaGlsZCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxufSJdfQ== */"] });
    return SettingssidenavComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingssidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'SettingsSidenav-component',
                templateUrl: './SettingsSidenav.component.html',
                styleUrls: ['./SettingsSidenav.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_app_main_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/main/topbar/topbar.component */ "bnqr");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'bookless';
        this.showName = true;
        this.showID = true;
        this.showEmail = true;
        this.showPhone = true;
        this.showAdress = true;
        this.showCompanyName = true;
        this.customers = [
            { name: 'Chris', id: 1, email: 'coc31', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Robert', id: 2, email: 'superfreisi', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Sebastian', id: 3, email: 'sebastianEgg', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Elias', id: 3, email: 'eliasAigner', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Chris', id: 1, email: 'coc31', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Robert', id: 2, email: 'superfreisi', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Sebastian', id: 3, email: 'sebastianEgg', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Elias', id: 3, email: 'eliasAigner', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Chris', id: 1, email: 'coc31', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Robert', id: 2, email: 'superfreisi', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Sebastian', id: 3, email: 'sebastianEgg', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Elias', id: 3, email: 'eliasAigner', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Chris', id: 1, email: 'coc31', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Robert', id: 2, email: 'superfreisi', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Sebastian', id: 3, email: 'sebastianEgg', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' },
            { name: 'Elias', id: 3, email: 'eliasAigner', phone: '45325324', adress: 'Ritzlhof', companyName: 'Buchfrei' }
        ];
    }
    AppComponent.prototype.getColor = function (val) {
        return val ? 'green' : 'red';
    };
    AppComponent.prototype.setName = function () {
        this.showName = !this.showName;
    };
    AppComponent.prototype.setID = function () {
        this.showID = !this.showID;
    };
    AppComponent.prototype.setEmail = function () {
        this.showEmail = !this.showEmail;
    };
    AppComponent.prototype.setCompany = function () {
        this.showName = !this.showName;
    };
    AppComponent.prototype.setLocation = function () {
        this.showID = !this.showID;
    };
    AppComponent.prototype.setPhone = function () {
        this.showEmail = !this.showEmail;
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "topbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_components_app_main_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["table[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 8px;\r\n  }\r\n\r\n  tr[_ngcontent-%COMP%]:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n  button[_ngcontent-%COMP%]{\r\n    margin: 3px 0px 3px 3px;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBSUEsb0JBQW9CLHlCQUF5QixDQUFDOztFQUU5QztJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFRjtJQUNJLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuICBidXR0b257XHJcbiAgICBtYXJnaW46IDNweCAwcHggM3B4IDNweDtcclxuICB9XHJcblxyXG5kaXZ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuIl19 */", "[_ngcontent-%COMP%]:root{\n    --theme-color: #f5e726;\n  }"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "VQNb":
/*!************************************************************************!*\
  !*** ./src/app/components/app/bill/offer/listOffer/offer.component.ts ***!
  \************************************************************************/
/*! exports provided: Offer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offer", function() { return Offer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/services/tools/StringShortner */ "Kh+L");
/* harmony import */ var src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/services/bill/OfferService */ "oViW");
/* harmony import */ var _transform_transform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transform/transform.component */ "LDeE");
/* harmony import */ var src_models_bill_PdfType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/bill/PdfType */ "2dNW");
/* harmony import */ var src_app_components_services_pdf_bills_PdfService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/services/pdf/bills/PdfService */ "5NdR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
















function Offer_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r24.offer.number);
} }
function Offer_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r25.offer.date.toString().substring(0, 10));
} }
function Offer_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kunden Nr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r26.offer.customerId);
} }
function Offer_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Angebots Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r27.offer.name);
} }
function Offer_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Postleitzahl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r28.offer.plz);
} }
function Offer_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r29.offer.town);
} }
function Offer_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stra\u00DFe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r30.offer.street);
} }
function Offer_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bruttobetrag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r31.offer.bruttoValue);
} }
function Offer_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r32.offer.status);
} }
function Offer_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ableitungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.offer.length > 0 ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.order.length > 0 ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Angebot wurde " + (offer_r33.offer.stages.order ? "in" : "nicht in") + " Best\u00E4tigung verwandelt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.bill.length > 0 ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Angebot wurde " + (offer_r33.offer.stages.bill ? "in" : "nicht in") + " Rechnung verwandelt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.finished ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Angebot  " + (offer_r33.offer.stages.finished ? "ist" : "ist nicht") + " abgeschlossen");
} }
function Offer_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Offer_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Offer_mat_cell_35_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); var row_r34 = ctx.$implicit; var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.showOffer(row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ansehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Offer_mat_cell_35_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); var row_r34 = ctx.$implicit; var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.updateOffer(row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bearbeiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Offer_mat_cell_35_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); var row_r34 = ctx.$implicit; var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.deleteOffer(row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "L\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Offer_mat_cell_35_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); var row_r34 = ctx.$implicit; var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.downloadPdf(row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Offer_mat_cell_35_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); var row_r34 = ctx.$implicit; var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.transform(row_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Transformieren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r35);
} }
function Offer_mat_header_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function Offer_mat_row_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
var offers = src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__["OfferService"].getOffers();
var Offer = /** @class */ (function () {
    function Offer(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        // init the data
        this.displayedColumns = ['number', 'date', 'cId', 'name', 'plz', 'town', 'street', 'brutto', 'status', 'transform', 'actions'];
        this.contextMenuPosition = { x: '0px', y: '0px' };
        // MatPaginator Inputs
        this.length = offers.length;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.dataSource = offers.slice(0, this.pageSize);
        this.pageIndex = 0;
    }
    Offer.prototype.goToPage = function ($event) {
        this.length = $event.length;
        this.pageSize = $event.pageSize;
        this.dataSource = offers.slice(this.pageSize * $event.pageIndex, this.pageSize * $event.pageIndex + this.pageSize);
        this.pageIndex = $event.pageIndex;
    };
    Offer.prototype.updateOffer = function (row) {
        console.dir(row);
        this.route.navigate(['/app/sales/offer/edit'], { state: { mode: 'edit', id: row.offer.number } });
    };
    Offer.prototype.addOffer = function () {
        this.route.navigate(['/app/sales/offer/new'], { state: { mode: 'add' } });
    };
    Offer.prototype.transform = function (offer) {
        console.dir(offer);
        var dialogRef = this.dialog.open(_transform_transform_component__WEBPACK_IMPORTED_MODULE_4__["TransformComponent"], {
            height: '90%',
            width: '80%',
            data: { offer: offer, type: src_models_bill_PdfType__WEBPACK_IMPORTED_MODULE_5__["PdfType"].Offer }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    Offer.prototype.short = function (string, number) {
        return src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_2__["StringShortener"].Trim(string, number);
    };
    Offer.prototype.deleteOffer = function (row) {
        if (confirm('Wollen Sie ' + row.offer.name + ' löschen?')) {
            src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__["OfferService"].deleteOffer(row.offer.number);
            this.length = this.dataSource.length;
            this.dataSource = src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__["OfferService"].getOffers();
        }
    };
    Offer.prototype.refresh = function () {
        this.dataSource = this.dataSource;
    };
    Offer.prototype.showOffer = function (row) {
        src_app_components_services_pdf_bills_PdfService__WEBPACK_IMPORTED_MODULE_6__["PdfService"].OpenPdf(row, src_models_bill_PdfType__WEBPACK_IMPORTED_MODULE_5__["PdfType"].Offer);
    };
    Offer.prototype.downloadPdf = function (row) {
        src_app_components_services_pdf_bills_PdfService__WEBPACK_IMPORTED_MODULE_6__["PdfService"].DownloadPdf(row, src_models_bill_PdfType__WEBPACK_IMPORTED_MODULE_5__["PdfType"].Offer);
    };
    Offer.ɵfac = function Offer_Factory(t) { return new (t || Offer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
    Offer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Offer, selectors: [["customer-component"]], viewQuery: function Offer_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
        } }, decls: 42, vars: 7, consts: [["id", "content"], [1, "lessons-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "number"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "cId"], ["matColumnDef", "name"], ["matColumnDef", "plz"], ["matColumnDef", "town"], ["matColumnDef", "street"], ["matColumnDef", "brutto"], ["matColumnDef", "status"], ["id", "smallGap", "matColumnDef", "transform"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["id", "addButton", 3, "click"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], ["id", "small", "matTooltipPosition", "above", "matTooltip", "Angebot wurde erstellt", "mat-menu-item", ""], ["id", "small", "matTooltipPosition", "above", "mat-menu-item", "", 3, "matTooltip"], [3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function Offer_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Offer_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Offer_mat_cell_5_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Offer_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Offer_mat_cell_8_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Offer_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Offer_mat_cell_11_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Offer_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Offer_mat_cell_14_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Offer_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Offer_mat_cell_17_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Offer_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Offer_mat_cell_20_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Offer_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Offer_mat_cell_23_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Offer_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Offer_mat_cell_26_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Offer_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, Offer_mat_cell_29_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, Offer_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, Offer_mat_cell_32_Template, 5, 11, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, Offer_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, Offer_mat_cell_35_Template, 16, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, Offer_mat_header_row_36_Template, 1, 0, "mat-header-row", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, Offer_mat_row_37_Template, 1, 0, "mat-row", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Offer_Template_button_click_38_listener() { return ctx.addOffer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-paginator", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function Offer_Template_mat_paginator_page_41_listener($event) { return ctx.goToPage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex)("pageSizeOptions", ctx.pageSizeOptions);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: [".mat-table[_ngcontent-%COMP%] {\r\n  max-height: 71vh;\r\n  height: 71vh;\r\n  overflow-y: auto;\r\n  overflow-x: auto;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  min-height: 100%;\r\n  border-radius: 0px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  width: 10px;\r\n}\r\n\r\n#cButton[_ngcontent-%COMP%]{\r\n  color: lightgray;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #294B93;\r\n  border-color: #294B93;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  width: 80px;\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  height: 85vh;\r\n  background-color: #424242;\r\n}\r\n\r\n#small[_ngcontent-%COMP%]{\r\n  height: 0px;\r\n  padding: 7px 7px;\r\n  margin-left: 1vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBSUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQVVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFJQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im9mZmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC10YWJsZSB7XHJcbiAgbWF4LWhlaWdodDogNzF2aDtcclxuICBoZWlnaHQ6IDcxdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbiNjQnV0dG9ue1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiNhZGRCdXR0b25cclxue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NEI5MztcclxuICBib3JkZXItY29sb3I6ICMyOTRCOTM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNjb250ZW50e1xyXG4gIGhlaWdodDogODV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG59XHJcblxyXG5cclxuXHJcbiNzbWFsbHtcclxuICBoZWlnaHQ6IDBweDtcclxuICBwYWRkaW5nOiA3cHggN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
    return Offer;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Offer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './offer.component.html',
                styleUrls: ['./offer.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]]
        }] }); })();


/***/ }),

/***/ "YKJh":
/*!*********************************************************!*\
  !*** ./src/app/components/services/crm/customerData.ts ***!
  \*********************************************************/
/*! exports provided: TotalCustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalCustomerService", function() { return TotalCustomerService; });
var TotalCustomerService = /** @class */ (function () {
    function TotalCustomerService() {
    }
    TotalCustomerService.getTotalCustomerAmount = function () {
        return 147;
    };
    // a customer is a new customer if he's in the system for less than a month
    TotalCustomerService.getNewCustomerAmount = function () {
        return 7;
    };
    return TotalCustomerService;
}());



/***/ }),

/***/ "Z0Hi":
/*!************************************************************************!*\
  !*** ./src/app/components/app/crm/company/companyData/customerData.ts ***!
  \************************************************************************/
/*! exports provided: addCompanyCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCompanyCustomer", function() { return addCompanyCustomer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/services/crm/companylist */ "uOvJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function addCompanyCustomer_mat_button_toggle_15_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function addCompanyCustomer_mat_button_toggle_15_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addShipping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function addCompanyCustomer_input_16_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_input_16_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var shippingAdress_r6 = ctx.$implicit; return shippingAdress_r6.adress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var shippingAdress_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", 100 + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", shippingAdress_r6.adress)("readonly", ctx_r1.locked);
} }
function addCompanyCustomer_mat_button_toggle_20_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function addCompanyCustomer_mat_button_toggle_20_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function addCompanyCustomer_div_22_mat_button_toggle_8_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function addCompanyCustomer_div_22_mat_button_toggle_8_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteContact(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function addCompanyCustomer_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_div_22_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var i_r13 = ctx.index; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.companyCustomer.contactPersons[i_r13].fName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var i_r13 = ctx.index; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.companyCustomer.contactPersons[i_r13].lName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_div_22_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var i_r13 = ctx.index; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.companyCustomer.contactPersons[i_r13].companyRank = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_div_22_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var i_r13 = ctx.index; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.companyCustomer.contactPersons[i_r13].adress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_div_22_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var i_r13 = ctx.index; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.companyCustomer.contactPersons[i_r13].phoneNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_div_22_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var i_r13 = ctx.index; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.companyCustomer.contactPersons[i_r13].email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, addCompanyCustomer_div_22_mat_button_toggle_8_Template, 3, 0, "mat-button-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var person_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", i_r13 * 8 + 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", person_r12.fName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.companyCustomer.contactPersons[i_r13].fName)("readonly", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", i_r13 * 8 + 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", person_r12.lName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.companyCustomer.contactPersons[i_r13].lName)("readonly", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", i_r13 * 8 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", person_r12.companyRank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.companyCustomer.contactPersons[i_r13].companyRank)("readonly", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", i_r13 * 8 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", person_r12.adress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.companyCustomer.contactPersons[i_r13].adress)("readonly", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", i_r13 * 8 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", person_r12.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.companyCustomer.contactPersons[i_r13].phoneNumber)("readonly", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", i_r13 * 8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", person_r12.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.companyCustomer.contactPersons[i_r13].email)("readonly", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", i_r13 * 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", person_r12.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.showMode);
} }
var addCompanyCustomer = /** @class */ (function () {
    function addCompanyCustomer(route, activatedRoute) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.id = undefined;
        this.editMode = false;
        this.showMode = false;
        this.addMode = false;
        this.msg = '';
        this.maxAdresses = 5;
        this.maxContacts = 10;
        this.locked = false;
        this.companyCustomer = {
            id: 0, name: '', uid: '', companyLocation: { town: '', plz: '', street: '', country: '' },
            shippingAdress: [],
            contactPersons: [
                { id: 0, adress: '', phoneNumber: '',
                    email: '', companyRank: '', fName: '', lName: '', gender: ''
                }
            ]
        };
    }
    //#region All the Init Methods
    addCompanyCustomer.prototype.trackBy = function (index, obj) {
        return obj;
    };
    addCompanyCustomer.prototype.ngOnInit = function () {
        if (history.state.mode == undefined && this.route.url.includes('edit') || history.state.mode == undefined && this.route.url.includes('show')) {
            this.route.navigate(['/app/crm/company']);
        }
        else {
            if (history.state.mode == 'show') {
                this.locked = true;
                this.initShow();
                this.showMode = true;
            }
            else {
                this.editMode = history.state.mode == 'edit';
                if (this.editMode) {
                    this.initEdit();
                    this.editMode = true;
                }
                else {
                    this.initAdd();
                    this.addMode = true;
                }
            }
        }
    };
    addCompanyCustomer.prototype.initShow = function () {
        this.msg = 'Zurück';
        this.companyCustomer = src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].getCustomer(history.state.id);
    };
    addCompanyCustomer.prototype.initEdit = function () {
        this.msg = 'Bearbeiten';
        this.companyCustomer = src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].getCustomer(history.state.id);
    };
    addCompanyCustomer.prototype.initAdd = function () {
        this.msg = 'Hinzufügen';
    };
    //#endregion
    // decides what should happen when the green button is pressed
    addCompanyCustomer.prototype.doCustomer = function () {
        if (this.editMode) {
            this.updateCustomer();
        }
        else {
            this.addCustomer();
        }
        this.route.navigate(['/app/crm/company']);
    };
    addCompanyCustomer.prototype.addCustomer = function () {
        console.dir(this.companyCustomer);
        src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].addCustomer(this.companyCustomer);
    };
    addCompanyCustomer.prototype.updateCustomer = function () {
        src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].updateCustomer(this.companyCustomer);
        this.route.navigate(['/app/crm/company']);
    };
    addCompanyCustomer.prototype.addShipping = function () {
        if (this.companyCustomer.shippingAdress.length >= this.maxAdresses) {
            alert('Es können nur ' + this.maxAdresses + ' Lieferadressen gespeichert werden.');
            return;
        }
        this.companyCustomer.shippingAdress.push({ adress: '' });
        console.dir(this.companyCustomer);
    };
    addCompanyCustomer.prototype.addContact = function () {
        if (this.companyCustomer.contactPersons.length >= this.maxContacts) {
            alert('Es können nur ' + this.maxContacts + ' Kontakte gespeichert werden.');
            return;
        }
        this.companyCustomer.contactPersons.push({
            id: 1,
            adress: '',
            phoneNumber: '',
            email: '',
            fName: '',
            companyRank: '',
            lName: '',
            gender: ''
        });
        console.dir(this.companyCustomer);
    };
    addCompanyCustomer.prototype.deleteContact = function (index) {
        this.companyCustomer.contactPersons.splice(index, index + 1);
    };
    addCompanyCustomer.ɵfac = function addCompanyCustomer_Factory(t) { return new (t || addCompanyCustomer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    addCompanyCustomer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: addCompanyCustomer, selectors: [["customer-component"]], decls: 24, vars: 19, consts: [[1, "block"], ["type", "text", "disabled", "disabled", "name", "id", "placeholder", "Firmen Nummber", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "name", "placeholder", "Firmenname", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "uid", "placeholder", "UID", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "town", "placeholder", "Ort", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "plz", "placeholder", "Postleitzahl", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "street", "placeholder", "Stra\u00DFe", 3, "readonly", "ngModel", "ngModelChange"], ["type", "text", "name", "country", "placeholder", "Land", 3, "readonly", "ngModel", "ngModelChange"], [3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Lieferadresse ", 3, "ngModel", "readonly", "name", "ngModelChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "contact-person", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "value", "click"], [3, "click"], ["type", "text", "placeholder", "Lieferadresse ", 3, "ngModel", "readonly", "name", "ngModelChange"], ["id", "contact-person"], ["type", "text", "id", "contact-person", "placeholder", "Vorname", 3, "ngModel", "readonly", "name", "value", "ngModelChange"], ["type", "text", "id", "contact-person", "placeholder", "Nachname", 3, "ngModel", "readonly", "name", "value", "ngModelChange"], ["type", "text", "id", "contact-person", "placeholder", "Job Beschreibung", 3, "ngModel", "readonly", "name", "value", "ngModelChange"], ["type", "text", "id", "contact-person", "placeholder", "Adresse", 3, "ngModel", "readonly", "name", "value", "ngModelChange"], ["type", "text", "id", "contact-person", "placeholder", "Tel.", 3, "ngModel", "readonly", "name", "value", "ngModelChange"], ["type", "text", "id", "contact-person", "placeholder", "Email", 3, "ngModel", "readonly", "name", "value", "ngModelChange"], ["type", "text", "id", "contact-person", "placeholder", "Geschlecht", 3, "readonly", "name", "value"]], template: function addCompanyCustomer_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Firmen Daten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_Template_input_ngModelChange_5_listener($event) { return ctx.companyCustomer.id = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_Template_input_ngModelChange_6_listener($event) { return ctx.companyCustomer.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_Template_input_ngModelChange_7_listener($event) { return ctx.companyCustomer.uid = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_Template_input_ngModelChange_8_listener($event) { return ctx.companyCustomer.companyLocation.town = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_Template_input_ngModelChange_9_listener($event) { return ctx.companyCustomer.companyLocation.plz = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_Template_input_ngModelChange_10_listener($event) { return ctx.companyCustomer.companyLocation.street = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function addCompanyCustomer_Template_input_ngModelChange_11_listener($event) { return ctx.companyCustomer.companyLocation.country = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Liefer Daten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, addCompanyCustomer_mat_button_toggle_15_Template, 3, 0, "mat-button-toggle", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, addCompanyCustomer_input_16_Template, 1, 3, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kontakt Personen");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, addCompanyCustomer_mat_button_toggle_20_Template, 3, 0, "mat-button-toggle", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, addCompanyCustomer_div_22_Template, 9, 28, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function addCompanyCustomer_Template_input_click_23_listener() { return ctx.doCustomer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.companyCustomer.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.companyCustomer.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.companyCustomer.uid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.companyCustomer.companyLocation.town);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.companyCustomer.companyLocation.plz);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.companyCustomer.companyLocation.street);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.companyCustomer.companyLocation.country);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyCustomer.shippingAdress)("ngForTrackBy", ctx.trackBy);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyCustomer.contactPersons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.msg);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n  height: 80vh;\r\n  border-radius: 0px;\r\n  overflow-y: auto;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 10px;\r\n  width: 20%;\r\n  margin: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n}\r\n\r\ninput#contact-person[_ngcontent-%COMP%]{\r\n  width: 10vw;\r\n  min-width: 100px;\r\n  margin: 0px;\r\n  border-radius: 0;\r\n  margin-top: 1vh;\r\n}\r\n\r\n.mat-button-toggle[_ngcontent-%COMP%]{\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-icon#black[_ngcontent-%COMP%]{\r\n  color:black;\r\n  background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled{\r\n  background-color: white;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]{\r\n  display: block;\r\n  padding-top: 10px;\r\n  border-radius: 0px 50px 50px 0px;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #303030 ;\r\n  margin: 0;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  display: inline-block;\r\n  margin-right: 1vw;\r\n}\r\n\r\n#line[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\nbutton#id[_ngcontent-%COMP%] {\r\n  padding: 12px 20px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #c2185b;\r\n  border-color: #c2185b;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n#button-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding-left: 1vw;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n#row[_ngcontent-%COMP%]{\r\n  float: left;\r\n  position: absolute;\r\n  left: 15vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyRGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBR0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFJQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoiY3VzdG9tZXJEYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCNjb250YWN0LXBlcnNvbntcclxuICB3aWR0aDogMTB2dztcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG59XHJcbi5tYXQtYnV0dG9uLXRvZ2dsZXtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiNibGFja3tcclxuICBjb2xvcjpibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQ6ZGlzYWJsZWQsc2VsZWN0OmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmRpdi5ibG9ja3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggNTBweCA1MHB4IDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMCA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYuYmxvY2sgaDF7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDF2dztcclxufVxyXG4jbGluZXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbmJ1dHRvbiNpZCB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuI2FkZEJ1dHRvblxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxODViO1xyXG4gIGJvcmRlci1jb2xvcjogI2MyMTg1YjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiNidXR0b24tY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuI3Jvd3tcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTV2dztcclxufVxyXG5cclxuXHJcbiJdfQ== */", "input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button#form[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\npadding-left: 2vw;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=password][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBYUEsNkJBQTZCOztBQUM3QixnQ0FBZ0M7O0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJmb3Jtcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiNmb3JtIHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5wYWRkaW5nLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdLCBzZWxlY3QsdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDEycHggNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlJlbW92ZSBudW1iZXIgaW5wdXQgYXJyb3dzKi9cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbiJdfQ== */"] });
    return addCompanyCustomer;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](addCompanyCustomer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './customerData.component.html',
                styleUrls: ['./customerData.component.css', '../../../../css/forms.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_app_main_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app/main/topbar/topbar.component */ "bnqr");
/* harmony import */ var _components_app_main_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app/main//sidenav/sidenav.component */ "0VDA");
/* harmony import */ var _components_app_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app/main//footer/footer.component */ "Dfmv");
/* harmony import */ var _components_app_main_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/app/main//main/main.component */ "byvr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/profile/profile/profile.component */ "INSd");
/* harmony import */ var _components_app_crm_customer_customer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/app/crm/customer/customer.component */ "ojiR");
/* harmony import */ var _components_app_crm_customer_customerData_customerData__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/app/crm/customer/customerData/customerData */ "3YZS");
/* harmony import */ var _components_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/app/dashboard/dashboard.component */ "77hX");
/* harmony import */ var _components_app_crm_company_company_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/app/crm/company/company.component */ "I4fD");
/* harmony import */ var _components_app_crm_company_companyData_customerData__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/app/crm/company/companyData/customerData */ "Z0Hi");
/* harmony import */ var _components_app_products_heatexchanger_heatexchanger_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/app/products/heatexchanger/heatexchanger.component */ "dCjc");
/* harmony import */ var _components_app_products_ProductData_ProductData__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/app/products/ProductData/ProductData */ "wnEt");
/* harmony import */ var _components_app_bill_offer_listOffer_offer_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/app/bill/offer/listOffer/offer.component */ "VQNb");
/* harmony import */ var _components_profile_settings_profileSettings_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/profile/settings/profileSettings.component */ "IS7t");
/* harmony import */ var _components_app_bill_offer_offerData_offerData_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/app/bill/offer/offerData/offerData.component */ "za/7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _components_settings_settings_Settings_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/settings/settings/Settings.component */ "qdFh");
/* harmony import */ var _components_settings_Main_MainSettings_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/settings/Main/MainSettings.component */ "2tP4");
/* harmony import */ var _components_settings_Dashboard_SettingsDashboard_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/settings/Dashboard/SettingsDashboard.component */ "6CLl");
/* harmony import */ var _components_settings_Sidebar_SettingsSidenav_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/settings/Sidebar/SettingsSidenav.component */ "SwVC");
/* harmony import */ var _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/app/bill/confirmation/list/confirmation.component */ "q+PP");
/* harmony import */ var _components_app_bill_confirmation_confirmationData_offerData_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/app/bill/confirmation/confirmationData/offerData.component */ "QQMS");
/* harmony import */ var _components_app_bill_transform_transform_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/app/bill/transform/transform.component */ "LDeE");
/* harmony import */ var _components_settings_Sales_Sales_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/settings/Sales/Sales.component */ "dEck");






























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"]], imports: [[
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_52__["MatNativeDateModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_app_main_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"],
        _components_app_main_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"],
        _components_app_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_app_main_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
        _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["Profile"],
        _components_app_crm_customer_customer_component__WEBPACK_IMPORTED_MODULE_42__["Customer"],
        _components_app_crm_customer_customerData_customerData__WEBPACK_IMPORTED_MODULE_43__["addCustomer"],
        _components_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_44__["Dashboard"],
        _components_app_crm_company_company_component__WEBPACK_IMPORTED_MODULE_45__["Company"],
        _components_app_crm_company_companyData_customerData__WEBPACK_IMPORTED_MODULE_46__["addCompanyCustomer"],
        _components_app_products_heatexchanger_heatexchanger_component__WEBPACK_IMPORTED_MODULE_47__["Heatexchanger"],
        _components_app_products_ProductData_ProductData__WEBPACK_IMPORTED_MODULE_48__["HeatexchangerData"],
        _components_app_bill_offer_listOffer_offer_component__WEBPACK_IMPORTED_MODULE_49__["Offer"],
        _components_profile_settings_profileSettings_component__WEBPACK_IMPORTED_MODULE_50__["ProfileSettings"],
        _components_app_bill_offer_offerData_offerData_component__WEBPACK_IMPORTED_MODULE_51__["OfferData"],
        _components_settings_settings_Settings_component__WEBPACK_IMPORTED_MODULE_53__["SettingsComponent"],
        _components_settings_Main_MainSettings_component__WEBPACK_IMPORTED_MODULE_54__["MainsettingsComponent"],
        _components_settings_Dashboard_SettingsDashboard_component__WEBPACK_IMPORTED_MODULE_55__["SettingsdashboardComponent"],
        _components_settings_Sidebar_SettingsSidenav_component__WEBPACK_IMPORTED_MODULE_56__["SettingssidenavComponent"],
        _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_57__["Confirmation"],
        _components_app_bill_confirmation_confirmationData_offerData_component__WEBPACK_IMPORTED_MODULE_58__["ConfirmationData"],
        _components_app_bill_transform_transform_component__WEBPACK_IMPORTED_MODULE_59__["TransformComponent"],
        _components_settings_Sales_Sales_component__WEBPACK_IMPORTED_MODULE_60__["SalesComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_52__["MatNativeDateModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_app_main_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"],
                    _components_app_main_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"],
                    _components_app_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _components_app_main_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                    _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["Profile"],
                    _components_app_crm_customer_customer_component__WEBPACK_IMPORTED_MODULE_42__["Customer"],
                    _components_app_crm_customer_customerData_customerData__WEBPACK_IMPORTED_MODULE_43__["addCustomer"],
                    _components_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_44__["Dashboard"],
                    _components_app_crm_company_company_component__WEBPACK_IMPORTED_MODULE_45__["Company"],
                    _components_app_crm_company_companyData_customerData__WEBPACK_IMPORTED_MODULE_46__["addCompanyCustomer"],
                    _components_app_products_heatexchanger_heatexchanger_component__WEBPACK_IMPORTED_MODULE_47__["Heatexchanger"],
                    _components_app_products_ProductData_ProductData__WEBPACK_IMPORTED_MODULE_48__["HeatexchangerData"],
                    _components_app_bill_offer_listOffer_offer_component__WEBPACK_IMPORTED_MODULE_49__["Offer"],
                    _components_profile_settings_profileSettings_component__WEBPACK_IMPORTED_MODULE_50__["ProfileSettings"],
                    _components_app_bill_offer_offerData_offerData_component__WEBPACK_IMPORTED_MODULE_51__["OfferData"],
                    _components_settings_settings_Settings_component__WEBPACK_IMPORTED_MODULE_53__["SettingsComponent"],
                    _components_settings_Main_MainSettings_component__WEBPACK_IMPORTED_MODULE_54__["MainsettingsComponent"],
                    _components_settings_Dashboard_SettingsDashboard_component__WEBPACK_IMPORTED_MODULE_55__["SettingsdashboardComponent"],
                    _components_settings_Sidebar_SettingsSidenav_component__WEBPACK_IMPORTED_MODULE_56__["SettingssidenavComponent"],
                    _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_57__["Confirmation"],
                    _components_app_bill_confirmation_confirmationData_offerData_component__WEBPACK_IMPORTED_MODULE_58__["ConfirmationData"],
                    _components_app_bill_transform_transform_component__WEBPACK_IMPORTED_MODULE_59__["TransformComponent"],
                    _components_settings_Sales_Sales_component__WEBPACK_IMPORTED_MODULE_60__["SalesComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_52__["MatNativeDateModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"],
                ],
                providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bnqr":
/*!****************************************************************!*\
  !*** ./src/app/components/app/main/topbar/topbar.component.ts ***!
  \****************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/services/profile/UserService */ "2BtR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function TopbarComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(_sanitizer, route) {
        this._sanitizer = _sanitizer;
        this.route = route;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        // when we have backend access we need to specify which user we want to get.
        this.user = src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUser(1);
        // get the imge from the user
        this.image = this._sanitizer.bypassSecurityTrustUrl(this.user.image);
    };
    TopbarComponent.prototype.backToHome = function () {
        this.route.navigate(['app/dashboard']);
    };
    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["topbar"]], decls: 9, vars: 2, consts: [["color", "primary"], ["routerLink", "dashboard", 1, "mat-elevation-z5", "icon", "button-container", 3, "click"], [1, "spacer"], ["routerLink", "profile/user", "mat-button", "", "aria-label", "Example icon-button with heart icon", 1, "icon", "favorite-icon"], ["matBadge", "1", "matBadgeSize", "large", "alt", "Profil", 3, "src"], ["mat-button", "", "class", "-icon", "aria-label", "Example icon-button with share icon", 4, "ngIf"], ["mat-button", "", "aria-label", "Example icon-button with share icon", 1, "-icon"], ["routerLink", "settings/dashboard"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_p_click_1_listener() { return ctx.backToHome(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Bookless ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopbarComponent_button_8_Template, 3, 0, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.premissions.settings.read);
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%] {\r\n    display: table;\r\n  }\r\n\r\n  .example-label[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    margin-left: 0px;\r\n    min-width: 120px;\r\n  }\r\n\r\n  .example-button-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 490px;\r\n  }\r\n\r\n  .example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .example-flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .example-button-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n  }\r\n\r\n  .mat-toolbar[_ngcontent-%COMP%]{\r\n    height: 8vh;\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    height: 4vh;\r\n    width: 4vh;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n}\r\n\r\n  button.home[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 15vw;\r\n  position: absolute;\r\n  left: 0;\r\n  padding: 3vw;\r\n}\r\n\r\n  mat-icon.home-icon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 1vw;\r\n}\r\n\r\n  p.button-container[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 14vw;\r\n  height: 8vh;\r\n  padding-left: 1vw;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n  .mock-hover[_ngcontent-%COMP%]:hover{\r\n  background-color: #1d3a78;\r\n}\r\n\r\n  .mat-icon[_ngcontent-%COMP%]{\r\nmargin-right: 1vw;\r\n}\r\n\r\n  p[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover{\r\n  \r\n  background-color: #1d3a78;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7RUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7RUFDQTs7RUFFRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoidG9wYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIH0gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA0OTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LXRvb2xiYXJ7XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDR2aDtcclxuICAgIHdpZHRoOiA0dmg7XHJcbiAgfVxyXG5cclxuc3BhbntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYnV0dG9uLmhvbWV7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDN2dztcclxufVxyXG5cclxubWF0LWljb24uaG9tZS1pY29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxdnc7XHJcbn1cclxuXHJcbnAuYnV0dG9uLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE0dnc7XHJcbiAgaGVpZ2h0OiA4dmg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tb2NrLWhvdmVyOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDNhNzg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbntcclxubWFyZ2luLXJpZ2h0OiAxdnc7XHJcbn1cclxucDpob3ZlcixidXR0b246aG92ZXJ7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkM2E3ODtcclxufSJdfQ== */"] });
    return TopbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'topbar',
                templateUrl: './topbar.component.html',
                styleUrls: ['./topbar.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "byvr":
/*!************************************************************!*\
  !*** ./src/app/components/app/main/main/main.component.ts ***!
  \************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "0VDA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "Dfmv");





var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["main"]], decls: 3, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidenav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "footer");
        } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".router-outlet[_ngcontent-%COMP%]{\r\n  max-height: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGVyLW91dGxldHtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG4iXX0= */"] });
    return MainComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dCjc":
/*!**********************************************************************************!*\
  !*** ./src/app/components/app/products/heatexchanger/heatexchanger.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Heatexchanger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heatexchanger", function() { return Heatexchanger; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/crm/customerlist */ "rh7+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var src_app_components_services_tools_emailHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/services/tools/emailHandler */ "h97D");
/* harmony import */ var src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/services/tools/StringShortner */ "Kh+L");
/* harmony import */ var src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/services/prodcut/rawProduct */ "q+uM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");














function Heatexchanger_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Produkt Nummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Heatexchanger_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r12.productId);
} }
function Heatexchanger_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Produkt Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Heatexchanger_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r13 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.short(lesson_r13.name, 19));
} }
function Heatexchanger_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Beschreibung");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Heatexchanger_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r14 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.short(lesson_r14.description, 19));
} }
function Heatexchanger_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Listenpreis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Heatexchanger_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r15.price + " \u20AC");
} }
function Heatexchanger_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Heatexchanger_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Heatexchanger_mat_cell_17_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var row_r16 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showCustomer(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ansehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Heatexchanger_mat_cell_17_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var row_r16 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.updateCustomer(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bearbeiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Heatexchanger_mat_cell_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var row_r16 = ctx.$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.deleteCustomer(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "L\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r17);
} }
function Heatexchanger_mat_header_row_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function Heatexchanger_mat_row_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
var products = src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_5__["RawProductService"].getAllProducts();
var Heatexchanger = /** @class */ (function () {
    function Heatexchanger(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        // init the data
        this.displayedColumns = ['id', 'name', 'description', 'price', 'actions'];
        this.contextMenuPosition = { x: '0px', y: '0px' };
        // MatPaginator Inputs
        this.length = products.length;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.dataSource = products.slice(0, this.pageSize);
        this.pageIndex = 0;
    }
    Heatexchanger.prototype.goToPage = function ($event) {
        this.length = $event.length;
        this.pageSize = $event.pageSize;
        this.dataSource = products.slice(this.pageSize * $event.pageIndex, this.pageSize * $event.pageIndex + this.pageSize);
        this.pageIndex = $event.pageIndex;
    };
    Heatexchanger.prototype.showCustomer = function (row) {
        this.route.navigate(['/app/products/heatexchanger/show'], { state: { mode: 'show', id: row.productId } });
    };
    Heatexchanger.prototype.updateCustomer = function (row) {
        console.dir(row);
        this.route.navigate(['/app/products/heatexchanger/edit'], { state: { mode: 'edit', id: row.productId } });
    };
    Heatexchanger.prototype.addCustomer = function () {
        this.route.navigate(['/app/products/heatexchanger/new'], { state: { mode: 'add' } });
    };
    Heatexchanger.prototype.short = function (string, number) {
        return src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_4__["StringShortener"].Trim(string, number);
    };
    Heatexchanger.prototype.deleteCustomer = function (row) {
        if (confirm('Wollen Sie löschen?')) {
            this.dataSource = src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_5__["RawProductService"].getAllProducts().filter(function (customers) { return customers.productId !== row.productId; });
            this.length = this.dataSource.length;
            this.refresh();
        }
    };
    Heatexchanger.prototype.mailCustomer = function (row) {
        var customer = _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].getCustomer(row.productId);
        var text = 'Sehr ' + (customer.gender == 'm' ? 'geehrter Herr,' : 'geehrte Frau,') + customer.lName;
        var emailData = { email: customer.email, subject: 'Subject ', content: text };
        src_app_components_services_tools_emailHandler__WEBPACK_IMPORTED_MODULE_3__["EmailHandler"].sendEmail(emailData);
    };
    Heatexchanger.prototype.refresh = function () {
        this.dataSource = this.dataSource;
    };
    Heatexchanger.ɵfac = function Heatexchanger_Factory(t) { return new (t || Heatexchanger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
    Heatexchanger.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Heatexchanger, selectors: [["customer-component"]], viewQuery: function Heatexchanger_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
        } }, decls: 24, vars: 7, consts: [["id", "content"], [1, "lessons-table", "mat-elevation-z8", 3, "dataSource"], ["id", "id", "matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["id", "name", "matColumnDef", "name"], ["class", "description-cell", 4, "matCellDef"], ["id", "desc", "matColumnDef", "description"], ["class", "duration-cell", 4, "matCellDef"], ["id", "desc", "matColumnDef", "price"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["id", "addButton", 3, "click"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "description-cell"], [1, "duration-cell"], [3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function Heatexchanger_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Heatexchanger_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Heatexchanger_mat_cell_5_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Heatexchanger_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Heatexchanger_mat_cell_8_Template, 2, 1, "mat-cell", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Heatexchanger_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Heatexchanger_mat_cell_11_Template, 2, 1, "mat-cell", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Heatexchanger_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Heatexchanger_mat_cell_14_Template, 2, 1, "mat-cell", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Heatexchanger_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Heatexchanger_mat_cell_17_Template, 12, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Heatexchanger_mat_header_row_18_Template, 1, 0, "mat-header-row", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Heatexchanger_mat_row_19_Template, 1, 0, "mat-row", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Heatexchanger_Template_button_click_20_listener() { return ctx.addCustomer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-paginator", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function Heatexchanger_Template_mat_paginator_page_23_listener($event) { return ctx.goToPage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex)("pageSizeOptions", ctx.pageSizeOptions);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: [".mat-table[_ngcontent-%COMP%] {\r\n  max-height: 71vh;\r\n  height: 71vh;\r\n  overflow-y: auto;\r\n  overflow-x: auto;\r\n\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  min-height: 100%;\r\n  border-radius: 0px;\r\n}\r\n\r\ndiv.mat-paginator-conatainer[_ngcontent-%COMP%]{\r\n  max-height:1vh;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #294B93;\r\n  border-color: #294B93;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  width: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXRleGNoYW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6ImhlYXRleGNoYW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xyXG4gIG1heC1oZWlnaHQ6IDcxdmg7XHJcbiAgaGVpZ2h0OiA3MXZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcblxyXG5kaXYubWF0LXBhZ2luYXRvci1jb25hdGFpbmVye1xyXG4gIG1heC1oZWlnaHQ6MXZoO1xyXG59XHJcblxyXG5cclxuI2FkZEJ1dHRvblxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0QjkzO1xyXG4gIGJvcmRlci1jb2xvcjogIzI5NEI5MztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
    return Heatexchanger;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Heatexchanger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './heatexchanger.component.html',
                styleUrls: ['./heatexchanger.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"]]
        }] }); })();


/***/ }),

/***/ "dEck":
/*!**************************************************************!*\
  !*** ./src/app/components/settings/Sales/Sales.component.ts ***!
  \**************************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var SalesComponent = /** @class */ (function () {
    function SalesComponent() {
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(); };
    SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["Sales-component"]], decls: 2, vars: 0, template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sales.component component generated ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJTYWxlcy5jb21wb25lbnQuY3NzIn0= */"] });
    return SalesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'Sales-component',
                templateUrl: './Sales.component.html',
                styleUrls: ['./Sales.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "h97D":
/*!***********************************************************!*\
  !*** ./src/app/components/services/tools/emailHandler.ts ***!
  \***********************************************************/
/*! exports provided: EmailHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailHandler", function() { return EmailHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var EmailHandler = /** @class */ (function () {
    function EmailHandler() {
    }
    EmailHandler.sendEmail = function (emailData) {
        window.location.href = 'mailto:' + emailData.email +
            '?subject=' + emailData.subject +
            '&body=' + emailData.content + this.footer(); // test1
    };
    EmailHandler.sendBulkEmail = function (emailData) {
        var mail = 'mailto:';
        emailData.forEach(function (data) {
            mail += data + ',\n';
        });
        mail = mail.substring(0, mail.length - 2);
        mail += this.footer();
        window.location.href = mail;
    };
    EmailHandler.footer = function () {
        var footer = '%0D%0A%0D%0A%0D%0A';
        var message = [
            'POWER SOLAR Wärmetauscher%0D%0A%0D%0A',
            'Inh. Dipl.-Bw. Gerald Buchberger, MBA%0D%0A%0D%0A',
            'Geschäftsleitung%0D%0A%0D%0A',
            'Ritzlhofstrasse 28',
            '4052 Ansfelden%0D%0A%0D%0A',
            'Tel.        +43 (0)7229 / 81 800%0D%0A',
            'Fax.       +43 (0)7229 / 81 800%0D%0A',
            'Mobil    +43 (0)699 / 10 22 17 91%0D%0A%0D%0A',
            'Internet:  www.Power-Solar.at%0D%0A',
            'Email :    michaela.buchberger@power-solar.at%0D%0A%0D%0A',
            'Mit freundlichen Grüßen%0D%0A%0D%0A',
            'Ihr Power Solar Team!'
        ];
        message.forEach(function (line) {
            footer += line;
        });
        return footer;
    };
    EmailHandler.ɵfac = function EmailHandler_Factory(t) { return new (t || EmailHandler)(); };
    EmailHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailHandler, factory: EmailHandler.ɵfac, providedIn: 'root' });
    return EmailHandler;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "oViW":
/*!**********************************************************!*\
  !*** ./src/app/components/services/bill/OfferService.ts ***!
  \**********************************************************/
/*! exports provided: OfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferService", function() { return OfferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var date1 = new Date('December 17, 2020');
var date2 = new Date('January 12, 2021');
var offer = [
    { offer: { number: 200045, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 12265, isCompany: true, name: 'Thermenbad', plz: '4050', town: 'Leonding', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1432, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 4322, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3543, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 5644, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 676, name: 'Sonstiges', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 12, name: 'ZC-48', description: 'WT-Innen', price: 1645.40 }, amount: 1 },
            { product: { productId: 123, name: 'ZC-49', description: 'WT-Innen', price: 1690.50 }, amount: 1 },
            { product: { productId: 123, name: 'ZC-53', description: 'WT-Innen', price: 1950.41 }, amount: 1 },
            { product: { productId: 124, name: 'ZC-55', description: 'WT-Außen', price: 2105.43 }, amount: 1 },
            { product: { productId: 122, name: 'ZC-62', description: 'WT-Außen', price: 2770.45 }, amount: 1 },
            { product: { productId: 1322, name: 'ZC-21', description: 'WT-Außen', price: 653.30 }, amount: 1 },
            { product: { productId: 1232, name: 'ZC-32', description: 'WT-Verbindung', price: 725.90 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
            { product: { productId: 1122, name: 'ZC-12', description: 'WT-Kelleranlage', price: 1950 }, amount: 1 },
        ] },
    { offer: { number: 2, date: date1, uid: '', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: false, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 4, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50 }, amount: 1 },
        ] },
    { offer: { number: 3, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 4, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50 }, amount: 1 },
        ] },
    { offer: { number: 4, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 4, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50 }, amount: 1 },
        ] },
    { offer: { number: 5, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 4, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50 }, amount: 1 },
        ] },
    { offer: { number: 6, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 4, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50 }, amount: 1 },
        ] },
    { offer: { number: 7, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 4, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50 }, amount: 1 },
        ] },
    { offer: { number: 8, date: date1, uid: '21341234', possibleDelivery: date2, projectName: 'An-17525', customerId: 1, isCompany: true, name: 'Thermenbad', plz: '4052', town: 'Ansgefelden', street: 'Ritzlhofstraße', bruttoValue: 2750, status: 'laufend', consultantId: 1, stages: { offer: 'AN-500332', order: '', bill: '', deliveryNote: '', finished: false, canceld: false } },
        prodcuts: [
            { product: { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 1 }, amount: 1 },
            { product: { productId: 2, name: 'ZC-44', description: 'Wellrohrschlauch', price: 12 }, amount: 21 },
            { product: { productId: 3, name: 'ZC-45', description: 'Bodenkonsole', price: 1 }, amount: 1 },
            { product: { productId: 4, name: 'ZC-46', description: 'Haken', price: 12 }, amount: 8 },
            { product: { productId: 6, name: 'ZC-47', description: 'Verschraubungen', price: 43 }, amount: 2 },
            { product: { productId: 12, name: 'ZC-48', description: 'Sonstiges', price: 50 }, amount: 1 },
        ] },
];
/*
product: IRawProduct;
amount:number;
*/
var OfferService = /** @class */ (function () {
    function OfferService() {
    }
    OfferService.getOffers = function () {
        return offer;
    };
    OfferService.addOffer = function (newOffer) {
        offer.push(newOffer);
    };
    OfferService.deleteOffer = function (number) {
        offer = offer.filter(function (o) { return o.offer.number != number; });
    };
    OfferService.getOffer = function (number) {
        return offer.filter(function (o) { return o.offer.number == number; })[0];
    };
    OfferService.updateOffer = function (updatedOffer) {
        var itemIndex = offer.findIndex(function (item) { return item.offer.number == updatedOffer.offer.number; });
        offer[itemIndex] = updatedOffer;
    };
    OfferService.ɵfac = function OfferService_Factory(t) { return new (t || OfferService)(); };
    OfferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OfferService, factory: OfferService.ɵfac, providedIn: 'root' });
    return OfferService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "ojiR":
/*!*******************************************************************!*\
  !*** ./src/app/components/app/crm/customer/customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/crm/customerlist */ "rh7+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var src_app_components_services_tools_emailHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/services/tools/emailHandler */ "h97D");
/* harmony import */ var src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/services/tools/StringShortner */ "Kh+L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");













function Customer_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r18.id);
} }
function Customer_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nachname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r19 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.short(lesson_r19.fName, 19));
} }
function Customer_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vorname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r20 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.short(lesson_r20.lName, 19));
} }
function Customer_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r21 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.short(lesson_r21.adress, 19));
} }
function Customer_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Telefon Nummber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r22.phoneNumber);
} }
function Customer_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Customer_mat_cell_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var row_r23 = ctx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.mailCustomer(row_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r23 = ctx.$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.short(row_r23.email, 25), " ");
} }
function Customer_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anrede");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lesson_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r26.gender == "m" ? "Herr" : "Frau");
} }
function Customer_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Customer_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Customer_mat_cell_26_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); var row_r27 = ctx.$implicit; var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.showCustomer(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ansehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Customer_mat_cell_26_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); var row_r27 = ctx.$implicit; var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.updateCustomer(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bearbeiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Customer_mat_cell_26_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); var row_r27 = ctx.$implicit; var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.deleteCustomer(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "L\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Customer_mat_cell_26_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); var row_r27 = ctx.$implicit; var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.mailCustomer(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r27 = ctx.$implicit;
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email an ", row_r27.lName, "");
} }
function Customer_mat_header_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function Customer_mat_row_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
var customers = _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].getAllCustomers();
var Customer = /** @class */ (function () {
    function Customer(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        // init the data
        this.displayedColumns = ['fName', 'lName', 'adress', 'phoneNumber', 'email', 'gender', 'actions'];
        this.contextMenuPosition = { x: '0px', y: '0px' };
        // MatPaginator Inputs
        this.length = customers.length;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.dataSource = customers.slice(0, this.pageSize);
        this.pageIndex = 0;
    }
    Customer.prototype.goToPage = function ($event) {
        this.length = $event.length;
        this.pageSize = $event.pageSize;
        this.dataSource = customers.slice(this.pageSize * $event.pageIndex, this.pageSize * $event.pageIndex + this.pageSize);
        this.pageIndex = $event.pageIndex;
    };
    Customer.prototype.showCustomer = function (row) {
        this.route.navigate(['/app/crm/customer/show'], { state: { mode: 'show', id: row.id } });
    };
    Customer.prototype.updateCustomer = function (row) {
        console.dir(row);
        this.route.navigate(['/app/crm/customer/edit'], { state: { mode: 'edit', id: row.id } });
    };
    Customer.prototype.addCustomer = function () {
        this.route.navigate(['/app/crm/customer/new'], { state: { mode: 'add' } });
    };
    Customer.prototype.short = function (string, number) {
        return src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_4__["StringShortener"].Trim(string, number);
    };
    Customer.prototype.deleteCustomer = function (row) {
        if (confirm('Wollen Sie ' + row.fName + ' ' + row.lName + ' löschen?')) {
            console.clear();
            console.dir(this.dataSource);
            this.dataSource = _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].getAllCustomers().filter(function (customers) { return customers.id !== row.id; });
            console.dir(this.dataSource);
            this.length = this.dataSource.length;
            this.refresh();
        }
    };
    Customer.prototype.mailCustomer = function (row) {
        var customer = _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_1__["CustomerService"].getCustomer(row.id);
        var text = 'Sehr ' + (customer.gender == 'm' ? 'geehrter Herr,' : 'geehrte Frau,') + customer.lName;
        var emailData = { email: customer.email, subject: 'Subject ', content: text };
        src_app_components_services_tools_emailHandler__WEBPACK_IMPORTED_MODULE_3__["EmailHandler"].sendEmail(emailData);
    };
    Customer.prototype.refresh = function () {
        this.dataSource = this.dataSource;
    };
    Customer.ɵfac = function Customer_Factory(t) { return new (t || Customer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
    Customer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Customer, selectors: [["customer-component"]], viewQuery: function Customer_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
        } }, decls: 33, vars: 7, consts: [["id", "content"], [1, "lessons-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "fName"], ["class", "description-cell", 4, "matCellDef"], ["matColumnDef", "lName"], ["class", "duration-cell", 4, "matCellDef"], ["matColumnDef", "adress"], ["id", "big", 4, "matHeaderCellDef"], ["class", "duration-cell", "id", "big", 4, "matCellDef"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "email"], ["matColumnDef", "gender"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["id", "addButton", 3, "click"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "description-cell"], [1, "duration-cell"], ["id", "big"], ["id", "big", 1, "duration-cell"], [1, "email", 3, "click"], [3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function Customer_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Customer_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Customer_mat_cell_5_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Customer_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Customer_mat_cell_8_Template, 2, 1, "mat-cell", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Customer_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Customer_mat_cell_11_Template, 2, 1, "mat-cell", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Customer_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Customer_mat_cell_14_Template, 2, 1, "mat-cell", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Customer_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Customer_mat_cell_17_Template, 2, 1, "mat-cell", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Customer_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Customer_mat_cell_20_Template, 3, 1, "mat-cell", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Customer_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Customer_mat_cell_23_Template, 2, 1, "mat-cell", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Customer_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Customer_mat_cell_26_Template, 14, 2, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Customer_mat_header_row_27_Template, 1, 0, "mat-header-row", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Customer_mat_row_28_Template, 1, 0, "mat-row", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Customer_Template_button_click_29_listener() { return ctx.addCustomer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-paginator", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function Customer_Template_mat_paginator_page_32_listener($event) { return ctx.goToPage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex)("pageSizeOptions", ctx.pageSizeOptions);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], styles: [".mat-table[_ngcontent-%COMP%] {\r\n  max-height: 71vh;\r\n  height: 71vh;\r\n  overflow-y: auto;\r\n  overflow-x: auto;\r\n\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  min-height: 100%;\r\n  border-radius: 0px;\r\n}\r\n\r\ndiv.mat-paginator-conatainer[_ngcontent-%COMP%]{\r\n  max-height:1vh;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%]{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 100px !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n#big[_ngcontent-%COMP%]{\r\n  flex: 0 0 200px !important;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  width: 80vw;\r\n\r\n  position: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  width: 10px;\r\n}\r\n\r\n#cButton[_ngcontent-%COMP%]{\r\n  color: lightgray;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #294B93;\r\n  border-color: #294B93;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  width: 80px;\r\n}\r\n\r\n.mat-menu-item[_ngcontent-%COMP%]{\r\n  font-size: 12pt;\r\n}\r\n\r\n.email[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.email[_ngcontent-%COMP%]:hover{\r\n  color: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th.mat-header-cell.cdk-column-position.mat-column-position[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  height: 85vh;\r\n  background-color: #424242;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFJQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xyXG4gIG1heC1oZWlnaHQ6IDcxdmg7XHJcbiAgaGVpZ2h0OiA3MXZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcblxyXG5kaXYubWF0LXBhZ2luYXRvci1jb25hdGFpbmVye1xyXG4gIG1heC1oZWlnaHQ6MXZoO1xyXG59XHJcblxyXG4ubWF0LWNlbGwsLm1hdC1oZWFkZXItY2VsbHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMTAwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4jYmlne1xyXG4gIGZsZXg6IDAgMCAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZXtcclxuICB3aWR0aDogODB2dztcclxuXHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4jY0J1dHRvbntcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuXHJcblxyXG4jYWRkQnV0dG9uXHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTRCOTM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjk0QjkzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuXHJcbi5tYXQtbWVudS1pdGVte1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxufVxyXG5cclxuLmVtYWlse1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVtYWlsOmhvdmVye1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5cclxudGFibGUgPiB0aGVhZCA+IHRyID4gdGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tcG9zaXRpb24ubWF0LWNvbHVtbi1wb3NpdGlvbiB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuI2NvbnRlbnR7XHJcbiAgaGVpZ2h0OiA4NXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
    return Customer;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Customer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './customer.component.html',
                styleUrls: ['./customer.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"]]
        }] }); })();


/***/ }),

/***/ "ppYj":
/*!**************************************************************!*\
  !*** ./src/app/components/services/pdf/bills/offer/offer.ts ***!
  \**************************************************************/
/*! exports provided: OfferPdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPdfService", function() { return OfferPdfService; });
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _crm_companylist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../crm/companylist */ "uOvJ");
/* harmony import */ var _tools_dateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tools/dateFormatter */ "R5LB");
/* harmony import */ var _crm_customerlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../crm/customerlist */ "rh7+");
/* harmony import */ var _profile_UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../profile/UserService */ "2BtR");






pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default.a.pdfMake.vfs;
var OfferPdfService = /** @class */ (function () {
    function OfferPdfService(offer) {
        var _this = this;
        this.products = [['Pos.', 'Bezeichnung', 'Menge', 'Preis', 'Gesamt']];
        this.total = 0;
        // the biggest problem is the two different type of customers
        // to fit the diffrent variables into a single document
        this.pdfData = {
            leftBlock: {
                sentTo: '',
                street: '',
                town: '',
                plz: '',
                country: '',
            },
            rightBlock: {
                date: null,
                orderNr: '',
                projectName: '',
                possibleDelivery: null,
                uid: '',
                consultant: {
                    name: '',
                    phone: '',
                    fax: '',
                    email: ''
                },
                customerId: ''
            },
            upperTextBlock: {
                orderName: '',
                salutation: '',
            },
            prodcuts: null
        };
        this.offer = offer.offer;
        // format the prodcuts into a string array for the table
        offer.prodcuts.forEach(function (p) {
            _this.products.push([p.product.productId.toString(),
                p.product.description, p.amount.toString() + ' Stk.',
                _this.numberFormatter(p.product.price.toFixed(2).toString()) + '€',
                _this.numberFormatter((p.amount * p.product.price).toFixed(2).toString()) + '€']);
            _this.total += (p.amount * p.product.price);
        });
        // fill in all the data in the pdf structrue
        this.initData(offer.offer.customerId, offer.offer.isCompany);
    }
    /*
      MAX PRODUCTS PAGE
  
      FIRST: 15
      EVERY OTHER
      LAST
  
    */
    OfferPdfService.prototype.initData = function (id, isCompany) {
        // rightblock static data
        var user = _profile_UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"].getUser(this.offer.consultantId);
        this.pdfData.rightBlock.date = this.offer.date;
        this.pdfData.rightBlock.orderNr = this.offer.number;
        this.pdfData.rightBlock.projectName = this.offer.projectName;
        this.pdfData.rightBlock.consultant.name = user.fname + ' ' + user.lname;
        this.pdfData.rightBlock.consultant.phone = user.phone;
        this.pdfData.rightBlock.consultant.fax = user.fax;
        this.pdfData.rightBlock.consultant.email = user.email;
        // upperTextBlock static data
        this.pdfData.upperTextBlock.orderName = this.offer.name;
        if (isCompany) {
            var customer = _crm_companylist__WEBPACK_IMPORTED_MODULE_2__["CompanyService"].getCustomer(id);
            // leftblock
            this.pdfData.leftBlock.sentTo = customer.name;
            this.pdfData.leftBlock.street = customer.companyLocation.street;
            this.pdfData.leftBlock.town = customer.companyLocation.plz.concat(' ', customer.companyLocation.town);
            this.pdfData.leftBlock.country = customer.companyLocation.country;
            this.pdfData.leftBlock.plz = customer.companyLocation.plz;
            // rightblock
            this.pdfData.rightBlock.customerId = 'FK-' + this.offer.customerId;
            this.pdfData.rightBlock.uid = this.offer.uid;
            // upperTextBlock
            this.pdfData.upperTextBlock.salutation = 'Sehr geehrtes Team von ' + customer.name + ',\n';
        }
        else {
            var privateCustomer = _crm_customerlist__WEBPACK_IMPORTED_MODULE_4__["CustomerService"].getCustomer(id);
            // leftblock
            this.pdfData.leftBlock.sentTo = privateCustomer.fName;
            this.pdfData.leftBlock.street = privateCustomer.customerLocation.street;
            this.pdfData.leftBlock.town = privateCustomer.customerLocation.plz + ' ' + privateCustomer.customerLocation.town;
            this.pdfData.leftBlock.country = privateCustomer.customerLocation.country;
            // rightblock
            this.pdfData.rightBlock.customerId = 'PK-40000';
            this.pdfData.rightBlock.uid = 'PK-OUID-EVK'; // Private Kunde Ohne UID Einmal VerKauf
            // upperTextBlock
            this.pdfData.upperTextBlock.salutation = 'Sehr geehrte' + (privateCustomer.gender == 'm' ? 'r Herr' : ' Frau') + ' ' + privateCustomer.lName + ',';
        }
        this.fillInData();
        console.dir(this.pdfData);
    };
    // prints a number with commas as thoudsands separators
    OfferPdfService.prototype.numberFormatter = function (num) {
        return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    OfferPdfService.prototype.download = function (name) {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default.a.createPdf(dd).download(name);
    };
    OfferPdfService.prototype.open = function () {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default.a.createPdf(dd).open();
    };
    OfferPdfService.prototype.create = function () {
        console.dir(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default.a.createPdf(dd));
        return pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default.a.createPdf(dd);
    };
    OfferPdfService.prototype.fillInData = function () {
        dd = {
            content: [
                // powersolar image
                {
                    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAChCAMAAAAGPL1IAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMAUExURenp6fsAXPQoet7e3oeHhwAAANbW1v///6632f5loeHh4RYWFri4uCVCotnZ2fzo8/nH3oODg+bm5mRkZPz8/FdXDrW1tXeFu2hoD8/Pz4yYxfiWw5ulxry8vCwsDPZZmf//BsnJyejoDUNDQ/VxqYmJibKysvT2+u7u7tjXDP7+Cvr6+o2Njf6GtVJSUq2trSwsLP4AX/Y1gkpKStHR0TdRrOjq8/f3+Ghoaf//A9TX6MDAwKWlpfrc65GRkaCgoH5+fllZWpaWlsTExKioqHFxcZycnTo6O/70+fX19ZmZmXh4eWFhYW5ubl1dXezs7PLy8nV1dVVVVWd3tvrS5SIiI/Dw8EdgsvdAiv77/ZWj0qGgDvPz8/aSvTIyMvJinP+ixcLCwsLCDvrM4R48of8AY/hMkx47o8nO4f//AZSUEfX1Cvu92vi11JycD/ocdb6+EPqqzcnIELi3EImJEICNv/ri7kNZrPkUbv6JtgsLC8fHx9/k8dnZEYGBEDFLpsHH3/oAYLnA2P3v9R47pPm32Pq6109PT/kLaKmoEPqkyfSFsvh9rx8eC//9/nR0EPYAXvwBZuDgDf74+150uk1ND8/T4vwAYvHy99/h7Flrs/qLuCI/ohw6o/kBZO6Pt/WMufvX6PS/1VZprfanyu/w9vwCZj4+P1FRVfYKYgQEBR08pP78/R06oA0NFF9fYDY2N6urq2dnZ0ZGRnNzcx47oScnKP8AZm9vb1dXV/fA2ZSUlPgHZcHBwR0dHvkDYvaItwkJCExMTB87nhs4ow8PCU1NTR87of4BZv8AZ/4AZv4BZ/4AZx47oB86ov8BZvT0+P39/QgHDBEREvj5+x87oHx8fPv7EP4CZ9zc3P8BaPn6/AcHBxo3oPYOaBw8o/kPa+Pj405isUxMTvzf7o+Pj+/vC9TU1Bw5ooaGiOtPje5VksvLy8zMzLCwsM/PENjY2C4uLvj4CouLi2tra/ewzvsHaEA/DrCwEfj2DHd3dw8PDsPDw/mv0Hp6ev///3JDj74AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAkcUlEQVR42u2dC1xU1534gWHQzBB0YCSSZBSCshOG8HDMApXAAIqCyCuBakJIrYxTk7bGvHRhoyGxJU0DDTHJ/NPEtOkDdsc0IAiEUMlyu47j+CrSZcsubUM3xvL/i9HI1nyC9e4593Hu+84dwP1nhvmlxZk7d+7cc77n/M7v9zu/c24QHhAJeW/Rh7+4ZQWUW1Z8eN8LflSyoABcUTmw7V82//qVBncaFHtr8K/3LL/jgWb/gv7GndKycOHC57725m/18wj5hl+ENKRZ3W5XLyFu+H9rWsP2D5v9CfqD/7pfSmwHuw/96je37tv949se/Npv54Ve3xXS8PuzvQI5YW/YvniLH0E/Y5OS2tra7m7bcdv+g7ba39x723Pp/s78vs0NrpaWXhFxtVjT/u8z/gP937o9iI34c/x47e47f+fXzP+2x+3ulRbrzvv8BvrxboVy5uChP3/Lf5Ev+GmwtVdOzp794wPzDnp37fE/vX273zJ/Oc3lkoXe67Lat8076FDL77/t7/wT+sPBZ3s9ivWf75uH0LttB3/+f/yR+bdfafHMvNfl3rlhPkLv3u+P1N99xd2rRFxpK+YhdCD77/e/kEyItdeliHpv8APzEvrxWn+z5hZsTzuhFLp1c/N8hA6wP+df0D9p+H2vUjkVvHh+Qj+0+5f+1dGtipn3ulo3L5iX0G37n/avjv4fArYtVuvJFqu7pfWk4CNfdtZnAb12/61v+hH0lwUd3WptWLXillseWfWiXagEWpf7IfTj9IRLN5xwEZPT3X/wI1vuQAjXRXe5rB/fcd8B+NGWT76zuaGF7835sK8uAd1We+u+e4n/bn2722b7kzh3mx919W0fcaC7TlpDWPNpW3YF88I27oYP/a6n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',
                    width: 200,
                    style: 'right'
                },
                // powersolar block text
                {
                    text: 'Angebot',
                    style: 'blockHeader'
                },
                {
                    text: 'Powersolar' +
                        '\nRitzlhofstraße 28' +
                        '\nTel +43-7229-81800',
                    style: 'block'
                },
                {
                    text: 'office@power-solar.at',
                    link: 'office@power-solar.at',
                    style: 'link'
                },
                {
                    text: 'https://www.power-solar.at',
                    link: 'https://www.power-solar.at',
                    style: 'link'
                },
                // customer block text
                {
                    text: this.pdfData.leftBlock.sentTo
                },
                {
                    text: this.pdfData.leftBlock.town
                },
                {
                    text: this.pdfData.leftBlock.street
                },
                {
                    text: this.pdfData.leftBlock.country
                },
                // order data
                {
                    columns: [
                        { width: '*', text: '' },
                        {
                            width: 'auto',
                            fontSize: '10',
                            table: {
                                body: [
                                    [
                                        {
                                            text: 'Angebotsinformationen',
                                            border: [true, true, false, true],
                                            fillColor: '#cccccc'
                                        },
                                        {
                                            text: '',
                                            border: [false, true, true, true],
                                            fillColor: '#cccccc'
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Angebotsnummer',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.orderNr,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Datum',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: _tools_dateFormatter__WEBPACK_IMPORTED_MODULE_3__["DateFormatter"].getDateAsString(this.pdfData.rightBlock.date),
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Kundennummer',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.customerId,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Anfrage',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.projectName,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Mögl. Liefertermin',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: _tools_dateFormatter__WEBPACK_IMPORTED_MODULE_3__["DateFormatter"].getDateAsString(this.pdfData.rightBlock.possibleDelivery),
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'UID Nummer',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.uid,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Sachbearbeiter/-in',
                                            border: [true, true, false, true],
                                            fillColor: '#cccccc'
                                        },
                                        {
                                            text: '',
                                            border: [false, true, true, true],
                                            fillColor: '#cccccc',
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Name',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.consultant.name,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Telefon',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.consultant.phone,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Fax',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.consultant.fax,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'E-Mail',
                                            border: [true, false, false, false]
                                        },
                                        {
                                            text: this.pdfData.rightBlock.consultant.email,
                                            border: [false, false, true, false]
                                        }
                                    ],
                                    [
                                        {
                                            text: 'Gültigkeit ',
                                            border: [true, false, false, true]
                                        },
                                        {
                                            text: '2 Monate ab Erstellung',
                                            border: [false, false, true, true]
                                        }
                                    ],
                                ]
                            },
                        }
                    ]
                },
                // customer salutation
                {
                    text: 'Angebot an ' + this.pdfData.upperTextBlock.orderName,
                    style: 'bold'
                },
                {
                    text: this.pdfData.upperTextBlock.salutation,
                    style: 'smallTopGap'
                },
                {
                    text: 'Herzlichen Dank für Ihr Intersse. Wie besprochen, erlauben wir uns Ihnen unverbindlich folgende Positionen anzubieten:',
                    style: 'smallTopGap'
                },
                {
                    style: 'productTable',
                    table: {
                        headerRows: 1,
                        widths: ['10%', '30%', '20%', '20%', '20%'],
                        body: this.products
                    },
                    layout: 'headerLineOnly'
                },
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 5,
                            x2: 515, y2: 5,
                            lineWidth: 1
                        }
                    ]
                },
                {
                    style: 'productTable',
                    table: {
                        headerRows: 1,
                        widths: ['20%', '20%', '20%', '20%', '20%'],
                        body: [
                            // header defintion
                            [
                                '',
                                '',
                                '',
                                'Summe',
                                this.numberFormatter(this.total.toFixed(2).toString()) + '€'
                            ],
                        ]
                    },
                    layout: 'noBorders'
                },
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 0, y1: 5,
                            x2: 515, y2: 5,
                            lineWidth: 1
                        }
                    ]
                },
                {
                    style: 'productTable',
                    table: {
                        headerRows: 1,
                        widths: ['20%', '20%', '20%', '20%', '20%'],
                        body: [
                            // header defintion
                            [
                                '',
                                '',
                                '',
                                'Ust',
                                this.numberFormatter((this.total * 0.16).toFixed(2)) + '€'
                            ],
                            // the rows todo add the products dynamically
                            ['', '', '', 'Brutto', this.numberFormatter((this.total * 1.16).toFixed(2).toString()) + '€']
                        ]
                    },
                    layout: 'noBorders'
                },
                {
                    canvas: [
                        {
                            type: 'line',
                            x1: 370, y1: 5,
                            x2: 515, y2: 5,
                            lineWidth: 1
                        }
                    ]
                },
                {
                    text: '\nWir würden uns freuen Ihren Auftrag zu erhalten. Bei Fragen zögern Sie nicht uns zu kontaktieren.\n' +
                        'Mit freundlichen Grüßen\n\n' + this.pdfData.rightBlock.consultant.name
                },
                {
                    text: 'POWER SOLAR Wärmetauscher AUSTRIA · Ritzlhofstrasse 28 · Österreich 4052 Ansfelden' +
                        '\nUID-Nummer : ATU 69449849',
                    style: 'footer'
                }
            ],
            styles: {
                right: {
                    alignment: 'right'
                },
                footer: {
                    fontSize: 8,
                    alignment: 'center',
                    margin: 20
                },
                productTable: {
                    margin: [0, 5, 0, 0],
                    alignment: 'right',
                },
                link: {
                    margin: [330, 0, 0, 0],
                    color: 'blue',
                    decoration: 'underline'
                },
                blockHeader: {
                    fontSize: 14,
                    alignment: 'left',
                    margin: [330, 10, 0, 0]
                },
                block: {
                    fontSize: 12,
                    alignment: 'left',
                    margin: [330, 0, 0, 0]
                },
                header: {
                    fontSize: 18,
                    bold: true
                },
                bold: {
                    bold: true
                },
                subheader: {
                    fontSize: 15,
                    bold: true
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 8
                },
                smallTopGap: {
                    margin: [0, 10]
                }
            }
        };
    };
    return OfferPdfService;
}());

var dd = {};


/***/ }),

/***/ "q+PP":
/*!*********************************************************************************!*\
  !*** ./src/app/components/app/bill/confirmation/list/confirmation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Confirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirmation", function() { return Confirmation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/services/tools/StringShortner */ "Kh+L");
/* harmony import */ var src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/services/bill/OfferService */ "oViW");
/* harmony import */ var src_app_components_services_pdf_bills_PdfService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/services/pdf/bills/PdfService */ "5NdR");
/* harmony import */ var src_models_bill_PdfType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/bill/PdfType */ "2dNW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");















function Confirmation_mat_header_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r24.offer.number);
} }
function Confirmation_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r25.offer.date.toString().substring(0, 10));
} }
function Confirmation_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kunden Nr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r26.offer.customerId);
} }
function Confirmation_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Angebots Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r27.offer.name);
} }
function Confirmation_mat_header_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Postleitzahl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r28.offer.plz);
} }
function Confirmation_mat_header_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r29.offer.town);
} }
function Confirmation_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stra\u00DFe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r30.offer.street);
} }
function Confirmation_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bruttobetrag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r31.offer.bruttoValue);
} }
function Confirmation_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r32.offer.status);
} }
function Confirmation_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ableitungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_32_Template_div_click_1_listener() { var offer_r33 = ctx.$implicit; return offer_r33.offer.stages.offer = !offer_r33.offer.stages.offer; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_32_Template_div_click_2_listener() { var offer_r33 = ctx.$implicit; return offer_r33.offer.stages.order = !offer_r33.offer.stages.order; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_32_Template_div_click_3_listener() { var offer_r33 = ctx.$implicit; return offer_r33.offer.stages.bill = !offer_r33.offer.stages.bill; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_32_Template_div_click_4_listener() { var offer_r33 = ctx.$implicit; return offer_r33.offer.stages.finished = !offer_r33.offer.stages.finished; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var offer_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.offer ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.order ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Angebot wurde " + (offer_r33.offer.stages.order ? "in" : "nicht in") + " Best\u00E4tigung verwandelt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.bill ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Angebot wurde " + (offer_r33.offer.stages.bill ? "in" : "nicht in") + " Rechnung verwandelt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", offer_r33.offer.stages.finished ? "Green" : "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", "Angebot  " + (offer_r33.offer.stages.finished ? "ist" : "ist nicht") + " abgeschlossen");
} }
function Confirmation_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmation_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_35_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var row_r38 = ctx.$implicit; var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.showOffer(row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ansehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_35_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var row_r38 = ctx.$implicit; var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.updateOffer(row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bearbeiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_35_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var row_r38 = ctx.$implicit; var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.deleteOffer(row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "L\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_mat_cell_35_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var row_r38 = ctx.$implicit; var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.downloadPdf(row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r39);
} }
function Confirmation_mat_header_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function Confirmation_mat_row_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
var offers = src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__["OfferService"].getOffers();
var Confirmation = /** @class */ (function () {
    function Confirmation(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        // init the data
        this.displayedColumns = ['number', 'date', 'cId', 'name', 'plz', 'town', 'street', 'brutto', 'status', 'transform', 'actions'];
        this.contextMenuPosition = { x: '0px', y: '0px' };
        // MatPaginator Inputs
        this.length = offers.length;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.dataSource = offers.slice(0, this.pageSize);
        this.pageIndex = 0;
    }
    Confirmation.prototype.goToPage = function ($event) {
        this.length = $event.length;
        this.pageSize = $event.pageSize;
        this.dataSource = offers.slice(this.pageSize * $event.pageIndex, this.pageSize * $event.pageIndex + this.pageSize);
        this.pageIndex = $event.pageIndex;
    };
    Confirmation.prototype.showOffer = function (row) {
        src_app_components_services_pdf_bills_PdfService__WEBPACK_IMPORTED_MODULE_4__["PdfService"].OpenPdf(row, src_models_bill_PdfType__WEBPACK_IMPORTED_MODULE_5__["PdfType"].Offer);
    };
    Confirmation.prototype.updateOffer = function (row) {
        console.dir(row);
        this.route.navigate(['/app/sales/offer/edit'], { state: { mode: 'edit', id: row.offer.number } });
    };
    Confirmation.prototype.addOffer = function () {
        this.route.navigate(['/app/sales/offer/new'], { state: { mode: 'add' } });
    };
    Confirmation.prototype.short = function (string, number) {
        return src_app_components_services_tools_StringShortner__WEBPACK_IMPORTED_MODULE_2__["StringShortener"].Trim(string, number);
    };
    Confirmation.prototype.deleteOffer = function (row) {
        if (confirm('Wollen Sie ' + row.offer.name + ' löschen?')) {
            src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__["OfferService"].deleteOffer(row.offer.number);
            this.length = this.dataSource.length;
            this.dataSource = src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_3__["OfferService"].getOffers();
        }
    };
    Confirmation.prototype.refresh = function () {
        this.dataSource = this.dataSource;
    };
    Confirmation.prototype.downloadPdf = function (row) {
        src_app_components_services_pdf_bills_PdfService__WEBPACK_IMPORTED_MODULE_4__["PdfService"].DownloadPdf(row, src_models_bill_PdfType__WEBPACK_IMPORTED_MODULE_5__["PdfType"].Offer);
    };
    Confirmation.ɵfac = function Confirmation_Factory(t) { return new (t || Confirmation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
    Confirmation.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Confirmation, selectors: [["customer-component"]], viewQuery: function Confirmation_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
        } }, decls: 42, vars: 7, consts: [["id", "content"], [1, "lessons-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "number"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "cId"], ["matColumnDef", "name"], ["matColumnDef", "plz"], ["matColumnDef", "town"], ["matColumnDef", "street"], ["matColumnDef", "brutto"], ["matColumnDef", "status"], ["id", "smallGap", "matColumnDef", "transform"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["id", "addButton", 3, "click"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], ["id", "small", "matTooltipPosition", "above", "matTooltip", "Angebot wurde erstellt", "mat-menu-item", "", 3, "click"], ["id", "small", "matTooltipPosition", "above", "mat-menu-item", "", 3, "matTooltip", "click"], [3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function Confirmation_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Confirmation_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Confirmation_mat_cell_5_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Confirmation_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Confirmation_mat_cell_8_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Confirmation_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Confirmation_mat_cell_11_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Confirmation_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Confirmation_mat_cell_14_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Confirmation_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Confirmation_mat_cell_17_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Confirmation_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Confirmation_mat_cell_20_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Confirmation_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Confirmation_mat_cell_23_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Confirmation_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Confirmation_mat_cell_26_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Confirmation_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, Confirmation_mat_cell_29_Template, 2, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, Confirmation_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, Confirmation_mat_cell_32_Template, 5, 11, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, Confirmation_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, Confirmation_mat_cell_35_Template, 14, 1, "mat-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, Confirmation_mat_header_row_36_Template, 1, 0, "mat-header-row", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, Confirmation_mat_row_37_Template, 1, 0, "mat-row", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Confirmation_Template_button_click_38_listener() { return ctx.addOffer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-paginator", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function Confirmation_Template_mat_paginator_page_41_listener($event) { return ctx.goToPage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex)("pageSizeOptions", ctx.pageSizeOptions);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: [".mat-table[_ngcontent-%COMP%] {\r\n  max-height: 71vh;\r\n  height: 71vh;\r\n  overflow-y: auto;\r\n  overflow-x: auto;\r\n\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  min-height: 100%;\r\n  border-radius: 0px;\r\n}\r\n\r\ndiv.mat-paginator-conatainer[_ngcontent-%COMP%]{\r\n  max-height:1vh;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%]{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 100px !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n#big[_ngcontent-%COMP%]{\r\n  flex: 0 0 200px !important;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n  width: 80vw;\r\n\r\n  position: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  width: 10px;\r\n}\r\n\r\n#cButton[_ngcontent-%COMP%]{\r\n  color: lightgray;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #294B93;\r\n  border-color: #294B93;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  width: 80px;\r\n}\r\n\r\n.mat-menu-item[_ngcontent-%COMP%]{\r\n  font-size: 12pt;\r\n}\r\n\r\n.email[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.email[_ngcontent-%COMP%]:hover{\r\n  color: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th.mat-header-cell.cdk-column-position.mat-column-position[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n}\r\n\r\n#content[_ngcontent-%COMP%]{\r\n  height: 85vh;\r\n  background-color: #424242;\r\n}\r\n\r\n#small[_ngcontent-%COMP%]{\r\n  height: 0px;\r\n  padding: 7px 7px;\r\n  margin-left: 1vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjtFQUl0QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBSUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcclxuICBtYXgtaGVpZ2h0OiA3MXZoO1xyXG4gIGhlaWdodDogNzF2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG5cclxuZGl2Lm1hdC1wYWdpbmF0b3ItY29uYXRhaW5lcntcclxuICBtYXgtaGVpZ2h0OjF2aDtcclxufVxyXG5cclxuLm1hdC1jZWxsLC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuI2JpZ3tcclxuICBmbGV4OiAwIDAgMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgd2lkdGg6IDgwdnc7XHJcblxyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuI2NCdXR0b257XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuI2FkZEJ1dHRvblxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0QjkzO1xyXG4gIGJvcmRlci1jb2xvcjogIzI5NEI5MztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LW1lbnUtaXRlbXtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbi5lbWFpbHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lbWFpbDpob3ZlcntcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuXHJcbnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLm1hdC1oZWFkZXItY2VsbC5jZGstY29sdW1uLXBvc2l0aW9uLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiNjb250ZW50e1xyXG4gIGhlaWdodDogODV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG59XHJcblxyXG4jc21hbGx7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZzogN3B4IDdweDtcclxuICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcblxyXG4iXX0= */"] });
    return Confirmation;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Confirmation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './confirmation.component.html',
                styleUrls: ['./confirmation.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]]
        }] }); })();


/***/ }),

/***/ "q+uM":
/*!***********************************************************!*\
  !*** ./src/app/components/services/prodcut/rawProduct.ts ***!
  \***********************************************************/
/*! exports provided: RawProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawProductService", function() { return RawProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_StringShortner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/StringShortner */ "Kh+L");



var raw = [
    { productId: 1, name: 'ZC-43', description: 'Wärmetauscher', price: 643 },
    { productId: 2, name: 'ZC-44', description: 'Wärmetauscher', price: 431 },
    { productId: 3, name: 'ZC-45', description: 'Wärmetauscher', price: 771 },
    { productId: 4, name: 'ZC-46', description: 'Wärmetauscher', price: 321 },
    { productId: 5, name: 'ZC-47', description: 'Wärmetauscher', price: 871 },
    { productId: 6, name: 'ZC-48', description: 'Wärmetauscher', price: 132 },
    { productId: 7, name: 'ZC-49', description: 'Wärmetauscher', price: 341 },
    { productId: 8, name: 'ZC-50', description: 'Wärmetauscher', price: 131 },
    { productId: 9, name: 'ZC-51', description: 'Wärmetauscher', price: 1432 },
    { productId: 10, name: 'ZC-52', description: 'Wärmetauscher', price: 1341 },
    { productId: 11, name: 'ZC-53', description: 'Wärmetauscher', price: 1144 },
    { productId: 12, name: 'ZC-54', description: 'Wärmetauscher', price: 1295 },
];
var RawProductService = /** @class */ (function () {
    function RawProductService() {
    }
    RawProductService.getAllProducts = function () {
        return raw;
    };
    RawProductService.getProduct = function (id) {
        return raw.filter(function (x) { return x.productId == id; })[0];
    };
    RawProductService.getProductNameList = function () {
        var list = [];
        raw.forEach(function (product) { return list.push({ id: product.productId, string: product.name + ' ' + _tools_StringShortner__WEBPACK_IMPORTED_MODULE_1__["StringShortener"].Trim(product.description, 154) }); });
        return list;
    };
    RawProductService.getProductIdList = function () {
        var list = [];
        raw.forEach(function (product) { return list.push(product.productId); });
        console.dir(list);
        return list;
    };
    RawProductService.getProductFullName = function (id) {
        var item = raw.filter(function (x) { return x.productId == id; })[0];
        if (item != undefined) {
            return item.name + ' ' + item.description;
        }
        return '';
    };
    RawProductService.getProductsById = function (ids) {
        var selectedProducts = [];
        ids.forEach(function (id) {
            selectedProducts.push(raw[id]);
            console.dir(raw[id]);
        });
        console.dir(selectedProducts[0]);
        return selectedProducts;
    };
    RawProductService.ɵfac = function RawProductService_Factory(t) { return new (t || RawProductService)(); };
    RawProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RawProductService, factory: RawProductService.ɵfac, providedIn: 'root' });
    return RawProductService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RawProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "qdFh":
/*!********************************************************************!*\
  !*** ./src/app/components/settings/settings/Settings.component.ts ***!
  \********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/crm/companylist */ "uOvJ");
/* harmony import */ var _services_crm_customerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crm/customerData */ "YKJh");
/* harmony import */ var _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crm/customerlist */ "rh7+");
/* harmony import */ var _services_tools_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tools/dateFormatter */ "R5LB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SettingsComponent_div_27_tr_9_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_27_tr_9_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var c_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.goToShowCustomerPage(c_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_27_tr_9_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var c_r3 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.goToShowCustomerPage(c_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_27_tr_9_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var c_r3 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.goToShowCustomerPage(c_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.fName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.lName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.email);
} }
function SettingsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vorname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nachname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingsComponent_div_27_tr_9_Template, 7, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.customers);
} }
function SettingsComponent_div_28_tr_9_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_28_tr_9_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var c_r9 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.goToShowCompanyPage(c_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_28_tr_9_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var c_r9 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.goToShowCompanyPage(c_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_28_tr_9_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var c_r9 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.goToShowCompanyPage(c_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r9.contactPersons[0].lName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r9.shippingAdress[0].adress);
} }
function SettingsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Firmename");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vertreter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lieferadresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingsComponent_div_28_tr_9_Template, 7, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.companies);
} }
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(route) {
        var _this = this;
        this.route = route;
        this.now = '.';
        this.timer = null;
        this.customers = _services_crm_customerlist__WEBPACK_IMPORTED_MODULE_3__["CustomerService"].getAllCustomers().filter(function (c) { return c.id < 10; });
        this.companies = _services_crm_companylist__WEBPACK_IMPORTED_MODULE_1__["CompanyService"].getData().filter(function (c) { return c.id < 10; });
        this.show = true;
        this.totalCustomers = 100;
        this.newCustomers = 100;
        this.weekDays = ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        this.months = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        this.timer = setInterval(function () {
            _this.now = _services_tools_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["DateFormatter"].getCurrentTimeAsString();
        }, 1000);
        this.totalCustomers = _services_crm_customerData__WEBPACK_IMPORTED_MODULE_2__["TotalCustomerService"].getTotalCustomerAmount();
        this.newCustomers = _services_crm_customerData__WEBPACK_IMPORTED_MODULE_2__["TotalCustomerService"].getNewCustomerAmount();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.now = _services_tools_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["DateFormatter"].getCurrentTimeAsString();
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        // Will remove the timer on component change
        clearInterval(this.timer);
    };
    SettingsComponent.prototype.goToShowCustomerPage = function (id) {
        this.route.navigate(['/app/crm/customer/show'], { state: { mode: 'show', id: id } });
    };
    SettingsComponent.prototype.goToShowCompanyPage = function (id) {
        this.route.navigate(['/app/crm/company/show'], { state: { mode: 'show', id: id } });
    };
    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["Settings-component"]], decls: 37, vars: 6, consts: [[1, "row"], [1, "column"], [1, "big"], [1, "box"], ["id", "changeTop", 3, "click"], [4, "ngIf"], [2, "height", "2vh"], [1, "small"], ["id", "topCustomer-table"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Heute ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Auftr\u00E4ge ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Umsatz ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Rechnung ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_25_listener() { return ctx.show = !ctx.show; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SettingsComponent_div_27_Template, 10, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SettingsComponent_div_28_Template, 10, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Daten ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.now, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Wechseln zu " + (ctx.show ? "Firmen" : "Kunden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Kunden insgesamt : ", ctx.totalCustomers, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Neue Kunden : ", ctx.newCustomers, "");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".left-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    align-content: space-between;\r\n}\r\n\r\n.right-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 14vw;\r\n    top: 0;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n    all: unset;\r\n    background-color: #464646;\r\n    color: white;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n    white-space: normal;\r\n    width: 25vw;\r\n    height: 48vh;\r\n    display: inline-block;\r\n    margin-bottom: 0vh;\r\n    \r\n    padding: 0px;\r\n}\r\n\r\n.big[_ngcontent-%COMP%] {\r\n    height: 55.5vh;\r\n    width: 31.5vw;\r\n    position: absolute;\r\n    float: right;\r\n    right: 0.5vw;\r\n    top: 9vh\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 1vw;\r\n    height: 25.5vh;\r\n    width: 31vw;\r\n    bottom: 8.8vh;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin-top: 1vh;\r\n    margin-left: 0.6vw;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.time[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin-left: 10px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    all: unset;\r\n    margin-top: 1vh;\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 95%;\r\n    max-width: 95%;\r\n    margin: 1vw;\r\n    margin-top: 3vh;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    max-height: 100%;\r\n    height: 98vh;\r\n    margin-bottom: 2vh;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\r\n    border: 0.1vw solid #dddddd;\r\n    text-align: left;\r\n    font-size: 16px;\r\n    font-size: 1.3vw;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    height: 6vh;\r\n    width: 8vw;\r\n    cursor: pointer;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n    background-color: #585252;\r\n}\r\n\r\ndiv.text[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    justify-content: space-around;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 80vw;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-basis: 66%;\r\n    height: 40.1vh;\r\n    flex: 1;\r\n    margin: 0.5vw;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 5vh;\r\n}\r\n\r\n#changeTop[_ngcontent-%COMP%] {\r\n    background-color: #294b93;\r\n    border-color: #294b93;\r\n    color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 28vw;\r\n    margin-top: 1vh;\r\n    margin-left: 1vw;\r\n    border-radius: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07QUFDVjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiU2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5yaWdodC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE0dnc7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgICBhbGw6IHVuc2V0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDY0NjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIGhlaWdodDogNDh2aDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxuICAgIC8qUGFkZGluZyAwcHggdG8gcmVtb3ZlIGNoYW5nZXMgb24gem9vbSovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5iaWcge1xyXG4gICAgaGVpZ2h0OiA1NS41dmg7XHJcbiAgICB3aWR0aDogMzEuNXZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IDAuNXZ3O1xyXG4gICAgdG9wOiA5dmhcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxdnc7XHJcbiAgICBoZWlnaHQ6IDI1LjV2aDtcclxuICAgIHdpZHRoOiAzMXZ3O1xyXG4gICAgYm90dG9tOiA4Ljh2aDtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuZGl2LmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMC42dnc7XHJcbn1cclxuXHJcbmRpdi5jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYWxsOiB1bnNldDtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDF2dztcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogOTh2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCxcclxudGgsXHJcbnRyIHtcclxuICAgIGJvcmRlcjogMC4xdncgc29saWQgI2RkZGRkZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDEuM3Z3O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1MjUyO1xyXG59XHJcblxyXG5kaXYudGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogODB2dztcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtYmFzaXM6IDY2JTtcclxuICAgIGhlaWdodDogNDAuMXZoO1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMC41dnc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogNXZoO1xyXG59XHJcblxyXG4jY2hhbmdlVG9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTRiOTM7XHJcbiAgICBib3JkZXItY29sb3I6ICMyOTRiOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDI4dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59Il19 */"] });
    return SettingsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'Settings-component',
                templateUrl: './Settings.component.html',
                styleUrls: ['./Settings.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "rh7+":
/*!*********************************************************!*\
  !*** ./src/app/components/services/crm/customerlist.ts ***!
  \*********************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var customers = [
    { id: 1, fName: 'Sebi', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 2, fName: 'Chris', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 3, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 4, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 5, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 6, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 7, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 8, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 9, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 10, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 11, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 12, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 13, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 14, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 15, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 16, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 17, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 18, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 19, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 20, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 21, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } },
    { id: 22, fName: 'Christopher', lName: 'Knoll', adress: 'Blümelguberstraße 9', phoneNumber: '06502232281', email: 'c.knoll@gmail.com', gender: 'm', customerLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstr.', country: 'Österreich' } }
];
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.getAllCustomers = function () {
        return customers;
    };
    CustomerService.addPrivatCustomer = function (newCustomer) {
        newCustomer.id = customers.length + 1;
        customers.push(newCustomer);
    };
    CustomerService.getCustomer = function (id) {
        return customers.filter(function (a) { return a.id == id; })[0];
    };
    CustomerService.setCustomer = function (id, newCustomer) {
        var index = customers.indexOf(customers.filter(function (a) { return a.id == id; })[0]);
        customers[index] = newCustomer;
    };
    CustomerService.removeCustomer = function (id) {
        customers = customers.slice(id, id + 1);
    };
    CustomerService.getPrivateCustomerIdList = function () {
        var arr = [];
        customers.forEach(function (c) { return arr.push({ id: c.id, string: c.fName + ' ' + c.lName }); });
        return arr;
    };
    CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(); };
    CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });
    return CustomerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "uOvJ":
/*!********************************************************!*\
  !*** ./src/app/components/services/crm/companylist.ts ***!
  \********************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var companyCustomers = [
    { id: 12265, name: 'ChrisGmbh', uid: '4321234562', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhofstraße 28', country: 'Österreich' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }],
        contactPersons: [
            { id: 1, adress: 'Ritzlhof 28', phoneNumber: '067762390005', email: 'chris@gmx.at', fName: 'Chirstopher', lName: 'Buchberger', companyRank: 'Chef', gender: 'M' },
            { id: 1, adress: 'Limes 24', phoneNumber: '067762390005', email: 'chris.htl@at', fName: 'Chris', lName: 'Buchi', companyRank: 'Schüler', gender: 'M' },
            { id: 1, adress: 'Styrerweg 24', phoneNumber: '067762390005', email: 'chris@rk.at', fName: 'Christoph', lName: 'Herr Buchberger', companyRank: 'Sanitäter', gender: 'M' }
        ] },
    { id: 2, name: 'Autech', uid: '4321234562', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhof 28', country: 'Austria' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }], contactPersons: [{ id: 1, adress: 'KA', phoneNumber: '4940300',
                email: 'egger.gemx.at', fName: 'Hallo', lName: 'Gewinne', companyRank: 'Sales', gender: 'M' }] },
    { id: 3, uid: '4321234562', name: 'Stroptech', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhof 28', country: 'Austria' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }], contactPersons: [{ id: 1, adress: 'KA', phoneNumber: '4940300',
                email: 'chrizzly.gemx.at', fName: 'Hallo', lName: 'Gewinne', companyRank: 'Sales', gender: 'M' }] },
    { id: 4, uid: '4321234562', name: 'BauTech CO', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhof 28', country: 'Austria' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }], contactPersons: [{ id: 1, adress: 'KA', phoneNumber: '4940300',
                email: 'hans.gemx.at', fName: 'Hallo', lName: 'Gewinne', companyRank: 'Sales', gender: 'M' }] },
    { id: 5, uid: '4321234562', name: 'TomTech', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhof 28', country: 'Austria' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }], contactPersons: [{ id: 1, adress: 'KA', phoneNumber: '4940300',
                email: 'wolf.gemx.at', fName: 'Hallo', lName: 'Gewinne', companyRank: 'Sales', gender: 'M' }] },
    { id: 6, uid: '4321234562', name: 'Auernig Syp Gmbh', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhof 28', country: 'Austria' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }], contactPersons: [{ id: 1, adress: 'KA', phoneNumber: '4940300',
                email: 'franz.gemx.at', fName: 'Hallo', lName: 'Gewinne', companyRank: 'Sales', gender: 'M' }] },
    { id: 7, uid: '4321234562', name: 'SchroTech', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhof 28', country: 'Austria' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }], contactPersons: [{ id: 1, adress: 'KA', phoneNumber: '4940300',
                email: 'hans.gemx.at', fName: 'Hallo', lName: 'Gewinne', companyRank: 'Sales', gender: 'M' }] },
    { id: 8, uid: '4321234562', name: 'Stropek Gmbh', companyLocation: { town: 'Ansfelden', plz: '4052', street: 'Ritzlhof 28', country: 'Austria' },
        shippingAdress: [{ adress: 'Vauweg 1' }, { adress: 'Htlweg 1' }], contactPersons: [{ id: 1, adress: 'KA', phoneNumber: '4940300',
                email: 'master.gemx.at', fName: 'Hallo', lName: 'Gewinne', companyRank: 'Sales', gender: 'M' }] },
];
var CompanyService = /** @class */ (function () {
    function CompanyService() {
    }
    CompanyService.getData = function () {
        return companyCustomers;
    };
    CompanyService.addCustomer = function (newCustomer) {
        newCustomer.id = companyCustomers.length + 1;
        companyCustomers.push(newCustomer);
    };
    CompanyService.getCustomer = function (id) {
        return companyCustomers.filter(function (x) { return x.id == id; })[0];
    };
    CompanyService.updateCustomer = function (customer) {
        companyCustomers.find(function (c) { return c.id == customer.id; }) == customer;
    };
    CompanyService.getCompanyCustomerIdList = function () {
        var arr = [];
        companyCustomers.forEach(function (c) { return arr.push({ id: c.id, string: c.name }); });
        return arr;
    };
    CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(); };
    CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
    return CompanyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/dashboard/dashboard.component */ "77hX");
/* harmony import */ var _components_app_crm_company_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app/crm/company/company.component */ "I4fD");
/* harmony import */ var _components_app_crm_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app/crm/customer/customer.component */ "ojiR");
/* harmony import */ var _components_app_bill_offer_listOffer_offer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app/bill/offer/listOffer/offer.component */ "VQNb");
/* harmony import */ var _components_app_products_heatexchanger_heatexchanger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app/products/heatexchanger/heatexchanger.component */ "dCjc");
/* harmony import */ var _components_app_main_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app/main/main/main.component */ "byvr");
/* harmony import */ var _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile/profile.component */ "INSd");
/* harmony import */ var _components_app_crm_customer_customerData_customerData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app/crm/customer/customerData/customerData */ "3YZS");
/* harmony import */ var _components_app_crm_company_companyData_customerData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/app/crm/company/companyData/customerData */ "Z0Hi");
/* harmony import */ var _components_app_products_ProductData_ProductData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/app/products/ProductData/ProductData */ "wnEt");
/* harmony import */ var _components_profile_settings_profileSettings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/settings/profileSettings.component */ "IS7t");
/* harmony import */ var _components_app_bill_offer_offerData_offerData_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/app/bill/offer/offerData/offerData.component */ "za/7");
/* harmony import */ var _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/app/bill/confirmation/list/confirmation.component */ "q+PP");
/* harmony import */ var _components_settings_Main_MainSettings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/settings/Main/MainSettings.component */ "2tP4");
/* harmony import */ var _components_settings_Dashboard_SettingsDashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/settings/Dashboard/SettingsDashboard.component */ "6CLl");
/* harmony import */ var _components_settings_Sales_Sales_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/settings/Sales/Sales.component */ "dEck");


// main






// profile












var routes = [
    { path: 'app', component: _components_app_main_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
        children: [
            { path: 'dashboard', component: _components_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard"], },
            // crm
            // customer
            { path: 'crm/customer', component: _components_app_crm_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["Customer"], },
            { path: 'crm/customer/new', component: _components_app_crm_customer_customerData_customerData__WEBPACK_IMPORTED_MODULE_9__["addCustomer"], },
            { path: 'crm/customer/edit', component: _components_app_crm_customer_customerData_customerData__WEBPACK_IMPORTED_MODULE_9__["addCustomer"], },
            { path: 'crm/customer/show', component: _components_app_crm_customer_customerData_customerData__WEBPACK_IMPORTED_MODULE_9__["addCustomer"], },
            // company
            { path: 'crm/company', component: _components_app_crm_company_company_component__WEBPACK_IMPORTED_MODULE_3__["Company"], },
            { path: 'crm/company/show', component: _components_app_crm_company_companyData_customerData__WEBPACK_IMPORTED_MODULE_10__["addCompanyCustomer"], },
            { path: 'crm/company/edit', component: _components_app_crm_company_companyData_customerData__WEBPACK_IMPORTED_MODULE_10__["addCompanyCustomer"], },
            { path: 'crm/company/new', component: _components_app_crm_company_companyData_customerData__WEBPACK_IMPORTED_MODULE_10__["addCompanyCustomer"], },
            // sales
            { path: 'sales/offer', component: _components_app_bill_offer_listOffer_offer_component__WEBPACK_IMPORTED_MODULE_5__["Offer"], },
            { path: 'sales/offer/show', component: _components_app_bill_offer_offerData_offerData_component__WEBPACK_IMPORTED_MODULE_13__["OfferData"] },
            { path: 'sales/offer/edit', component: _components_app_bill_offer_offerData_offerData_component__WEBPACK_IMPORTED_MODULE_13__["OfferData"] },
            { path: 'sales/offer/new', component: _components_app_bill_offer_offerData_offerData_component__WEBPACK_IMPORTED_MODULE_13__["OfferData"] },
            { path: 'sales/confirmation', component: _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["Confirmation"], },
            { path: 'sales/confirmation/show', component: _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["Confirmation"] },
            { path: 'sales/confirmation/edit', component: _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["Confirmation"] },
            { path: 'sales/confirmation/new', component: _components_app_bill_confirmation_list_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["Confirmation"] },
            // products
            { path: 'products/heatexchanger', component: _components_app_products_heatexchanger_heatexchanger_component__WEBPACK_IMPORTED_MODULE_6__["Heatexchanger"] },
            { path: 'products/heatexchanger/edit', component: _components_app_products_ProductData_ProductData__WEBPACK_IMPORTED_MODULE_11__["HeatexchangerData"] },
            { path: 'products/heatexchanger/show', component: _components_app_products_ProductData_ProductData__WEBPACK_IMPORTED_MODULE_11__["HeatexchangerData"] },
            { path: 'products/heatexchanger/new', component: _components_app_products_ProductData_ProductData__WEBPACK_IMPORTED_MODULE_11__["HeatexchangerData"] }
        ]
    },
    { path: 'settings', component: _components_settings_Main_MainSettings_component__WEBPACK_IMPORTED_MODULE_15__["MainsettingsComponent"],
        children: [
            { path: 'dashboard', component: _components_settings_Dashboard_SettingsDashboard_component__WEBPACK_IMPORTED_MODULE_16__["SettingsdashboardComponent"] },
            { path: 'sales', component: _components_settings_Sales_Sales_component__WEBPACK_IMPORTED_MODULE_17__["SalesComponent"] }
        ] },
    { path: 'profile/user', component: _components_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["Profile"] },
    { path: 'profile/settings', component: _components_profile_settings_profileSettings_component__WEBPACK_IMPORTED_MODULE_12__["ProfileSettings"] },
    { path: '', pathMatch: 'full', redirectTo: 'app/dashboard' },
    { path: '*', redirectTo: 'app/dashboard' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wnEt":
/*!********************************************************************!*\
  !*** ./src/app/components/app/products/ProductData/ProductData.ts ***!
  \********************************************************************/
/*! exports provided: HeatexchangerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatexchangerData", function() { return HeatexchangerData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/services/prodcut/rawProduct */ "q+uM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






var HeatexchangerData = /** @class */ (function () {
    function HeatexchangerData(route, activatedRoute) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.id = undefined;
        this.editMode = false;
        this.showMode = false;
        this.addMode = false;
        this.msg = '';
        this.locked = false;
        this.customer = {
            fName: '',
            lName: '',
            gender: '',
            phone: '',
            email: '',
            location: {
                domicile: '',
                orderAdress: '',
                orderAdressOptional: ''
            }
        };
        this.product = { productId: 0, name: '', description: '', price: 0 };
    }
    //#region All the Init Methods
    HeatexchangerData.prototype.ngOnInit = function () {
        // checks wheter we are in edit or show mode without data passed to the component
        if (history.state.mode == undefined && this.route.url.includes('edit') || history.state.mode == undefined && this.route.url.includes('show')) {
            this.route.navigate(['/app/products/heatexchanger']);
        }
        else {
            if (history.state.mode == 'show') {
                this.locked = true;
                this.initShow();
                this.showMode = true;
            }
            else {
                // set the correct mode
                this.editMode = history.state.mode == 'edit';
                if (this.editMode) {
                    this.initEdit();
                    this.editMode = true;
                }
                else {
                    this.initAdd();
                    this.addMode = true;
                }
            }
        }
    };
    HeatexchangerData.prototype.initShow = function () {
        this.msg = 'Zurück';
        this.locked = true;
        this.id = history.state.id;
        this.product = src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_1__["RawProductService"].getProduct(this.id);
    };
    HeatexchangerData.prototype.initEdit = function () {
        this.msg = 'Bearbeiten';
        this.id = history.state.id;
        this.product = src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_1__["RawProductService"].getProduct(this.id);
    };
    HeatexchangerData.prototype.initAdd = function () {
        this.msg = 'Hinzufügen';
    };
    //#endregion
    // decides what should happen when the green button is pressed
    HeatexchangerData.prototype.doCustomer = function () {
        if (history.state.mode == 'show') {
            this.route.navigate(['/app/products/heatexchanger']);
        }
        else if (this.editMode) {
            this.updateCustomer();
        }
        else {
            this.addCustomer();
        }
    };
    HeatexchangerData.prototype.addCustomer = function () {
    };
    HeatexchangerData.prototype.updateCustomer = function () {
        this.route.navigate(['/app/products/heatexchanger']);
    };
    HeatexchangerData.prototype.mailCustomer = function () {
    };
    HeatexchangerData.prototype.mailAllCustomers = function () {
    };
    HeatexchangerData.ɵfac = function HeatexchangerData_Factory(t) { return new (t || HeatexchangerData)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    HeatexchangerData.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeatexchangerData, selectors: [["customer-component"]], decls: 16, vars: 6, consts: [[1, "block"], ["type", "text", "id", "id", "disabled", "disabled", "name", "fname", "placeholder", "Produktname", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "big-Input", "name", "lname", "placeholder", "Beschreibung", 3, "readonly", "ngModel", "ngModelChange"], ["type", "number", "name", "domicile", "placeholder", "Standard Preis", 3, "readonly", "ngModel", "ngModelChange"], ["type", "submit", 3, "value", "click"]], template: function HeatexchangerData_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Produkt Daten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeatexchangerData_Template_input_ngModelChange_5_listener($event) { return ctx.product.productId = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeatexchangerData_Template_textarea_ngModelChange_7_listener($event) { return ctx.product.description = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Standard Preis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeatexchangerData_Template_input_ngModelChange_13_listener($event) { return ctx.product.price = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeatexchangerData_Template_input_click_15_listener() { return ctx.doCustomer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.product.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.locked)("ngModel", ctx.product.price);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.msg);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n  height: 80vh;\r\n  border-radius: 0px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 10px;\r\n  width: 20%;\r\n  margin: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled{\r\n  background-color: white;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  border-radius: 0px 50px 50px 0px;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #303030 ;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n position: relative;\r\n left: 10px;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #c2185b;\r\n  border-color: #c2185b;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n#big-Input[_ngcontent-%COMP%]{\r\n  width: 50vw;\r\n  height: 20vh;\r\n}\r\n\r\n#button-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding-left: 1vw;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n#id[_ngcontent-%COMP%]{\r\n  width: 5vw;\r\n}\r\n\r\n#row[_ngcontent-%COMP%]{\r\n  float: left;\r\n  position: absolute;\r\n  left: 15vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3REYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoiUHJvZHVjdERhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gIGhlaWdodDogODB2aDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dDpkaXNhYmxlZCxzZWxlY3Q6ZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuZGl2LmJsb2Nre1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwIDtcclxufVxyXG5cclxuZGl2LmJsb2NrIGgxe1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gbGVmdDogMTBweDtcclxufVxyXG5cclxuI2FkZEJ1dHRvblxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxODViO1xyXG4gIGJvcmRlci1jb2xvcjogI2MyMTg1YjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4jYmlnLUlucHV0e1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogMjB2aDtcclxufVxyXG5cclxuI2J1dHRvbi1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4jaWR7XHJcbiAgd2lkdGg6IDV2dztcclxufVxyXG5cclxuI3Jvd3tcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTV2dztcclxufVxyXG5cclxuXHJcbiJdfQ== */", "input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button#form[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\npadding-left: 2vw;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=password][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBYUEsNkJBQTZCOztBQUM3QixnQ0FBZ0M7O0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJmb3Jtcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiNmb3JtIHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5wYWRkaW5nLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdLCBzZWxlY3QsdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDEycHggNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlJlbW92ZSBudW1iZXIgaW5wdXQgYXJyb3dzKi9cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbiJdfQ== */"] });
    return HeatexchangerData;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeatexchangerData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './ProductData.component.html',
                styleUrls: ['./ProductData.component.css', '../../../css/forms.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "za/7":
/*!****************************************************************************!*\
  !*** ./src/app/components/app/bill/offer/offerData/offerData.component.ts ***!
  \****************************************************************************/
/*! exports provided: OfferData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferData", function() { return OfferData; });
/* harmony import */ var src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/services/profile/UserService */ "2BtR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/services/prodcut/rawProduct */ "q+uM");
/* harmony import */ var src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/services/crm/companylist */ "uOvJ");
/* harmony import */ var src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/services/crm/customerlist */ "rh7+");
/* harmony import */ var src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/services/bill/OfferService */ "oViW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function OfferData_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var val_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", val_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](val_r7.string);
} }
function OfferData_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var val_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", val_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](val_r8.string);
} }
function OfferData_div_33_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_div_33_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.consultant.fname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_div_33_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.consultant.lname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_div_33_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.consultant.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_div_33_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.consultant.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_div_33_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.consultant.fax = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.fname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.lname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.consultant.fax);
} }
function OfferData_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r15 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.getProductNameById(option_r15), " ");
} }
function OfferData_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function OfferData_div_45_div_1_Template_input_keydown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.setPrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferData_div_45_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var i_r18 = ctx.index; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.removeProduct(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r18 = ctx.index;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.offerData.prodcuts[i_r18].product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r16.offerData.prodcuts[i_r18].amount * ctx_r16.offerData.prodcuts[i_r18].product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", i_r18 * 5);
} }
function OfferData_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OfferData_div_45_div_1_Template, 11, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.offerData.prodcuts);
} }
var OfferData = /** @class */ (function () {
    function OfferData(route) {
        this.route = route;
        this.locked = false;
        this.consultant = null;
        this.showConsultant = false;
        this.showProducts = true;
        this.msg = 'Do';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__["RawProductService"].getProductIdList();
        this.editMode = false;
        this.offerData = {
            offer: {
                number: 0,
                date: null,
                customerId: 0,
                uid: '',
                projectName: '',
                isCompany: true,
                name: '',
                plz: '',
                town: '',
                street: '',
                bruttoValue: 0,
                status: '',
                possibleDelivery: null,
                consultantId: -1,
                // at start a offer is just a offer it is not transformed yet into anything else
                stages: {
                    offer: '',
                    order: '',
                    bill: '',
                    deliveryNote: '',
                    finished: false,
                    canceld: false,
                }
            },
            prodcuts: []
        };
    }
    OfferData.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
        // consultant init
        this.consultantList = src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_0__["UserService"].getUserNameList();
        // customer init
        this.customerList = src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__["CompanyService"].getCompanyCustomerIdList();
        // get the current mode
        // check if url routing
        if (history.state.mode == undefined && this.route.url.includes('edit')) {
            this.route.navigate(['/app/sales/offer']);
        }
        else {
            this.editMode = history.state.mode == 'edit';
            if (this.editMode) {
                this.initEdit();
                this.editMode = true;
            }
        }
    };
    OfferData.prototype.initEdit = function () {
        console.log(src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].getOffer(history.state.id));
        this.offerData = src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].getOffer(history.state.id);
    };
    OfferData.prototype.doOffer = function () {
        if (this.editMode) {
            src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].updateOffer(this.offerData);
        }
        else {
            this.fillInOffer();
            src_app_components_services_bill_OfferService__WEBPACK_IMPORTED_MODULE_7__["OfferService"].addOffer(this.offerData);
            this.route.navigate(['/app/sales/offer']);
        }
    };
    OfferData.prototype.setPrice = function (event) {
        event.stopPropagation();
    };
    //#region Fill in the Offer Data
    OfferData.prototype.fillInOffer = function () {
        this.offerData.offer.possibleDelivery = new Date(this.offerData.offer.possibleDelivery);
        // brutto value
        this.offerData.offer.bruttoValue = this.getBruttoValue();
        // number --> will be provided by backend
        // status
        this.offerData.offer.status = 'Erstellt';
        // this.offerData.offer.town = this.getTown()
        // uid
        this.offerData.offer.uid = this.getCustomerUID();
        // date of creation
        this.offerData.offer.date = new Date();
    };
    OfferData.prototype.getBruttoValue = function () {
        var sum = 0;
        this.offerData.prodcuts.forEach(function (a) { return sum += a.product.price * a.amount; });
        return sum;
    };
    OfferData.prototype.getTown = function () {
        return 'this.offerData.offer.isCompany ?  CompanyService.getCustomer(this.offerData.offer.customerId).';
    };
    OfferData.prototype.getCustomerUID = function () {
        return this.offerData.offer.isCompany ? src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__["CompanyService"].getCustomer(this.offerData.offer.customerId).uid : 'PK-EK-40000';
    };
    //#endregion
    OfferData.prototype.changeCustomerType = function () {
        this.offerData.offer.isCompany = !this.offerData.offer.isCompany;
        this.customerList = this.offerData.offer.isCompany ? src_app_components_services_crm_companylist__WEBPACK_IMPORTED_MODULE_5__["CompanyService"].getCompanyCustomerIdList() : src_app_components_services_crm_customerlist__WEBPACK_IMPORTED_MODULE_6__["CustomerService"].getPrivateCustomerIdList();
    };
    OfferData.prototype.onCustomerChange = function (val) {
        this.offerData.offer.customerId = val;
    };
    OfferData.prototype.onConsultantChange = function (val) {
        this.offerData.offer.consultantId = val;
        this.consultant = src_app_components_services_profile_UserService__WEBPACK_IMPORTED_MODULE_0__["UserService"].getUser(val);
    };
    OfferData.prototype._filter = function (value) {
        return this.options;
    };
    OfferData.prototype.setProdcutData = function (productId) {
        this.search = '';
        this.offerData.prodcuts.push({ product: src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__["RawProductService"].getProduct(productId), amount: 1 });
    };
    OfferData.prototype.getProductNameById = function (id) {
        return src_app_components_services_prodcut_rawProduct__WEBPACK_IMPORTED_MODULE_4__["RawProductService"].getProductFullName(id);
    };
    OfferData.prototype.removeProduct = function (id) {
        alert(this.offerData.prodcuts[id].product.name);
        console.dir(this.offerData.prodcuts);
        this.offerData.prodcuts.splice(id, 1);
    };
    OfferData.ɵfac = function OfferData_Factory(t) { return new (t || OfferData)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
    OfferData.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OfferData, selectors: [["customer-component"]], decls: 48, vars: 24, consts: [["id", "scroll"], [1, "block"], ["type", "text", "name", "offer", "placeholder", "Anfrage", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", "name", "plz", "placeholder", "Postleitzahl", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", "name", "town", "placeholder", "Ort", 3, "ngModel", "readonly", "ngModelChange"], ["type", "text", "name", "street", "placeholder", "Stra\u00DFe", 3, "ngModel", "readonly", "ngModelChange"], ["readonly", "", "placeholder", "M\u00F6glicher Liefertermin", "name", "possibleDate", "type", "text", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["id", "center-select"], ["id", "customer-button", 3, "click"], ["placeholder", "h", "placeholder", "customerId", "type", "text", 3, "change"], ["hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "h", "placeholder", "Sachbearbeiter", "type", "text", 3, "change"], ["id", "cursor", "matTooltip", "Zeigt oder verdeckt die Sachbearbeiter Daten", 3, "click"], [4, "ngIf"], ["type", "text", "placeholder", "Product w\u00E4hlen", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "optionSelected"], ["auto", "matAutocomplete"], ["id", "cursor", "matTooltip", "Zeigt oder verdeckt die Produkte f\u00FCr dieses Angebot", 3, "click"], ["type", "submit", 3, "value", "click"], [3, "value"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-1", "placeholder", "Vorname", 3, "ngModel", "ngModelChange"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-2", "placeholder", "Nachname", 3, "ngModel", "ngModelChange"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-3", "placeholder", "Telefon Nummer", 3, "ngModel", "ngModelChange"], ["readonly", "", "id", "small", "type", "text", "name", "consultant-4", "placeholder", "E-Mail", 3, "ngModel", "ngModelChange"], ["readonly", "", "type", "text", "id", "small", "name", "consultant-5", "placeholder", "Fax", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "productId", "type", "text", "placeholder", "ID", 3, "ngModel", "name", "keydown"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Name", 3, "ngModel", "name"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Beschreibung", 3, "ngModel", "name"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Preis", 3, "ngModel", "name"], ["readonly", "", "type", "text", "id", "small", "placeholder", "Gesammt Preis", 3, "value", "name"], ["name", "", 3, "click"]], template: function OfferData_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Angebots Informationen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_Template_input_ngModelChange_5_listener($event) { return ctx.offerData.offer.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_Template_input_ngModelChange_6_listener($event) { return ctx.offerData.offer.plz = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_Template_input_ngModelChange_7_listener($event) { return ctx.offerData.offer.town = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_Template_input_ngModelChange_8_listener($event) { return ctx.offerData.offer.street = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OfferData_Template_input_ngModelChange_9_listener($event) { return ctx.offerData.offer.possibleDelivery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-datepicker-toggle", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-datepicker", null, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Kunde");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-button-toggle", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferData_Template_mat_button_toggle_click_17_listener() { return ctx.changeCustomerType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OfferData_Template_select_change_19_listener($event) { return ctx.onCustomerChange($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Kunde ausw\u00E4hlen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OfferData_option_22_Template, 2, 2, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sachbearbeiter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OfferData_Template_select_change_27_listener($event) { return ctx.onConsultantChange($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sachbearbeiter ausw\u00E4hlen");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OfferData_option_30_Template, 2, 2, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferData_Template_mat_icon_click_31_listener() { return ctx.showConsultant = !ctx.showConsultant; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, OfferData_div_33_Template, 6, 5, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Produkte");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-autocomplete", 18, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function OfferData_Template_mat_autocomplete_optionSelected_39_listener($event) { return ctx.setProdcutData($event.option.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, OfferData_mat_option_41_Template, 2, 2, "mat-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-icon", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferData_Template_mat_icon_click_43_listener() { return ctx.showProducts = !ctx.showProducts; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, OfferData_div_45_Template, 2, 1, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferData_Template_input_click_47_listener() { return ctx.doOffer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.name)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.plz)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.town)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.street)("readonly", ctx.locked);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.offerData.offer.possibleDelivery)("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.offerData.offer.isCompany ? "Firmen Kunde" : "Privat Kunde");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customerList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.consultantList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showConsultant ? "visibility" : "visibility_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConsultant);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 22, ctx.filteredOptions));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showProducts ? "visibility" : "visibility_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showProducts);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.msg);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n  height: 80vh;\r\n  border-radius: 0px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 10px;\r\n  width: 20%;\r\n  margin: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled{\r\n  background-color: white;\r\n}\r\n\r\n#cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n#scroll[_ngcontent-%COMP%]{\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  padding-top: 16px;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  border-radius: 0px 50px 50px 0px;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #303030 ;\r\n}\r\n\r\n#center-select[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ndiv.block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n position: relative;\r\n left: 10px;\r\n}\r\n\r\n#customer-button[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  color: black;\r\n  margin-left: 1vw;\r\n}\r\n\r\n#addButton[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 10px;\r\n  background-color: #c2185b;\r\n  border-color: #c2185b;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  float: right;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\ninput#productId[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#name[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#desc[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#price[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\ninput#total[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyRGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJvZmZlckRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gIGhlaWdodDogODB2aDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dDpkaXNhYmxlZCxzZWxlY3Q6ZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNzY3JvbGx7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuZGl2LmJsb2Nre1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwIDtcclxufVxyXG5cclxuI2NlbnRlci1zZWxlY3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXYuYmxvY2sgaDF7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXItYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcblxyXG4jYWRkQnV0dG9uXHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzIxODViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbmlucHV0I3Byb2R1Y3RJZHtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5pbnB1dCNuYW1le1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcbmlucHV0I2Rlc2N7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0I3ByaWNle1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcbmlucHV0I3RvdGFse1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */", "input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button#form[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\npadding-left: 2vw;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=password][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  padding: 12px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBYUEsNkJBQTZCOztBQUM3QixnQ0FBZ0M7O0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJmb3Jtcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiNmb3JtIHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5wYWRkaW5nLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdLCBzZWxlY3QsdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDEycHggNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlJlbW92ZSBudW1iZXIgaW5wdXQgYXJyb3dzKi9cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbiJdfQ== */"] });
    return OfferData;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfferData, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'customer-component',
                templateUrl: './offerData.component.html',
                styleUrls: ['./offerData.component.css', '../../../../css/forms.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map