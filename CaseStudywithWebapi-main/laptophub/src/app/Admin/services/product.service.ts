import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../product/IProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   //http://localhost:44349/Products/
 private Products_urls = "https://localhost:44383/api/Product/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'apilication/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getProducts():Observable<IProduct[]>{
   return this.httpclient.get<IProduct[]>(this.Products_urls+'get_allProduct');
 };
 create(Products: any): Observable<IProduct> {
  return this.httpclient.post<IProduct>(this.Products_urls+'add_product',Products);
}
find(id:number): Observable<IProduct> {
  return this.httpclient.get<IProduct>(this.Products_urls+"get_allProduct/"+id);
}

// update(id:number,Products: any): Observable<IProduct> {
//   return this.httpclient.put<IProduct>(this.Products_urls+"update_product/"+id, JSON.stringify(Products), this.httpOptions)
// }

delete(id:number){
  return this.httpclient.delete<IProduct>(this.Products_urls +'delete_product/'+ id, this.httpOptions)
}

}
