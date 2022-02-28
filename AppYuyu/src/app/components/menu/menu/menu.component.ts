import { Component, OnInit } from '@angular/core';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  private ctr = new ApiController();
  public menus: any = [];
  constructor(private gen: GenericService) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.gen.GetAll('', this.ctr.menu).subscribe((data: any) => {
      {
        console.log(data);
        this.menus = data.menus;
      }
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
        this.gen.Delete(id, this.ctr.menu).subscribe((data: any) => {
          debugger;
          if (data.status === true) {
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
