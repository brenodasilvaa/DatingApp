import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueComponent } from './value.component';

@NgModule({
  declarations: [ValueComponent],
  imports: [
    CommonModule
  ],
  exports: [ValueComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ValueModule { }
