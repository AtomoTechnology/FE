import { StatusLS } from './../../../Interface/statusLocalstorage';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get menus(){
    return this.menuService.GetMenu(this.auth.GetDataFromStorage().role);
  }
  
  get DetailMenu(){
    // var result = this.auth.GetDataFromStorage().detail.reduce((sum: any, curr: any) => {
    //   return sum = sum + curr.quantity;
    // }, 0)
    return this.auth.GetDataFromStorage().detail;
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
