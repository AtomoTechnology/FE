import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-actionstatus',
  templateUrl: './actionstatus.component.html',
  styleUrls: ['./actionstatus.component.css'],
})
export class ActionstatusComponent implements OnInit {
  option: string = 'Crear Estado';
  btnOption: Boolean = false;

  statusForm: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private statusService: StatusService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.btnOption = id ? true : false;
    if (id) {
      this.option = 'Actualizar Estado ' + id;
      this.GetOne(parseInt(id));
    } else {
      this.option = 'Crear Estado ';
    }
  }

  ngOnInit(): void {}

  Create() {
    if (this.statusForm.valid) {
      if (this.btnOption) {
        this.Update();
      } else {
        this.Save();
      }
    } else {
      this.statusForm.markAllAsTouched();
    }
  }

  GetOne(id: Number) {
    this.statusService.GetOne(id).subscribe((data: any) => {
      console.log(data);
      this.statusForm.patchValue(data.stat);
    });
  }

  Update() {
    console.log(this.statusForm.value);
    this.statusService.Update(this.statusForm.value).subscribe((data: any) => {
      if (data.status) {
        this.router.navigate(['statuses']);
      }
    });
  }
  Save() {
    console.log(this.statusForm.value);
    this.statusService.Create(this.statusForm.value).subscribe((data: any) => {
      if (data.status) {
        this.router.navigate(['statuses']);
      }
    });
  }
}
