import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../modules/material.module';
import { SharedModule } from '../modules/shared.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FieldHintsComponent } from './field-hints/field-hints.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FieldHintsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ToolbarComponent,
    FieldHintsComponent,
  ],
})
export class ComponentsModule { }
