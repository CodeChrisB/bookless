import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { TopbarComponent } from './main/topbar/topbar.component';
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { FooterComponent } from './main/footer/footer.component';
import { ViewComponent } from './main/view/view.component';
import { MainComponent } from './main/main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidenavComponent,
    FooterComponent,
    ViewComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
