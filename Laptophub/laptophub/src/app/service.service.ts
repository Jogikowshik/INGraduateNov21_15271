import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

  import { IPayment } from './IPayment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    //http://localhost:3000/users/
 private user_urls = "http://localhost:3000/app/users";
 private user_find = "http://localhost:3000/app/users";
 private user_add = "http://localhost:3000/app/users/add";
 private user_update = "http://localhost:3000/app/users/update/";
 private user_delete = "http://localhost:3000/app/users/delete/";

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
constructor(private httpclient:HttpClient) { }

getUsers():Observable<IPayment[]>{
  return this.httpclient.get<IPayment[]>(this.user_urls);
};

find(id:number): Observable<IPayment> {
 return this.httpclient.get<IPayment>(this.user_find+"/"+id);
}


create(users: any): Observable<IPayment> {
 return this.httpclient.post<IPayment>(this.user_add, JSON.stringify(users), this.httpOptions);
}


update(id:number, users: any): Observable<IPayment> {
 return this.httpclient.put<IPayment>(this.user_update + id, JSON.stringify(users), this.httpOptions)
}

delete(id:number){
 return this.httpclient.delete<IPayment>(this.user_delete + id, this.httpOptions)
}


}




