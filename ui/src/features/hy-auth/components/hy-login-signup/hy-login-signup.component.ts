import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'hy-login-signup',
  templateUrl: './hy-login-signup.component.html',
  styleUrls: ['./hy-login-signup.component.scss']
})
export class HyLoginSignupComponent implements OnInit {
  error: any;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  loginGoogle(): any {
    this.authService.googleAuth().then(a => {
      const url = new URL(window.location.href);
      window.location.href = url.protocol + '//' + url.host + '/home';
    });
  }
}
