import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NavComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavModule { }
