import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../modules/material.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
  ],
})
export class PagesModule { }
