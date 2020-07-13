import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { ValueModule } from './value/value.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptorProvider } from './shared/error.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';


export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      AppRoutingModule,
      HttpClientModule,
      BrowserModule,
      NavModule,
      HomeModule,
      ValueModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            allowedDomains: ['localhost:5000'],
            disallowedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   bootstrap: [
      AppComponent
   ],
   providers: [
      ErrorInterceptorProvider,
   ],
   schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
