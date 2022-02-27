import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';
import { TokenInterceptorService } from './services/security/token-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Cambiar el local de la app
import localEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, BrowserAnimationsModule,ToastrModule.forRoot({
    progressBar: true,
    timeOut: 5000,
    enableHtml: true,
    preventDuplicates: true,
    progressAnimation:'increasing'
  })],
  providers: [Title, {provide:JWT_OPTIONS, useValue:JWT_OPTIONS},JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: LOCALE_ID, useValue:'es-AR'
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
