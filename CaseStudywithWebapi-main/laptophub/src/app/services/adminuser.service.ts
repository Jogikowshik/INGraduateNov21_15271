import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {
  public loginAPIUrl : string = "https://localhost:44383/api/Admin/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }
 signUp(empObj : any){
  //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
  return this.httpclient.post<any>(`${this.loginAPIUrl}signup`,empObj)
}
login(empObj:any){
  return this.httpclient.post<any>(`${this.loginAPIUrl}adminlogin`,empObj)
}


}
