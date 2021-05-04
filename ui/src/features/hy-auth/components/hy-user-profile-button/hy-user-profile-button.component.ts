import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'hy-user-profile-button',
  templateUrl: './hy-user-profile-button.component.html',
  styleUrls: ['./hy-user-profile-button.component.scss']
})
export class HyUserProfileButtonComponent implements OnInit {

  userInfo: User;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }

  signInWithGoogle(): any {
    this.authService.googleAuth();
  }

  signOut(): any {
    this.authService.signOut().then(d => {
      this.router.navigate(['/login']);
    });
  }
}
