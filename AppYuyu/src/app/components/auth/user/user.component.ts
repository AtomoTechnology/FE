import { Component, OnInit } from '@angular/core';
import { ApiController } from 'src/app/controller/ApiController';
import { Users } from 'src/app/Interface/user';
import { GenericService } from 'src/app/services/generic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  List!: Users;
  loading: boolean = true;
  private ctrl = new ApiController();

  constructor(private genericService: GenericService) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.genericService.GetAll('', this.ctrl.user).subscribe((data: any) => {
      this.loading = false;
      this.List = data;
    });
  }
  Delete(id: number) {
    Swal.fire({
      title: '¿Esta seguro desea eliminarlo?',
      text: 'Este archivo se va a eliminar para siempre',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        debugger;
        this.genericService
          .Delete(id, this.ctrl.user)
          .subscribe((data: any) => {
            debugger;
            if (data.status === true) {
              debugger;
              Swal.fire(
                'Eliminado!',
                'El archivo fue eliminado con exito',
                'success'
              ).then((result) => {
                this.GetAll();
              });
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'El archivo fue cancelado', 'error');
      }
    });
  }
}
