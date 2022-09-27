import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {CarsComponent} from './cars/cars.component';
import {DetailsComponent} from './details/details.component';
import {UserListComponent} from './user-list/user-list.component';
import {CarsListComponent} from './cars-list/cars-list.component';
import {CarFormComponent} from './components/car-form/car-form.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ReviewFormComponent} from './review-form/review-form.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'users', component: UserListComponent},
  {path: 'cars-list', component: CarsListComponent},
  {path: 'car-form', component: CarFormComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'review-form', component: ReviewFormComponent},










]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
