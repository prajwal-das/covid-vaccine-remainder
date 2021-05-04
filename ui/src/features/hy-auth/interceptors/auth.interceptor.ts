import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('api') && this.authenticationService.isLoggedIn) {
      request = request.clone({
        url: `${environment.baseUrl}${request.url}`,
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.token}`
        }
      });
    } else {
      request = request.clone({
        url: `${environment.baseUrl}${request.url}`,
      });
    }

    return next.handle(request);
  }
}
