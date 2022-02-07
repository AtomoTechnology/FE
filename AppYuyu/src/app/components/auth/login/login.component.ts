import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  Login() {
    if (this.accountForm.valid) {
      this.authService.Login(this.accountForm.value).subscribe((data) => {
        console.log(data);
        if (data) {
          this.router.navigate(['/home']);
          setTimeout(() => {
            location.reload();
          }, 0);
        }
      });
    } else {
      this.accountForm.markAllAsTouched();
    }
  }
}
