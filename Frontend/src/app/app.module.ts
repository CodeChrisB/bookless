import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/app/main/topbar/topbar.component';
import { SidenavComponent } from './components/app/main//sidenav/sidenav.component';
import { FooterComponent } from './components/app/main//footer/footer.component';
import { MainComponent } from './components/app/main//main/main.component';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from  '@angular/material/button';
import {Profile} from './components/profile/profile/profile.component';
import { Customer } from './components/app/crm/customer/customer.component';
import { addCustomer } from './components/app/crm/customer/customerData/customerData';
import { Dashboard } from './components/app/dashboard/dashboard.component';
import { Company } from './components/app/crm/company/company.component';
import { addCompanyCustomer } from './components/app/crm/company/companyData/customerData';
import { Heatexchanger } from './components/app/products/heatexchanger/heatexchanger.component';
import { HeatexchangerData } from './components/app/products/ProductData/ProductData';
import { Offer } from './components/app/bill/offer/listOffer/offer.component';
import { ProfileSettings } from './components/profile/settings/profileSettings.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SettingsComponent } from './components/settings/settings/Settings.component';
import { MainsettingsComponent } from './components/settings/Main/MainSettings.component';
import { SettingsdashboardComponent } from './components/settings/Dashboard/SettingsDashboard.component';
import { SettingssidenavComponent } from './components/settings/Sidebar/SettingsSidenav.component';
import { Confirmation } from './components/app/bill/confirmation/list/confirmation.component';
import { TransformComponent } from './components/app/bill/transform/transform.component';
import { SalesComponent } from './components/settings/Sales/Sales.component';
import { SideNavService } from './components/services/tools/SidenavHandler';
import { AddDialog } from './components/app/bill/AddDialog/addDialog.component';
import { TransService } from './components/services/bill/transformService';
import { Bill } from './components/app/bill/Bill/bill.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidenavComponent,
    FooterComponent,
    MainComponent,
    Profile,
    Customer,
    addCustomer,
    Dashboard,
    Company,
    addCompanyCustomer,
    Heatexchanger,
    HeatexchangerData,
    Offer,
    ProfileSettings,
    SettingsComponent,
    MainsettingsComponent,
    SettingsdashboardComponent,
    SettingssidenavComponent,
    Confirmation,
    TransformComponent,
    SalesComponent,
    AddDialog,
    Bill
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    AppRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    FormsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],

  providers: [MatAutocompleteModule,MatDatepickerModule,TopbarComponent,SideNavService,TransService],
  bootstrap: [AppComponent]

})
export class AppModule { }
