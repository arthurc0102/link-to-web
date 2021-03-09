import { NgModule } from '@angular/core';

import { FieldErrorsPipe } from './field-errors.pipe';

@NgModule({
  declarations: [
    FieldErrorsPipe,
  ],
  exports: [
    FieldErrorsPipe,
  ],
})
export class PipesModule { }
