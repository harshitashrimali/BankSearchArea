import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { BankviewComponent } from './bankview/bankview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'bank/:source/:id', component: BankviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
