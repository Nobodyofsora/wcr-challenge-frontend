import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';
import { LoginResponse, RegisterRequest } from '../interface/auth.model';
import { AuthService } from '../services/auth.service';


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
      password: [null, [Validators.required, PasswordValidator()]], 
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
        lastName: form.get('lastName')?.value,
        email: form.get('email')?.value,
        password: form.get('password')?.value,
        rePassword: form.get('rePassword')?.value,
      };
      this.authService.registerApi(payload).subscribe((res) => {
        console.log('Register response', res);
      });
  
      
 /*          this.isShowerror = true;
          if (err.error?.error?.message === 'EMAIL_NOT_FOUND') {
            this.errorMsg = SignInErrorConstants.EMAIL_NOT_FOUND;
          } else if (err.error?.error?.message === 'INVALID_PASSWORD') {
            this.errorMsg = SignInErrorConstants.INVALID_PASSWORD;
          } else if (err.error?.error?.message === 'USER_DISABLED') {
            this.errorMsg = SignInErrorConstants.USER_DISABLED;
          } */
        
      
    } else if(form.valid && !this.isItSignUp()) {
      const payload = {
        email: form.get('email')?.value,
        password: form.get('password')?.value,
      };
      this.authService.loginApi(payload).subscribe((res: LoginResponse) => {
        console.log('Login response', res);
      })
    }
  }
  // check if it is signup
  isItSignUp(){
    console.log(this.name);
    
    return this.name === 'Signup';
  }
  //Social logins
  onGoogleLoginClicked() {
    console.log('Google login clicked');
  }
  onFacebookLoginClicked() {
    console.log('Facebook login clicked');
  }
}
