import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../modules/material.module';
import { SearchComponent } from './search/search.component';
import { FieldErrorsPipe } from '../pipes/field-errors.pipe';
import { RedirectComponent } from './redirect/redirect.component';
import { ShortenComponent } from './shorten/shorten.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchComponent,
    FieldErrorsPipe,
    RedirectComponent,
    ShortenComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    ClipboardModule,
  ],
})
export class PagesModule { }
