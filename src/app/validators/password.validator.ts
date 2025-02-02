import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.value;
        if (!password) {
            return null;
        }
        // Password must contain at least one letter (or one number), and one special character, minimum 6 characters
        const passwordValid = /^(?=.*[a-z]|[A-Z]|[0-9])(?=.*[_!@#\$%\^&\*])(?=.{6,})/.test(password);
        
        // If test is passed, return null, else set specific validator error to true
        return !passwordValid ? { passwordStrength: true } : null;
    }
}