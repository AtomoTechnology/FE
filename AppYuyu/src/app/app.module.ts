import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';
import { TokenInterceptorService } from './services/security/token-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [
    Title,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
=======
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, BrowserAnimationsModule],
  providers: [Title, {provide:JWT_OPTIONS, useValue:JWT_OPTIONS},JwtHelperService,
>>>>>>> 6e1032213ed0650c4ae6c1430e5f48dbf6754b24
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
