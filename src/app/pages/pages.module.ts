import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
