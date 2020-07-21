import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list.component';
import { MembersListRoutingModule } from './members-list-routing.module';
import { MemberCardModule } from '../member-card/member-card.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    CommonModule,
    MembersListRoutingModule,
    MemberCardModule,
    PaginationModule.forRoot(),
    FormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [MembersListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MembersListModule { }
