import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {HyLoginComponent} from '../components/hy-login/hy-login.component';

@Directive({
  selector: '[hyAuthButton]'
})
export class HyAuthButtonDirective {

  @Output()
  public clicked = new EventEmitter();

  constructor(public authService: AuthService,
              public dialog: MatDialog) {
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event): any {
    if (this.authService.isLoggedIn) {
      this.success(event);
    } else {
      this.openLoginDialog(event);
    }
  }

  success(event: any): any {
    if (this.clicked) {
      this.clicked.emit(event);
    }
  }

  openLoginDialog(event: any): any {
    const dialogRef = this.dialog.open(HyLoginComponent);

    dialogRef.afterClosed().subscribe(discussionObject => {
      if (this.authService.isLoggedIn) {
        this.success(event);
      }
    });
  }
}
