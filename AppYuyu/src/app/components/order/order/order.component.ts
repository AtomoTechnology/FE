import { Component, OnInit } from '@angular/core';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  ctrl = new ApiController();
  public orders: any = [];
  constructor(private genericService: GenericService) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.genericService.GetAll('', this.ctrl.order).subscribe((data: any) => {
      console.log(data);
      this.orders = data.orders;
    });
  }
}
