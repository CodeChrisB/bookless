import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private route :Router ) { }

  ngOnInit(): void {
  }

 
  backToHome(){
    alert('dfs')
    this.route.navigate(['/']);
 }
}
