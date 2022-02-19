import { StatusLS } from './../../../Interface/statusLocalstorage';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get menus(){
    return this.menuService.GetMenu(this.auth.GetDataFromStorage().role);
  }
  constructor(private auth: AuthService, private router: Router,
    private menuService: MenuService) {}

  dataUser: any = this.auth.GetDataFromStorage();

  ngOnInit(): void {}

  Logout() {
    this.auth.Logout();
    location.reload();
    // this.router.onSameUrlNavigation("reload");
  }
}
