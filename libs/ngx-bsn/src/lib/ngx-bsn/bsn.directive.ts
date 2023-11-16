import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { validateBsn } from './bsn.validator';

@Directive({
  standalone: true,
  selector: '[ngxBsn]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BsnDirective,
      multi: true,
    },
  ],
})
export class BsnDirective implements Validator {
  private _onValidatorChange?: () => void;

  registerOnValidatorChange(fn: () => void): void {
    this._onValidatorChange = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    return validateBsn(control.value) ? null : { bsn: true };
  }
}
