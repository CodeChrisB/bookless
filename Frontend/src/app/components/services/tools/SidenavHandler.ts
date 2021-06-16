import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SideNavService {

  nav:any;
  constructor() { }

  public toggle(){
    this.nav.toggle()
  }


}
