import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'members', canActivate: [AuthGuard], loadChildren:
    () => import('./members-list/members-list.module').then(m => m.MembersListModule) },
  { path: 'messages', canActivate: [AuthGuard], loadChildren:
    () => import('./messages/messages.module').then(m => m.MessagesModule) },
  { path: 'lists', canActivate: [AuthGuard], loadChildren:
    () => import('./lists/lists.module').then(m => m.ListsModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
