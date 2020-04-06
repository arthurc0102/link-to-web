import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field-hints',
  templateUrl: './field-hints.component.html',
  styleUrls: ['./field-hints.component.scss'],
})
export class FieldHintsComponent implements OnInit {

  @Input() field: AbstractControl;
  @Input() errorCodes: string[];

  constructor() { }

  ngOnInit(): void {
  }

  hasError(errorCode: string): boolean {
    if (errorCode === 'required') {
      return this.field.hasError(errorCode);
    }

    return this.field.hasError('required') || this.field.hasError(errorCode);
  }

  getIconName(errorCode: string): string {
    return this.hasError(errorCode) ? 'close' : 'done';
  }

}
