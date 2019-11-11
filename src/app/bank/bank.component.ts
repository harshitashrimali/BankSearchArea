import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BankModel } from '../model';
import { MatTableDataSource, MatPaginator } from '@angular/material';



@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  
  @Input() dataSource = new MatTableDataSource()
  @Input() columns: string[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  source = ""
  favouriteBanksIfsc: BankModel[] = []

  constructor(private rtr: Router) { }

  ngOnInit() {
    this.favouriteBanksIfsc = JSON.parse(localStorage.getItem("favouriteBanksIfsc")) || []
    this.source = this.columns.includes("favourite") ? 'home' : 'favourites'
    this.dataSource.paginator = this.paginator;
  }

  getFavourite(element: BankModel): boolean {
    return this.favouriteBanksIfsc.findIndex(f => f.ifsc == element.ifsc) > -1
  }

  setFavourite(set: boolean, element: BankModel) {
    if (set) {
      this.favouriteBanksIfsc.push(element)
    } else {
      let index = this.favouriteBanksIfsc.findIndex(f => f.ifsc == element.ifsc)
      this.favouriteBanksIfsc.splice(index, 1)
    }
    localStorage.setItem("favouriteBanksIfsc", JSON.stringify(this.favouriteBanksIfsc));
  }

  viewBank(id) {
    this.rtr.navigate(["bank", this.source, id])
  }


}
