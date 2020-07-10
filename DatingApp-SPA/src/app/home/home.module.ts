import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RegisterModule } from '../register/register.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
