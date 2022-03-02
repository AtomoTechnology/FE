import { Component, OnInit } from '@angular/core';
import { ApiController } from 'src/app/controller/ApiController';
import { AuthService } from 'src/app/services/auth.service';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public subtotal: number = 0;
  public total: number = 0;
  public discount: number = 0;
  public items: any = [];
  private ctrl = new ApiController();

  get GetQuantity(){
    var result = this.auth.GetDataFromStorage().detail;
    var count = result.reduce((sum: any, curr: any) => {
      return sum = sum + curr.quantity;
    }, 0)
    return count;
  }

  constructor(private auth: AuthService, private genericService: GenericService) {}

  ngOnInit(): void {
    this.GetAllDetail();
  }

  GetAllDetail(){
    this.items = JSON.parse(localStorage.getItem('Detail') || '');
    this.subtotal = this.items.reduce((subtotal: any,curr: any) => {
      return  subtotal = subtotal + (curr.price * curr.quantity);
    }, 0);
    this.total = this.subtotal;
  }

  ApplyDiscount(){
    this.genericService.GetAll("nro=", this.ctrl.coupon).subscribe((data: any) => {
       // this.discount = 23;
    // this.total = this.total  - this.discount;
    });
  
  }

  MoreOrder(item: any){
    item.quantity++;
    let local = JSON.parse(localStorage.getItem('Detail') || '');
    local.filter((valor: any, index: any) => {
      if (valor.id == item.id) {
        local[index].quantity = item.quantity;
        localStorage.setItem('Detail', JSON.stringify(local));
      }
    }); 

    this.total = (this.total + parseInt(item.price))  - this.discount;
    this.subtotal = this.subtotal + parseInt(item.price);
  }

  LessOrder(item: any){
    if(item.quantity === 0){
      return;
    } 
    item.quantity--;
    let local = JSON.parse(localStorage.getItem('Detail') || '');
    local.filter((valor: any, index: any) => {
      if (valor.id == item.id) {
        local[index].quantity = item.quantity;
        localStorage.setItem('Detail', JSON.stringify(local));
      }
    });
    this.total = (this.total - parseInt(item.price))  - this.discount;
    this.subtotal = this.subtotal - parseInt(item.price);

    if(!this.GetQuantity){
      localStorage.removeItem('Detail');
    }
  }
}
