import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppYuyu';

  constructor(private authService: AuthService) {}
  login() {
    var login = {
      email: 'admin@gmail.com',
      password: 'pass1234',
    };
    this.authService.Login(login).subscribe((data) => {
      console.log(data);
    });
  }
  Logout() {
    this.authService.ClearStorage();
  }
}
