import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public menus = [
    {
      id: 1,
      image:
        'http://www.multisaborsonsonate.com/imagenes/comida/IMG-20171123-WA0001.jpg',
      name: 'Caribena',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 2,
      image:
        'https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-173611719-500px.jpg?_=61950',
      name: 'Platano',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 3,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_fajitas-calientes-hd.jpg',
      name: 'Arroz con Legumeble',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 3,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_fajitas-calientes-hd.jpg',
      name: 'Arroz con Legumeble',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 3,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_fajitas-calientes-hd.jpg',
      name: 'Arroz con Legumeble',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 3,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_fajitas-calientes-hd.jpg',
      name: 'Arroz con Legumeble',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 3,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_fajitas-calientes-hd.jpg',
      name: 'Arroz con Legumeble',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 3,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_fajitas-calientes-hd.jpg',
      name: 'Arroz con Legumeble',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
    {
      id: 3,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_fajitas-calientes-hd.jpg',
      name: 'Arroz con Legumeble',
      description: 'Una de los mejores del mundo hay que probarlo ya',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addDetail(item: any){
    let isExist = localStorage.getItem('Detail');
    console.log(isExist);
    let local:any[]  = [];
    debugger;
    if(isExist === null){
      let json = {
        menuId: 1,
        quantity: 1
      }
      local.push(json);
      localStorage.setItem('Detail', JSON.stringify(local));
    }
    else{
      local = JSON.parse(localStorage.getItem('Detail') || '');
     let inde = 0;
     let isok = false;
     let result =  local.filter((valor:any, index:any) => {
      if(valor.menuId == 3){
        inde = index;
        isok = true;
      }

      if(isok){
        local[inde].quantity++;
        localStorage.setItem('Detail', JSON.stringify(local));
      }
     });
      console.log(result);
    }
  }
}
