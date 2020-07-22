import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { ListRoutingModule } from './lists-routing.module';
import { MemberCardModule } from '../members/member-card/member-card.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    CommonModule,
    MemberCardModule,
    PaginationModule.forRoot(),
    FormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ListsComponent]
})
export class ListsModule { }
