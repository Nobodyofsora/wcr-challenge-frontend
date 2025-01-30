import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.value;
        if (!password) {
            return null;
        }
        const passwordValid = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(password);
        
        return !passwordValid ? { passwordStrength: true } : null;
    }
}