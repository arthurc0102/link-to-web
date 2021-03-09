import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../modules/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    SidenavComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class ComponentsModule { }
