import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { IOrder } from './order';

interface IProductOrder {
  productId:number,
  productName:string,
  productDescription:string,
  productPrice:number,
  imagePath:string,
  order:IOrder
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  productOrders:IProductOrder[]=[];
  orders:IOrder[]=[];
  constructor(private cartService:Cartservice,private productService:ProductService ) { }

  ngOnInit(): void {
    this.loadOrderData();
  }

  loadOrderData(){
    this.cartService.findAll(8).subscribe(result=>{
      this.orders=result.map(function(orderData:any){
        return {
          productId:orderData.Product_Id,
          id:orderData.id,
          customerId:orderData.Customer_Id,
          orderDate:orderData.Order_date,
          orderAddress:orderData.Order_Address,
          totalAmount:orderData.Total_Amount,
          status:orderData.status,
          cartId:orderData.cartId
        };
      });
      console.log(this.orders);
      this.orders.forEach(orders => {
        this.productService.find(1).subscribe(product => {
          this.productOrders.push({
            productId:product.id,
            productName:product.productname,
            productPrice:product.price,
            productDescription:product.description,
            imagePath:product.image,
            order:orders
          })
        })
      });
     });
  }

  displayTotalAmount(){
    var total=0;
    this.productOrders.forEach(function(item){
      total += +item.order.totalAmount;
    })
    return total;
    }


}
