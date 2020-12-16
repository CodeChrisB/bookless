import { Component, OnInit } from '@angular/core';

@Component({
selector: 'dashboard-component',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {

  public now: String = "."
  timer =null;

  private weekDays=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sontag'];
  private months=['Jänner','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  constructor() {
      this.timer = setInterval(() => {
        this.setTime()
      }, 1000);
  }

  setTime(){
    var date = new Date();
    this.now = this.weekDays[date.getUTCDay()-1]
    this.now += date.toString().substring(7,11)
    this.now+= this.months[date.getUTCMonth()]
    this.now +=date.toString().substring(15,25)
    console.dir(this.now)
  }

ngOnInit(){
  this.setTime()
}

ngOnDestroy() {
  // Will clear when component is destroyed e.g. route is navigated away from.
  clearInterval(this.timer);
}

}
