import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HyLoginComponent} from './components/hy-login/hy-login.component';
import {AuthService} from './services/auth.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {HyUserProfileButtonComponent} from './components/hy-user-profile-button/hy-user-profile-button.component';
import {SharedModule} from '../../shared/modules/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {LoaderInterceptor} from '../../shared/modules/services/loader.interceptor';
import {HyAuthGuard} from './services/hy-auth-guard.service';
import {HyAuthButtonDirective} from './directives/hy-auth-button.directive';
import {HyAtUsernameComponent} from './components/hy-at-username/hy-at-username.component';
import {RouterModule, Routes} from '@angular/router';
import { HyLoginSignupComponent } from './components/hy-login-signup/hy-login-signup.component';

const routes: Routes = [
  {
    path: 'login', component: HyLoginSignupComponent
  }
];

@NgModule({
  declarations: [
    HyLoginComponent,
    HyUserProfileButtonComponent,
    HyAuthButtonDirective,
    HyAtUsernameComponent,
    HyLoginSignupComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    AuthService,
    HyAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  exports: [
    HyLoginComponent,
    HyUserProfileButtonComponent,
    HyAuthButtonDirective,
    HyAtUsernameComponent
  ]
})
export class HyAuthModule {
}
