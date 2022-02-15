import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

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
   this.GetAll();
  }

  GetAll(){
    this.roleService.GetAll().subscribe((data : any) => {
      this.roles = data.data.roles;
     });
  }
  

  GetOne(id: Number) {
    this.roleService.GetOne(id).subscribe((data : any) => {
      console.log(data.data.role);
      this.role = data.data.role;
    });
  }

  

  Delete(id: number){
    Swal.fire({
      title: '¿Esta seguro desea eliminarlo?',
      text: 'Este archivo se va a eliminar para siempre',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        debugger;
        this.roleService.Delete(id).subscribe((data:any) =>{
          debugger;
          if(data.status === true){
            debugger;
          Swal.fire(
            'Eliminado!',
            'El archivo fue eliminado con exito',
            'success'
          ).then((result) =>{
              this.GetAll();
          })
          }
          
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El archivo fue cancelado',
          'error'
        )
      }
    })
  }
}
