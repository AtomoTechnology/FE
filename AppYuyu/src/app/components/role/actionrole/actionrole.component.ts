import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-actionrole',
  templateUrl: './actionrole.component.html',
  styleUrls: ['./actionrole.component.css'],
})
export class ActionroleComponent implements OnInit {
  option: string = 'Crear rol';
  btnOption: Boolean = false;

  roleForm: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private roleService: RoleService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.btnOption = id ? true : false;
    if (id) {
      this.option = 'Actualizar Rol ' + id;
      this.GetOne(parseInt(id));
    } else {
      this.option = 'Crear Rol ';
    }
  }

  ngOnInit(): void {}

  Create() {
    if (this.roleForm.valid) {
      if (this.btnOption) {
        this.Update();
      } else {
        this.Save();
      }
    } else {
      this.roleForm.markAllAsTouched();
    }
  }

  GetOne(id: Number) {
    this.roleService.GetOne(id).subscribe((data: any) => {
      console.log(data);
      this.roleForm.patchValue(data.role);
    });
  }

  Update() {
    console.log(this.roleForm.value);
    this.roleService.Update(this.roleForm.value).subscribe((data: any) => {
      if (data.status) {
        this.router.navigate(['roles']);
      }
    });
  }
  Save() {
    console.log(this.roleForm.value);
    this.roleService.Create(this.roleForm.value).subscribe((data: any) => {
      if (data.status) {
        this.router.navigate(['roles']);
      }
    });
  }
}
