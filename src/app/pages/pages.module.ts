import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../modules/material.module';
import { SearchComponent } from './search/search.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ShortenComponent } from './shorten/shorten.component';
import { AuthComponent } from './auth/auth.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchComponent,
    RedirectComponent,
    ShortenComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    ClipboardModule,
    NgxSpinnerModule,
    PipesModule,
  ],
})
export class PagesModule { }
