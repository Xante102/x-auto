import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void { 
    this.authService.login(this.creds).subscribe(res => {
      if (res.status === 'success') {
        this.router.navigateByUrl('/');
      }
    });
  }

}
