import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private reg: RegExp =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  registerForm: any = this.fb.group({
    id: 0,
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, , Validators.pattern(this.reg)]],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
    adress: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {}

  Register() {
    if (this.registerForm.valid) {
      this.auth.Register(this.registerForm.value).subscribe(
        (data) => {
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
    }
  }
}
