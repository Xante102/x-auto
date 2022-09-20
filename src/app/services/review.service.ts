import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {of, catchError, Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {APIResponse} from '../models/api-response.model';
import {Review} from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private readonly API_URL: string = 'http://localhost:3000/api/v1/reviews';

  constructor(private http: HttpClient, private authService: AuthService) { }

  _handleHttpError = (res: HttpErrorResponse): Observable<APIResponse> => {
    if (res.error.error?.name === 'TokenExpiredError') {
      window.alert('Your session has expired');
      this.authService.logout();
    }

    return of(res.error);
  };

  getAllReviews(
    currentPage: number,
    pageLimit: number
  ): Observable<APIResponse<Review[]>> {
    return this.http
      .get<APIResponse<Review[]>>(
        this.API_URL + `?page=${currentPage}&limit=${pageLimit}`
      )
      .pipe(catchError(this._handleHttpError));
  }

  getReviewById(id: string): Observable<APIResponse<Review>> {
    return this.http
      .get<APIResponse<Review>>(this.API_URL + id)
      .pipe(catchError(this._handleHttpError));
  }

  createReview(review: Review): Observable<APIResponse<Review>> {
    return this.http
      .post<APIResponse<Review>>(this.API_URL, review)
      .pipe(catchError(this._handleHttpError));
  }

  updateReview(review: Review): Observable<APIResponse<Review>> {
    return this.http
      .patch<APIResponse<Review>>(this.API_URL + review._id, review)
      .pipe(catchError(this._handleHttpError));
  }

  deleteReview(review: Review): Observable<APIResponse<Review>> {
    return this.http
      .delete<APIResponse<Review>>(this.API_URL + review._id)
      .pipe(catchError(this._handleHttpError));
  }

}
