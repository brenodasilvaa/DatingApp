import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberMessagesComponent } from './member-messages.component';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TimeagoModule.forRoot(),
    FormsModule
  ],
  declarations: [MemberMessagesComponent],
  exports: [MemberMessagesComponent]
})
export class MemberMessagesModule { }
