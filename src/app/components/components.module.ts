import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../modules/material.module';
import { SharedModule } from '../modules/shared.module';

@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ToolbarComponent,
  ],
})
export class ComponentsModule { }
