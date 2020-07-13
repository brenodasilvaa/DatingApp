import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list.component';
import { MembersListRoutingModule } from './members-list-routing.module';
import { MemberCardModule } from '../member-card/member-card.module';

@NgModule({
  imports: [
    CommonModule,
    MembersListRoutingModule,
    MemberCardModule
  ],
  declarations: [MembersListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MembersListModule { }
