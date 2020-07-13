import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberEditComponent } from './member-edit.component';
import { PreventUnsavedChanges } from 'src/app/_guards/prevent-unsaved-changes.guard';


const routes: Routes = [
  {
    path: '', component: MemberEditComponent, canDeactivate: [PreventUnsavedChanges]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PreventUnsavedChanges]
})
export class MembersEditRoutingModule { }
