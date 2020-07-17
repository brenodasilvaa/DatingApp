import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from './member-detail.component';
import { MembersDetailRoutingModule } from './member-detail-routing.module';
import { TabsModule } from 'node_modules/ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  imports: [
    CommonModule,
    MembersDetailRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    TimeagoModule.forRoot()
  ],
  declarations: [MemberDetailComponent]
})
export class MemberDetailModule { }
