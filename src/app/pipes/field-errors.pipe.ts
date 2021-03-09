import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'fieldErrors',
})
export class FieldErrorsPipe implements PipeTransform {

  transform(errors: ValidationErrors): string[] {
    const errorMessages: string[] = [];

    Object.keys(errors).forEach(key => {
      let message: string;
      const error = errors[key];

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
        case 'email':
          message = 'This is not a email';
          break;
        case 'errorMessage':
          message = error;
          break;
        default:
          message = `This field's error case by '${key}'.`;
          break;
      }

      errorMessages.push(message);
    });

    return errorMessages;
  }

}
