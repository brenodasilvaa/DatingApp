import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberEditComponent } from './member-edit.component';
import { MembersEditRoutingModule } from './member-edit-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FormsModule } from '@angular/forms';
import { PreventUnsavedChanges } from 'src/app/_guards/prevent-unsaved-changes.guard';
import { PhotoEditorModule } from '../photo-editor/photo-editor.module';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  imports: [
    CommonModule,
    MembersEditRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    FormsModule,
    PhotoEditorModule,
    TimeagoModule.forRoot()
  ],
  declarations: [MemberEditComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MemberEditModule { }
