import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public menus: any = [];
  private ctr = new ApiController();

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

  addDetail(item: any) {
    let isExist = localStorage.getItem('Detail');
    let local: any[] = [];
    if (isExist === null) {

      item.quantity = 1;
      item.subtotal = 0;
      item.total = 0;
      item.discount = 0;

      local.push(item);
      localStorage.setItem('Detail', JSON.stringify(local));
    } else {
      local = JSON.parse(localStorage.getItem('Detail') || '');
      let isok = false;
      local.filter((valor: any, index: any) => {
        if (valor.id == item.id) {
          local[index].quantity++;
          isok = true;
        }
      }); 

      if (!isok) {
        item.quantity = 1;
        item.subtotal = 0;
        item.total = 0;
        item.discount = 0;
        local.push(item);
      }
      localStorage.setItem('Detail', JSON.stringify(local));
    }
  }
}
