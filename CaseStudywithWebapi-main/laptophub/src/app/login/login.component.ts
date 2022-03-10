import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, MinLengthValidator, MaxLengthValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../app/services/user.service';
import { User } from '../registration/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  public loginObj = new User();

  constructor(private fb:FormBuilder,
    private router:Router,public userService: UserService,private http: HttpClient
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
      this.router.navigate(['Home']);
      localStorage.setItem('token',res.token);
      localStorage.setItem('userType',res.userType);

    },err=>{
      alert("soomething went wrong")
    })
  }
}


