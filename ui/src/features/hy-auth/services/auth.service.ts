import {Injectable} from '@angular/core';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject = new Subject<User>();

  userData: User;
  userInfoKey = 'userInfoKey';

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) {

    this.userData = JSON.parse(localStorage.getItem(this.userInfoKey));
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userStr = JSON.stringify(user);
        this.userData = JSON.parse(userStr);
        localStorage.setItem(this.userInfoKey, userStr);
        this.userSubject.next(this.userData);
      } else {
        this.userData = undefined;
        localStorage.setItem(this.userInfoKey, null);
        this.userSubject.next(this.userData);
      }
    });
  }

  signIn(email, password): any {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['home']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email, password): any {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {

      }).catch((error) => {
        window.alert(error.message);
      });
  }

  forgotPassword(passwordResetEmail): any {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }

  get userInfo(): Observable<User> {
    return this.userSubject.asObservable();
  }

  get token(): string {
    return this.isLoggedIn ? this.userData.stsTokenManager.accessToken : undefined;
  }

  get isLoggedIn(): boolean {
    return !!this.userData;
  }

  googleAuth(): any {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  authLogin(provider): any {
    return this.afAuth.signInWithPopup(provider);
  }

  signOut(): any {
    return this.afAuth.signOut().then(() => {
      this.userData = undefined;
      localStorage.removeItem(this.userInfoKey);
      this.userSubject.next(this.userData);
    });
  }
}
