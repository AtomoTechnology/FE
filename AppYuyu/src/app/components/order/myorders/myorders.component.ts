import { Component, OnInit } from '@angular/core';
import { ApiController } from 'src/app/controller/ApiController';
import { AuthService } from 'src/app/services/auth.service';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
})
export class MyordersComponent implements OnInit {
  ctrl = new ApiController();
  public myOrders: any = [];
  public item: any;
  constructor(
    private genericService: GenericService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.genericService
      .GetAll(
        'userId=' + this.auth.GetDataFromStorage().userId,
        `${this.ctrl.order}`
      )
      .subscribe((data: any) => {
        console.log(data);
        this.myOrders = data.orders;
      });
  }

  GetOrder(order: any) {
    console.log(order);
    this.item = order;
    document.querySelector('.modal')?.classList.toggle('hidden');
  }
}
