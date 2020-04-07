import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortenRoutingModule } from './shorten-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    ShortenRoutingModule,
  ],
})
export class ShortenModule { }
