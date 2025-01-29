import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';


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
  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit (): void {
    this.form = this.isItSignUp() ? 
    this.fb.group ({
      name:  [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,]], // Validators.pattern ("^[a-z0-9"),
      repassword: [null, [Validators.required,]], // Validators.pattern ("^[a-z0-9")
    })
    : this.fb.group ({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,]], // Validators.pattern ("^[a-z0-9")
    });
  }
//Email error message
  updateErrorMessage(field: string) {
    if (this.form.get(field)?.errors?.['required']) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.get('email')?.errors?.['email']) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
//Password hide/show
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
//Onsubmit
  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
    }
  } 
  // check if it is signup
  isItSignUp(){
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
