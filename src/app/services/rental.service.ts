import { Injectable } from '@angular/core';
import {Observable, of, catchError} from 'rxjs';
import {AuthService} from './auth.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {APIResponse} from '../models/api-response.model';
import {Rental} from '../models/rental.model';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private readonly API_URL: string = 'http://localhost:3000/api/v1/rentals';


  constructor(private http: HttpClient, private authService: AuthService) { }

  _handleHttpError = (res: HttpErrorResponse): Observable<APIResponse> => {
    if (res.error.error?.name === 'TokenExpiredError') {
      window.alert('Your session has expired');
      this.authService.logout();
    }

    return of(res.error);
  };

  getAllRentals(
    currentPage: number,
    pageLimit: number
  ): Observable<APIResponse<Rental[]>> {
    return this.http
      .get<APIResponse<Rental[]>>(
        this.API_URL + `?page=${currentPage}&limit=${pageLimit}`
      )
      .pipe(catchError(this._handleHttpError));
  }

  getRentalById(id: string): Observable<APIResponse<Rental>> {
    return this.http
      .get<APIResponse<Rental>>(this.API_URL + id)
      .pipe(catchError(this._handleHttpError));
  }

  createRental(rental: Rental): Observable<APIResponse<Rental>> {
    return this.http
      .post<APIResponse<Rental>>(this.API_URL, rental)
      .pipe(catchError(this._handleHttpError));
  }

  updateRental(rental: Rental): Observable<APIResponse<Rental>> {
    return this.http
      .patch<APIResponse<Rental>>(this.API_URL + rental._id, rental)
      .pipe(catchError(this._handleHttpError));
  }

  deleteRental(rental: Rental): Observable<APIResponse<Rental>> {
    return this.http
      .delete<APIResponse<Rental>>(this.API_URL + rental._id)
      .pipe(catchError(this._handleHttpError));
  }

}
