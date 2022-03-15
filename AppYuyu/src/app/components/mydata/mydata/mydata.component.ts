import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css'],
})
export class MydataComponent implements OnInit {
  private ctrl = new ApiController();
  public user: any = null;

  private reg: RegExp =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  userForm: FormGroup = this.fb.group({
    id: 0,
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    roleId: [''],
    email: ['', [Validators.required, , Validators.pattern(this.reg)]],

    adress: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  passwordForm: FormGroup = this.fb.group({
    oldPassword: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
  });
  constructor(
    private gen: GenericService,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute
  ) {
    var idStr = this.actRoute.snapshot.paramMap.get('id')!;
    var id = parseInt(idStr);
    this.getById(id);
  }

  ngOnInit(): void {}
  getById(id: number) {
    this.gen.GetById(id, this.ctrl.user).subscribe((data: any) => {
      this.user = data.data;
    });
  }

  UpdatePassword() {
    console.log(this.passwordForm.value);
  }

  toggleModal() {
    document.querySelector('.modal-update-user')?.classList.toggle('hidden');
  }
}
