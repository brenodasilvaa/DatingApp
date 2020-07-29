import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    TimeagoModule.forRoot(),
    FormsModule,
    PaginationModule.forRoot(),
  ],
  declarations: [MessagesComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MessagesModule { }
