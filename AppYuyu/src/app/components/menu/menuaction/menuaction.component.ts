import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-menuaction',
  templateUrl: './menuaction.component.html',
  styleUrls: ['./menuaction.component.css'],
})
export class MenuactionComponent implements OnInit {
  public prices: any = [];
  private ctr = new ApiController();
  option: string = 'Creat Menu';
  btnOption: Boolean = false;
  profilphoto: string = '';

  menuForm: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    description: ['', Validators.required],
    type: ['', Validators.required],
    price: ['', Validators.required],
    image: [''],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private gen: GenericService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.btnOption = id ? true : false;
    if (id) {
      this.option = 'Actualizar Menu ' + id;
      this.GetOne(parseInt(id));
    } else {
      this.option = 'Crear Menu';
    }
  }

  ngOnInit(): void {
    this.GetAll();
  }
  GetAll() {
    this.gen.GetAll('', this.ctr.price).subscribe((data: any) => {
      this.prices = data.prices;
    });
  }

  ConvertImage(event: any) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = this.handleReaderLoaded.bind(this, 'Id');
    reader.readAsBinaryString(file);
  }

  handleReaderLoaded(readerEvt: string, indicator: any) {
    var binaryString = indicator.target.result;
    if (readerEvt == 'Id') {
      this.profilphoto = 'data:image/jpeg;base64,' + btoa(binaryString);
      this.menuForm.value.image = this.profilphoto;
      document.querySelector('.image')?.setAttribute('src', this.profilphoto);
    }
  }
  // ConvertImage1(event: any) {
  //   console.log('estoy..');
  //   var path: string = '';
  //   if (event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = function (ev: any) {
  //       let url: any = ev.target.result;
  //       path = url;
  //       console.log(path, url);
  //       document.querySelector('.image')?.setAttribute('src', url);
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  //   // console.log(path);
  //   this.menuForm.value.image = path;
  // }
  Create() {
    if (this.menuForm.valid) {
      if (this.btnOption) {
        this.Update();
      } else {
        this.Save();
      }
    } else {
      this.menuForm.markAllAsTouched();
    }
  }

  GetOne(id: number) {
    this.gen.GetById(id, this.ctr.menu).subscribe((data: any) => {
      console.log(data);
      this.menuForm.patchValue(data.menu);
      if (this.menuForm.value.image) {
        document
          .querySelector('.image')
          ?.setAttribute('src', this.menuForm.value.image);
      }
      console.log(this.menuForm.value);
    });
  }

  Update() {
    console.log(this.menuForm.value);
    this.gen.Put(this.menuForm.value, this.ctr.menu).subscribe((data: any) => {
      if (data.status) {
        this.router.navigate(['menus']);
      }
    });
  }
  Save() {
    console.log(this.menuForm.value);
    this.gen.Post(this.menuForm.value, this.ctr.menu).subscribe((data: any) => {
      if (data.status) {
        this.router.navigate(['menus']);
      }
    });
  }
}
