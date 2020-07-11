import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  exports: [NavComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavModule { }
