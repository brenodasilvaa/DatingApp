import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list.component';
import { MembersListRoutingModule } from './members-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MembersListRoutingModule
  ],
  declarations: [MembersListComponent]
})
export class MembersListModule { }
