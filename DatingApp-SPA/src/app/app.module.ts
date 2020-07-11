import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { ValueModule } from './value/value.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptorProvider } from './shared/error.interceptor';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      NavModule,
      HomeModule,
      ValueModule
   ],
   bootstrap: [
      AppComponent
   ],
   providers: [
      ErrorInterceptorProvider
   ],
   schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
