import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberEditComponent } from './member-edit.component';
import { MembersEditRoutingModule } from './member-edit-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FormsModule } from '@angular/forms';
import { PreventUnsavedChanges } from 'src/app/_guards/prevent-unsaved-changes.guard';

@NgModule({
  imports: [
    CommonModule,
    MembersEditRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    FormsModule
  ],
  declarations: [MemberEditComponent]
})
export class MemberEditModule { }
