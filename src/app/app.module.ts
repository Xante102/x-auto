import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';


import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CarsComponent } from './cars/cars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarFormComponent } from './car-form/car-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PickUpFormComponent } from './pick-up-form/pick-up-form.component';
import { FilterComponent } from './filter/filter.component';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent,
    DetailsComponent,
    CarsComponent,
    NavbarComponent,
    FooterComponent,
    CarFormComponent,
    UserListComponent,
    ReviewFormComponent,
    LoginComponent,
    SignUpComponent,
    PickUpFormComponent,
    FilterComponent,
    CarsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
