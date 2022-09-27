import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';


import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CarsComponent } from './cars/cars.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PickUpFormComponent } from './pick-up-form/pick-up-form.component';
import { FilterComponent } from './filter/filter.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';

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
    CarsListComponent,
    FavouritesComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SuccessMessageComponent,
    ErrorMessageComponent,
    UserSidebarComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
