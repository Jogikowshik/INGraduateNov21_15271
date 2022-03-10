import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../orders-list/IOrder';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private Order_urls = "https://localhost:44383/api/Order/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getOrders():Observable<IOrder[]>{
   return this.httpclient.get<IOrder[]>(this.Order_urls+'get_allOrder');
 };

//  create(Orders: any): Observable<IOrder> {
//   return this.httpclient.post<IOrder>(this.Orders_add, JSON.stringify(Orders), this.httpOptions);
// }

// find(id:number): Observable<IOrder> {
//   return this.httpclient.get<IOrder>(this.Orders_find+"/"+id);
// }

// update(id:number, Orders: any): Observable<IOrder> {
//   return this.httpclient.put<IOrder>(this.Orders_update + id, JSON.stringify(Orders), this.httpOptions)
// }

// delete(id:number){
//   return this.httpclient.delete<IOrder>(this.Orders_delete + id, this.httpOptions)
// }


}
