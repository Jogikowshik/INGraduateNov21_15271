import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { IProduct } from '../products/IProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 //http://localhost:44349/Products/
 private Products_urls = "https://localhost:44383/api/Product/";
 private Porductupdate_url="https://localhost:44383/api/Product/update_product"

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'apilication/json' })
 };
 constructor(private httpclient:HttpClient) { }
 searchProduct = new BehaviorSubject<string>('');
 getProducts():Observable<IProduct[]>{
   return this.httpclient.get<IProduct[]>(`${this.Products_urls}get_allProduct`,this.httpOptions)
 };
 create(Products: any): Observable<IProduct> {
  return this.httpclient.post<IProduct>(this.Products_urls+'add_product',Products);
}
find(id:number): Observable<IProduct> {
  return this.httpclient.get<IProduct>(this.Products_urls+"get_allProduct/"+id);
}

update(id:number,Products:any):Observable<IProduct> {
  return this.httpclient.put<IProduct>(this.Porductupdate_url+"/"+id, JSON.stringify(Products), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<IProduct>(this.Products_urls +'delete_product'+ id, this.httpOptions)
}


}
