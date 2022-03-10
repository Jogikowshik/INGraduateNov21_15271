import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminuserService } from '../../services/adminuser.service';
import { Admin } from '../admin-user/IAdminUser';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public loginForm !: FormGroup;
  public loginObj = new Admin();

  constructor(private fb:FormBuilder,
    private router:Router,public userService: AdminuserService,private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required]
    });
   localStorage.clear();
  }

  login()
  {
    this.loginObj.username = this.loginForm.value.username;
    this.loginObj.password = this.loginForm.value.password;
    this.userService.login(this.loginObj)
    .subscribe(res=>{
      alert(res.message);
      this.router.navigate(['dashboard']);
      localStorage.setItem('token',res.token);
      localStorage.setItem('userType',res.userType);
    },err=>{
      alert("soomething went wrong")
    })
  }


}
