import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Table {
  name: string;
  id: number;
  company: string;
}


const ELEMENT_DATA = [
  {position: 1, name: 'Chris', company: 'Firma1'},
  {position: 2, name: 'Marc', company: 'Firma1'},
  {position: 3, name: 'Lilli', company: 'Firma1'},
  {position: 4, name: 'Betty', company: 'Firma1'},
  {position: 5, name: 'Bonny', company: 'Firma1'},
  {position: 6, name: 'Carlo', company: 'Firma1'},
  {position: 7, name: 'Nina', company: 'Firma1'},
  {position: 8, name: 'Otto', company: 'Firma1'},
  {position: 9, name: 'Fiona', company: 'Firma1'},
  {position: 10, name: 'Niki', company: 'Firma1'}
];

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent  {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'company'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


}
