import { Component, OnInit } from '@angular/core';
import { BankModel, LocationBankModel } from '../model';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location: string = "MUMBAI"
  tableLoader = false
  columns: string[] = ['bank_name', 'branch', 'city', 'district', 'ifsc', 'state', 'favourite'];
  dataSource = new MatTableDataSource()

  constructor(private service: BankService, private rtr: Router) { }

  ngOnInit() {
    this.getAllBanks();
  }

  changeLocation(value) {
    this.location = value
    this.getAllBanks()
  }

  getAllBanks() {
    this.tableLoader = true
    let index = this.service.allLocationBanks.findIndex(l => l.location == this.location)
    if (index > -1) {
      this.setBankDetails(this.service.allLocationBanks[index].banks.map(b => Object.assign({}, b)))
    } else {
      this.service.getBanks(this.location).subscribe((res: BankModel[]) => {
        this.setBankDetails(res);
        let locationWithBanks = new LocationBankModel()
        locationWithBanks.banks = this.service.currentLocationBanks.map(b => Object.assign({}, b))
        locationWithBanks.location = this.location
        this.service.allLocationBanks.push(locationWithBanks)
      })
    }
  }

  private setBankDetails(res: BankModel[]) {
    this.dataSource = new MatTableDataSource(res)
    this.service.currentLocationBanks = res.map(b => Object.assign({}, b))
    setTimeout(() => {
      this.tableLoader = false
    }, 0);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
