import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menunav: any;
  constructor() {}

  GetMenu(role: string) {
    return this.GetTypeUser(role);
  }

  private GetTypeUser(role: string) {
    if (role.toLowerCase() === 'admin'.toLowerCase()) {
      return this.GetAdmin();
    } else if (role.toLowerCase() === 'usuario'.toLowerCase()) {
      return this.GetUser();
    } else if (role.toLowerCase() === 'empleado'.toLowerCase()) {
      return this.GetEmpolyee();
    } else {
      return 'error';
    }
  }
  private GetAdmin() {
    this.menunav = [
      {
        url: '/works',
        displayName: 'Trabajos',
        active: 'active Trabajos',
        icon: 'fas fa-th-list',
      },
      {
        url: '/auth/users',
        displayName: 'Usuarios',
        active: 'active Usuarios',
        icon: 'fas fa-user',
      },
      {
        url: '/roles',
        displayName: 'Role',
        active: 'Role',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      },
      {
        url: '/statuses',
        displayName: 'Estados',
        active: 'Estados',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      },
      {
        url: '/prices',
        displayName: 'Precio',
        active: 'Precios',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      },
      {
        url: '/menus',
        displayName: 'Menus',
        active: 'Menus',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      },
    ];
    return this.menunav;
  }

  private GetUser() {
    this.menunav = [     
      {
        url: '/myorders',
        displayName: 'Mis pedidos',
        active: 'myorders',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      },
      {
        url: '/mycoupon',
        displayName: 'Mi cupon',
        active: 'mycoupon',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      }, 
      {
        url: '/mydatas',
        displayName: 'Mis datos',
        active: 'mydatas',
        icon: 'fas fa-th-list',
      }, 
      {
        url: '/mypassword',
        displayName: 'Cambiar contraseña',
        active: 'mypassword',
        icon: 'fas fa-th-list',
      },
    ];
    return this.menunav;
  }

  private GetEmpolyee() {
    this.menunav = [
      {
        url: '/works',
        displayName: 'Trabajos',
        active: 'active Trabajos',
        icon: 'fas fa-th-list',
      },
      {
        url: '/roles',
        displayName: 'Role',
        active: 'Role',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      },
      {
        url: '/statuses',
        displayName: 'Estados',
        active: 'Estados',
        icon: 'fas fa-th-list',
        span: 'ml-4 title',
      },
    ];
    return this.menunav;
  }
}
