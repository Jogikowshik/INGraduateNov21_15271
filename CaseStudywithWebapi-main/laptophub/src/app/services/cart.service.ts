import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICart } from '../cart/ICart';
import { IOrder } from '../order/order';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
 private Cart_urls = "https://localhost:44383/api/Cart/";
 private Order_urls = "https://localhost:44383/api/Order/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getCarts():Observable<ICart[]>{
   return this.httpclient.get<ICart[]>(this.Cart_urls+'get_allCart');
 };

 create(cart: ICart): Observable<ICart> {
  return this.httpclient.post<ICart>(this.Cart_urls+'add_cart', JSON.stringify(cart), this.httpOptions);
}

createOrder(order: IOrder): Observable<IOrder> {
  return this.httpclient.post<IOrder>(this.Order_urls+'add_order', JSON.stringify(order), this.httpOptions);
}

find(id:number): Observable<ICart> {
  return this.httpclient.get<ICart>(this.Cart_urls+"get_allCart/"+id);
}

findAll(customerId:number): Observable<any> {
  return this.httpclient.get<any>(this.Order_urls+"get_allOrder/"+customerId);
}
getOrders():Observable<IOrder[]>{
  return this.httpclient.get<IOrder[]>(this.Order_urls+'get_allOrder');
};

findCartByProduct(id:number): Observable<ICart[]> {
  return this.httpclient.get<ICart[]>(this.Cart_urls+"get_allCartProduct/"+id);
}

update(id:number, Products: any): Observable<ICart> {
  return this.httpclient.put<ICart>(this.Cart_urls+"update_Cart/"+id, JSON.stringify(Products), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<ICart>(this.Cart_urls+"delete_Cart/"+id, this.httpOptions)
}


}
