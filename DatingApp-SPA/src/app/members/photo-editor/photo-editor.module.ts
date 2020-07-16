import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoEditorComponent } from './photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule
  ],
  declarations: [PhotoEditorComponent],
  exports: [PhotoEditorComponent]
})
export class PhotoEditorModule { }
