import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'hy-login',
  templateUrl: './hy-login.component.html',
  styleUrls: ['./hy-login.component.scss']
})
export class HyLoginComponent implements OnInit {
  error: any;

  constructor(public authService: AuthService,
              public matDialogRef: MatDialogRef<HyLoginComponent>) {
  }

  ngOnInit(): void {
  }

  loginGoogle(): any {
    this.authService.googleAuth().then(a => {
      this.matDialogRef.close();
    });
  }
}
