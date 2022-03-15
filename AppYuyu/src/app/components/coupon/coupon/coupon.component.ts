import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent implements OnInit {
  public arrays = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit(): void {}
}
