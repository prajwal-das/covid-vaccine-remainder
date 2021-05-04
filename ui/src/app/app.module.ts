import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HyAuthModule} from '../features/hy-auth/hy-auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/modules/shared.module';
import {HyAuthGuard} from '../features/hy-auth/services/hy-auth-guard.service';

const appRoutes: Routes = [
  {path: '', canActivate: [HyAuthGuard] , loadChildren: () => import('../features/hy-home/hy-home.module').then(m => m.HyHomeModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    HyAuthModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
