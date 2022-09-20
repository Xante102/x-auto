import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { catchError, of } from 'rxjs';
import {APIResponse} from '../models/api-response.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL: string = 'http://localhost:3000/api/v1/users';

  constructor(private http: HttpClient, private authService: AuthService) { }

  _handleHttpError = (res: HttpErrorResponse): Observable<APIResponse> => {
    if (res.error.error?.name === 'TokenExpiredError') {
      window.alert('Your session has expired');
      this.authService.logout();
    }

    return of(res.error);
  };

  getAllUsers(
    currentPage: number,
    pageLimit: number
  ): Observable<APIResponse<User[]>> {
    return this.http
      .get<APIResponse<User[]>>(
        this.API_URL + `?page=${currentPage}&limit=${pageLimit}`
      )
      .pipe(catchError(this._handleHttpError));
  }

  getUserById(id: string): Observable<APIResponse<User>> {
    return this.http
      .get<APIResponse<User>>(this.API_URL + id)
      .pipe(catchError(this._handleHttpError));
  }

  createUser(user: User): Observable<APIResponse<User>> {
    return this.http
      .post<APIResponse<User>>(this.API_URL, user)
      .pipe(catchError(this._handleHttpError));
  }

  updateUser(user: User): Observable<APIResponse<User>> {
    return this.http
      .patch<APIResponse<User>>(this.API_URL + user._id, user)
      .pipe(catchError(this._handleHttpError));
  }

  deleteUser(user: User): Observable<APIResponse<User>> {
    return this.http
      .delete<APIResponse<User>>(this.API_URL + user._id)
      .pipe(catchError(this._handleHttpError));
  }

}
