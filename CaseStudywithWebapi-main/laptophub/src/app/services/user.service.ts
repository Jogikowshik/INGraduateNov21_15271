import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loginAPIUrl : string = "https://localhost:44383/api/Login/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }
 signUp(empObj : any){
  //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
  return this.httpclient.post<any>(`${this.loginAPIUrl}signup`,empObj)
}
login(empObj:any){
  return this.httpclient.post<any>(`${this.loginAPIUrl}login`,empObj)
}
}
