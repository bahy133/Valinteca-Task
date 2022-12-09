import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let pass = control.get('password')?.value;
    let cpass = control.get('cpassword')?.value;
    let error: ValidationErrors = { InvalidPass: pass };
    return pass == cpass ? null : Error;
  };
}
