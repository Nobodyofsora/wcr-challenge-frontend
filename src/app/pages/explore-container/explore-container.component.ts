import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { LoginResponse, RegisterRequest, RegisterResponse } from '../../interface/auth.model';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreContainerComponent implements OnInit {

  @Input() name?: string;
  
  form: FormGroup = new FormGroup({});
  errorMessage = signal('');
  hide = signal(true);
  private _snackBar = inject(MatSnackBar);
  
  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit (): void {
    this.buildForm();
  }
  
  buildForm(): void {
    this.form = this.isItSignUp() ? 
    this.fb.group ({
      name:  [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, PasswordValidator() ]], 
      rePassword: [null, [Validators.required, PasswordValidator()]], 
    })
    : this.fb.group ({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]], 
    });
  }
//Password hide/show
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
//Onsubmit
  onSubmit(form: FormGroup) {
    if (form.valid && this.isItSignUp()) {
      const payload: RegisterRequest = {
        name: form.get('name')?.value,
        lastname: form.get('lastName')?.value,
        email: form.get('email')?.value,
        password: form.get('password')?.value,
        repassword: form.get('rePassword')?.value,
      };
      this.authService.registerApi(payload).subscribe({
          next:(res: RegisterResponse) => {  
          this.openAlert(res.message)
        },
          error: (err: RegisterResponse) => {
          this.openAlert(err.message)
        } 
      });
    } else if(form.valid && !this.isItSignUp()) {
      const payload = {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
      };
      this.authService.loginApi(payload).subscribe({
        next: (res: LoginResponse) => {
          this.openAlert(res.message)
        }, error: (err) => {
          this.openAlert(err.message)
        }
      });
    }
  }
  // MatSnackbar
  openAlert(message: string) {
      this._snackBar.open(message,'Ok!', {
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
  }
  // check if it is signup
  isItSignUp(){
    return this.name === 'Signup';
  }
  //Social logins
  onGoogleLoginClicked() {
    this.openAlert('Google login clicked');
  }
  onFacebookLoginClicked() {
    this.openAlert('Facebook login clicked');
  }
}
