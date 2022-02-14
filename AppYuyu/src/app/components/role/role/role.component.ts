import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  public roles: any = [];
  public role: any;
  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.roleService.GetAll().subscribe((data) => {
      console.log(data.data.roles);
      this.roles = data.data.roles;
    });
  }

  GetOne(id: Number) {
    this.roleService.GetOne(id).subscribe((data) => {
      console.log(data.data.role);
      this.role = data.data.role;
    });
  }
}
