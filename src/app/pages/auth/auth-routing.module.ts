import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthenticatedGuard],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
