import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'fieldErrors',
})
export class FieldErrorsPipe implements PipeTransform {

  transform(value: AbstractControl): string[] {
    const errors: string[] = [];

    Object.keys(value.errors).forEach(key => {
      let message: string;
      const error = value.errors[key];

      switch (key) {
        case 'required':
          message = `This field is ${key}.`;
          break;
        case 'min':
          message = `No smaller than ${error.min}.`;
          break;
        case 'minlength':
          message = `No shorter than ${error.requiredLength}.`;
          break;
        case 'maxlength':
          message = `No longer than ${error.requiredLength}.`;
          break;
        case 'errorMessage':
          message = error;
          break;
        default:
          message = `This field's error case by '${key}'.`;
          break;
      }

      errors.push(message);
    });

    return errors;
  }

}
