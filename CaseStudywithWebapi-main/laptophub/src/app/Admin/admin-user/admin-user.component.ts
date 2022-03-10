import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import{AdminuserService}from '../../services/adminuser.service';
import { Admin } from './IAdminUser';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  signUpForm!: FormGroup;
  public signupObj = new Admin();

  constructor(public userService: AdminuserService,
    private router:Router,private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullname:["", Validators.required],
      eid:["", Validators.required],
      mobile:["",Validators.required],
      username:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required],
      location:["",Validators.required]
    })
  }

  get f(){
    return this.signUpForm.controls;
  }


  signUp(){
    this.signupObj.fullname = this.signUpForm.value.fullname;
    this.signupObj.eid = this.signUpForm.value.eid;
    this.signupObj.username = this.signUpForm.value.username;
    this.signupObj.password = this.signUpForm.value.password;
    this.signupObj.mobile = this.signUpForm.value.mobile;
    this.signupObj.location = this.signUpForm.value.location;
    this.userService.signUp(this.signupObj)
    .subscribe(res=>{
      alert(res.message);
      this.signUpForm.reset();
      this.router.navigate(['/dashboard']);
    })
  }
}
