import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from '../shared/error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
