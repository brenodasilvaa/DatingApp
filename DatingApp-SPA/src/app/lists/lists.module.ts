import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { ListRoutingModule } from './lists-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [ListsComponent]
})
export class ListsModule { }
