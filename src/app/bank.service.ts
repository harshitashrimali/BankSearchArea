import { Injectable } from '@angular/core';
import { BankModel, LocationBankModel } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

 
  currentLocationBanks: BankModel[] = []
  allLocationBanks: LocationBankModel[] = []

  constructor(private http: HttpClient) { }

  getBanks(city) {
    return this.http.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`)
  }
}