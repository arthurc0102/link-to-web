import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../modules/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
})
export class ComponentsModule { }
