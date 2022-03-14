import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiController } from 'src/app/controller/ApiController';
import { AuthService } from 'src/app/services/auth.service';
import { GenericService } from 'src/app/services/generic.service';
import { MessageService } from 'src/app/services/message.service';
import { Price } from '../../../Interface/price';

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

  constructor(private auth: AuthService, private genericService: GenericService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    debugger;
    var aver = this.GetQuantity;
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
  RealizeOrder(){
    var pricetotal = this.items.reduce((sum: any, curr: any) => {
      return sum = sum + (parseInt(curr.quantity) * parseInt(curr.price));
    }, 0);
     var order={
      order:{
        userId:parseInt(this.auth.GetDataFromStorage().userId),
        total:pricetotal,
        state: 1,
      },
      OrderDetail:[{}]
     };
     order.OrderDetail =[];
     this.items.forEach((element : any) => {
       var orderdetail ={
         menuId: element.id,
         quantity: element.quantity,
         orderId: 0,
         subtotal:(parseInt(element.quantity) * parseInt(element.price))
       };
       order.OrderDetail.push(orderdetail);
     });
      this.genericService.Post(order, this.ctrl.order).subscribe(
        (data:any) => {
          if (data.status) {
            setTimeout(()=>{
              localStorage.removeItem("Detail");
            }, 5000);
            this.messageService.Success('Registrar pedido', "Tu pedido ha sido registrado");
            
          }
          else{
            this.messageService.Error('Error',"El usuario no fue registrado con exito");
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if( err.error.message === "Validation error"){
            this.messageService.Error('Error',err.error.err.errors[0].message);
          }
          else{
          this.messageService.Error('Error',err.error.message);
          }
        }
      );
  }
}
