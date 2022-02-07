import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private isEmail =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  accountForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ValidateFormLogin(field: string): string {
    let validateField = this.accountForm.get(field);

    let result =
      !validateField?.valid && validateField?.touched
        ? 'is-invalid'
        : validateField?.touched
        ? 'is-valid'
        : '';
    // debugger;
    console.log(result);
    return result;
    // return (
    //   this.accountForm.controls[field].errors &&
    //   this.accountForm.controls[field].touched
    // );
  }
  Login() {
    console.log(this.accountForm?.controls);
  }
  log(x: any) {
    console.log(x);
  }
}
