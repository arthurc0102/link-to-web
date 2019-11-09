import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../modules/material.module';
import { SearchComponent } from './search/search.component';
import { FieldErrorsPipe } from '../pipes/field-errors.pipe';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchComponent,
    FieldErrorsPipe,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule { }
