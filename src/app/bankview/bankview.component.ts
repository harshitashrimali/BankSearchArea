import { Component, OnInit } from '@angular/core';
import { BankModel } from '../model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bankview',
  templateUrl: './bankview.component.html',
  styleUrls: ['./bankview.component.css']
})
export class BankviewComponent  {

   selectedBank: BankModel = new BankModel()
   favourites: BankModel[] = []
   otherFactors = ["address", "city", "district", "ifsc", "state"]

  constructor(public activatedRoute: ActivatedRoute, public rtr: Router, private bank: BankService) {
   this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get("source") == "home") {
     this.selectedBank = this.bank.currentLocationBanks.find(b => b.ifsc == params.get("id"))
     } 
     else {
        this.favourites = JSON.parse(localStorage.getItem("favouriteBanksIfsc")) || []
        this.selectedBank = this.favourites.find(b => b.ifsc == params.get("id"))
    }
  })
 }

  goToHome() {
  this.rtr.navigate([''])
}
}
