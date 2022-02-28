import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public items: any = [
    {
      id: 1,
      name: 'Caribena',
      price: 390,
      quantity: 2,
      image:
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/295717-que-es-malo-abusar-comida-rapida.png?itok=NWLAbya1',
    },
    {
      id: 2,
      name: 'Platano frito',
      price: 100,
      quantity: 1,

      image:
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/295717-que-es-malo-abusar-comida-rapida.png?itok=NWLAbya1',
    },
    {
      id: 3,
      name: 'Ensalada de fruta',
      price: 790,
      quantity: 4,
      image:
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/295717-que-es-malo-abusar-comida-rapida.png?itok=NWLAbya1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
