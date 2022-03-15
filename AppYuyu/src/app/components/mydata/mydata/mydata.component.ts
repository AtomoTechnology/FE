import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';
import { MessageService } from 'src/app/services/message.service';

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
    email: ['', [Validators.required, , Validators.pattern(this.reg)]],
    adress: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  passwordForm: FormGroup = this.fb.group({
    currentPassword: [
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
    private actRoute: ActivatedRoute,
    private messageService: MessageService
  ) {
    var idStr = this.actRoute.snapshot.paramMap.get('id')!;
    var id = parseInt(idStr);
    this.getById(id);
  }

  ngOnInit(): void {}
  getById(id: number) {
    this.gen.GetById(id, this.ctrl.user).subscribe((data: any) => {
      this.user = data.data;
      console.log(data.data);
      this.userForm.patchValue(data?.data);
    });
  }
  editOne() {
    this.gen.Put(this.userForm.value, this.ctrl.user).subscribe((data: any) => {
      if (data.status) {
        this.messageService.Success(
          'Editar Datos',
          'Tus datos se actualizaron con exito'
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        this.messageService.Success('Error', data.message);
      }
      // console.log(data);
    });
  }

  UpdatePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
    } else {
      this.gen
        .UpdatePassword(this.passwordForm.value, 'users/update/password')
        .subscribe((data: any) => {
          if (data.status) {
            this.messageService.Success(
              'Editar Contraseña',
              'Tu contraseña se actualizó con exito'
            );
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            this.messageService.Success('Error', data.message);
          }
          // console.log(data);
        });
    }
  }
  EditUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.editOne();
      this.toggleModal();
    }
  }
  toggleActive(event: any) {
    const items = document.querySelectorAll('.menu-setting-user .item-menu');

    items.forEach((item) => {
      console.log('put');
      item.classList.remove('active');
      item.addEventListener('click', () => {
        item.classList.add('active');
      });
    });
    // console.log(event.taget);
    // event.target.classlist.add('active');
  }

  toggleModal() {
    document.querySelector('.modal-update-user')?.classList.toggle('hidden');
  }
}
