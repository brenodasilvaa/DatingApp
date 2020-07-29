import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from './member-detail.component';
import { MembersDetailRoutingModule } from './member-detail-routing.module';
import { TabsModule } from 'node_modules/ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TimeagoModule } from 'ngx-timeago';
import { MemberMessagesModule } from '../member-messages/member-messages.module';

@NgModule({
  imports: [
    CommonModule,
    MembersDetailRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    TimeagoModule.forRoot(),
    MemberMessagesModule
  ],
  declarations: [MemberDetailComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MemberDetailModule { }
