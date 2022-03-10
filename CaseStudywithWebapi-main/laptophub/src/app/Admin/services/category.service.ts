import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../category/ICategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 private productCategories_urls = "https://localhost:44383/api/Category/";


 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getCategories():Observable<Icategory[]>{
   return this.httpclient.get<Icategory[]>(this.productCategories_urls+"get_allCategory");
 };

 create(productCategories: any): Observable<Icategory> {
  return this.httpclient.post<Icategory>(this.productCategories_urls+'add_category', JSON.stringify(productCategories), this.httpOptions);
}

find(id:number): Observable<Icategory> {
  return this.httpclient.get<Icategory>(this.productCategories_urls+"get_allCategory/"+id);
}

update(id:number, productCategories:any): Observable<Icategory> {
  return this.httpclient.put<Icategory>(this.productCategories_urls+"update_Category", JSON.stringify(productCategories), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<Icategory>(this.productCategories_urls+"delete_Category/"+id, this.httpOptions)
}


}
