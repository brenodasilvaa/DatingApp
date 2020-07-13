import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from './member-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MemberCardComponent],
  exports: [MemberCardComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MemberCardModule { }
