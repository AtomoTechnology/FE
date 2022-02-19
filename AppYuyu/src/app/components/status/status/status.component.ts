import { Component, OnInit } from '@angular/core';
import { Status, Statuses } from 'src/app/Interface/status';
import { StatusService } from 'src/app/services/status.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  public statuses: Status[] = [];

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    debugger;
    this.GetAll();
  }
  GetAll() {
    this.statusService.GetAll().subscribe((data: Statuses) => {
      if (data.status) {
        this.statuses = data.statuses;
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
        this.statusService.Delete(id).subscribe((data: any) => {
          if (data.status) {
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
