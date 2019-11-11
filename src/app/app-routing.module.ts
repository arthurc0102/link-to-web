import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: 'app',
    component: SidenavComponent,
    children: [
      { path: 'search', component: SearchComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/app/search' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
