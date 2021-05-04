import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HyAvatarComponent} from './components/hy-avatar/hy-avatar.component';
import {HyLoaderComponent} from './components/loader/hy-loader.component';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {TimeagoModule} from 'ngx-timeago';
import {HySearchBarComponent} from './components/hy-search-bar/hy-search-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
// import {MatChipsModule} from '@angular/material/chips';
import {HySidenavComponent} from './components/hy-sidenav/hy-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HyTemplateDirective} from './directives/hy-template.directive';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {HyBackButtonComponent} from './components/hy-back-button/hy-back-button.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HyAvatarComponent,
    HyLoaderComponent,
    HySearchBarComponent,
    HySidenavComponent,
    HyTemplateDirective,
    HyBackButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    TimeagoModule.forRoot(),

    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    // MatChipsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    TimeagoModule,
    HyAvatarComponent,
    HyLoaderComponent,
    HySearchBarComponent,
    HySidenavComponent,
    HyTemplateDirective,

    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    // MatChipsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    HyBackButtonComponent
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }]
})
export class SharedModule {
}
