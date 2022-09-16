import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {CarsComponent} from './cars/cars.component';
import {DetailsComponent} from './details/details.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'details', component: DetailsComponent},




]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
