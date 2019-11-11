import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  
  dataSource = new MatTableDataSource()
  columns: string[] = ['bank_name', 'branch', 'city', 'district', 'ifsc', 'state'];
  constructor(private rtr: Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem("favouriteBanksIfsc")) || [])
  }

  goToHome() {
    this.rtr.navigate([''])
  }
}
