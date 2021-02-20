import { Injectable, EventEmitter } from '@angular/core';
// import { DrawerComponent } from './drawer/drawer.component';
import { MatSidenav} from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SideNavService {

  nav:any;
  constructor() { }

  public toggle(){
    this.nav.toggle()
  }


}
