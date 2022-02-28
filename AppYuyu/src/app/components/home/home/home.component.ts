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
    console.log(isExist);
    let local: any[] = [];
    debugger;
    if (isExist === null) {
      let json = {
        menuId: 1,
        quantity: 1,
      };
      local.push(json);
      localStorage.setItem('Detail', JSON.stringify(local));
    } else {
      local = JSON.parse(localStorage.getItem('Detail') || '');
      let inde = 0;
      let isok = false;
      let result = local.filter((valor: any, index: any) => {
        if (valor.menuId == 3) {
          inde = index;
          isok = true;
        }

        if (isok) {
          local[inde].quantity++;
          localStorage.setItem('Detail', JSON.stringify(local));
        }
      });
      console.log(result);
    }
  }
}
