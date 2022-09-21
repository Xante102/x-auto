import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(): void {
    this.authService.signup(this.data).subscribe(res => {
      if (res.status === 'success') {
        this.router.navigateByUrl('/');
      }
    });
  }
}
