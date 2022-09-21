import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, tap } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {APIResponse} from '../models/api-response.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL: string = 'http://localhost:3000/api/v1/users';

  isLoggedIn: boolean = false;
  authToken?: string;

  expiresAt?: Date;

  constructor(private http: HttpClient, private router: Router) {
    this.autoLogin();
    this.autoLogout();
  }

  login(data:any): Observable<APIResponse<User & string & Date>> {
    return this.http.post<APIResponse>(this.API_URL + '/login', data).pipe(
      tap((res) => {
        console.log(res);
        if (res.status === 'success') {
          this.isLoggedIn = true;
          this.authToken = res['token']!;
          this.expiresAt = res.data!['expiresIn'];

          this.saveToken(this.authToken, this.expiresAt);
          this.autoLogout();
        }
      })
    );
  }

  signup(data:any): Observable<APIResponse<User & string & Date>> {
    return this.http.post<APIResponse>(this.API_URL + '/sign-up', data).pipe(
      tap((res) => {
        console.log(res)
        if (res.status === 'success') {
          this.isLoggedIn = true;
          this.authToken = res['token']!;
          this.expiresAt = res.data!['expiresIn'];
          this.saveToken(this.authToken, this.expiresAt);
           this.autoLogout();
        }
      })
    );
  }

  logout(){
    this.isLoggedIn = false;
    this.authToken = undefined;


    localStorage.removeItem('authToken');
    localStorage.removeItem('expiresAt');

    this.router.navigate(['/login']);
  }

  private autoLogout(): void {
      let dateFromStorage = localStorage.getItem('expiresAt');
      if(!this.expiresAt && !dateFromStorage) return;

      this.expiresAt = new Date(this.expiresAt!) || new Date(dateFromStorage!);

      setTimeout(() => {
        this.logout();
      }, this.expiresAt.getTime());

  }

  private autoLogin():void {
    let authToken = localStorage.getItem('authToken');

    if (authToken) {
      this.isLoggedIn = true;
      this.authToken = authToken;
    }
  }

  private saveToken(token:string, expiresAt: Date): void {
    localStorage.setItem('authToken', token)
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt));
  }

}
