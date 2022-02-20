import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiController } from 'src/app/controller/ApiController';
import { AuthService } from 'src/app/services/auth.service';
import { GenericService } from 'src/app/services/generic.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  option: string = 'Registrese';
  btnOption: Boolean = false;
  private ctrl = new ApiController();
  
  private reg: RegExp =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  registerForm: any = this.fb.group({
    id: 0,
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, , Validators.pattern(this.reg)]],
    password: ['',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
    adress: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  get IsAuth(){
    return this.auth.isAuthenticated();
  }

  constructor(private fb: FormBuilder, private router: Router, 
    private auth: AuthService,private messageService: MessageService,
    private actRoute: ActivatedRoute,private genericService: GenericService) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.btnOption = id ? true : false;
    if (id) {
      this.option = 'actualizar Usuario ' + id;
      this.GetOne(parseInt(id));
    } else {
      this.option = 'Registrese ';
    }
  }

  ngOnInit(): void {}

  GetOne(id: number) {
    this.genericService.GetById(id, this.ctrl.user).subscribe((data: any) => {
      this.registerForm.patchValue(data.data);
    });
  }

  Create(){
    debugger;
    if (this.registerForm.valid) {
      if (this.btnOption) {
        // this.Update();
      } else {
        this.Register();
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  Register() {
    debugger;
    if (this.registerForm.valid) {
      this.genericService.Post(this.registerForm.value, this.ctrl.signup).subscribe(
        (data:any) => {
          if (data.status) {
            setTimeout(()=>{
              this.router.navigate(['/auth/users']);
            }, 5000);
            this.messageService.Success('Registrar usuario', data.msg);
            
          }
          else{
            this.messageService.Error('Error',"El usuario no fue registrado con exito");
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.messageService.Error('Error',err.error.message);
        }
      );
    }
  }

  Update(){
    debugger;
    this.genericService.Put(this.registerForm.value, this.ctrl.user).subscribe((data: any) => {
      debugger;
      if (data.status) {
          setTimeout(()=>{
            this.router.navigate(['/auth/users']);
          }, 5000);
          this.messageService.Success('Actualizar usuario', "El usuario fue actualizado con exito");
          
        }
        else{
          this.messageService.Error('Error',"El usuario no fue actualizado con exito");
        }
    },
    (err: HttpErrorResponse) => {
      debugger;
      console.log(err);
      this.messageService.Error('Error',err.error.message);
    });
  }
}
