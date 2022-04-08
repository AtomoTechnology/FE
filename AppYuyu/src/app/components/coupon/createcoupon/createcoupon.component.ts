import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcoupon',
  templateUrl: './createcoupon.component.html',
  styleUrls: ['./createcoupon.component.css']
})
export class CreatecouponComponent implements OnInit {
  option: string = 'Crear cupon';
  btnOption: Boolean = false;

  cuponForm: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    expiredDate: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    condition: ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
  }
  Create() {
    
  }
}
