import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-actionprice',
  templateUrl: './actionprice.component.html',
  styleUrls: ['./actionprice.component.css']
})
export class ActionpriceComponent implements OnInit {
  option: string = 'Crear precio';
  btnOption: Boolean = false;
  private ctrl = new ApiController();

  actionForm: FormGroup = this.fb.group({
    id: [0],
    price: ["", [Validators.required, Validators.min(0)]],
    description: [''],
  });
  constructor( private fb: FormBuilder,
    private router: Router,private messageService: MessageService,
    private actRoute: ActivatedRoute,
    private genericService: GenericService) {
      var id = this.actRoute.snapshot.paramMap.get('id');
      this.btnOption = id ? true : false;
      if (id) {
        this.option = 'Actualizar precio ' + id;
        this.GetOne(parseInt(id));
      } else {
        this.option = 'Crear precio ';
      }
     }

  ngOnInit(): void {
  }

  GetOne(id: number) {
    this.genericService.GetById(id, this.ctrl.price).subscribe((data: any) => {
      this.actionForm.patchValue(data.price);
    });
  }

  Create() {
    if (this.actionForm.valid) {
      if (this.btnOption) {
        this.Update();
      } else {
        this.Save();
      }
    } else {
      this.actionForm.markAllAsTouched();
    }
  }
  Update() {
    this.genericService.Put(this.actionForm.value, this.ctrl.price).subscribe((data: any) => {
      if (data.status) {
          setTimeout(()=>{
            this.router.navigate(['/prices']);
          }, 5000);
          this.messageService.Success('Actualizar precio', "El precio fue actualizado con exito");
          
        }
        else{
          this.messageService.Error('Error',"El precio no actualizado con exito");
        }
    });
  }
  Save() {
    this.genericService.Post(this.actionForm.value, this.ctrl.price).subscribe((data: any) => {
      if (data.status) {
        setTimeout(()=>{
          this.router.navigate(['/prices']);
        }, 5000);
        this.messageService.Success('Crear precio', "El precio fue creado con exito");
        
      }
      else{
        this.messageService.Error('Error',"El precio no fue creado con exito");
      }
    });
  }
}
