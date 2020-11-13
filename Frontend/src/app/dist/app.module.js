"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var checkbox_1 = require("@angular/material/checkbox");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var topbar_component_1 = require("./main/topbar/topbar.component");
var sidenav_component_1 = require("./main/sidenav/sidenav.component");
var footer_component_1 = require("./main/footer/footer.component");
var view_component_1 = require("./main/view/view.component");
var main_component_1 = require("./main/main/main.component");
var input_1 = require("@angular/material/input");
var autocomplete_1 = require("@angular/material/autocomplete");
var datepicker_1 = require("@angular/material/datepicker");
var form_field_1 = require("@angular/material/form-field");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var slider_1 = require("@angular/material/slider");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var menu_1 = require("@angular/material/menu");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var list_1 = require("@angular/material/list");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var stepper_1 = require("@angular/material/stepper");
var tabs_1 = require("@angular/material/tabs");
var expansion_1 = require("@angular/material/expansion");
var button_toggle_1 = require("@angular/material/button-toggle");
var chips_1 = require("@angular/material/chips");
var icon_1 = require("@angular/material/icon");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var progress_bar_1 = require("@angular/material/progress-bar");
var dialog_1 = require("@angular/material/dialog");
var tooltip_1 = require("@angular/material/tooltip");
var snack_bar_1 = require("@angular/material/snack-bar");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var http_1 = require("@angular/common/http");
var button_1 = require("@angular/material/button");
var profile_component_1 = require("./components/profile/profile.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                topbar_component_1.TopbarComponent,
                sidenav_component_1.SidenavComponent,
                footer_component_1.FooterComponent,
                view_component_1.ViewComponent,
                main_component_1.MainComponent,
                profile_component_1.Profile
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                checkbox_1.MatCheckboxModule,
                button_1.MatButtonModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                input_1.MatInputModule,
                autocomplete_1.MatAutocompleteModule,
                datepicker_1.MatDatepickerModule,
                form_field_1.MatFormFieldModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                slider_1.MatSliderModule,
                slide_toggle_1.MatSlideToggleModule,
                menu_1.MatMenuModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                list_1.MatListModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                stepper_1.MatStepperModule,
                tabs_1.MatTabsModule,
                forms_1.FormsModule,
                expansion_1.MatExpansionModule,
                button_toggle_1.MatButtonToggleModule,
                chips_1.MatChipsModule,
                icon_1.MatIconModule,
                progress_spinner_1.MatProgressSpinnerModule,
                progress_bar_1.MatProgressBarModule,
                dialog_1.MatDialogModule,
                tooltip_1.MatTooltipModule,
                snack_bar_1.MatSnackBarModule,
                table_1.MatTableModule,
                sort_1.MatSortModule,
                paginator_1.MatPaginatorModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
