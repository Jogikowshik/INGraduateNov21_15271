import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from './IUser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signUpForm!: FormGroup;
  public signupObj = new User();

  constructor(public userService: UserService,
    private router:Router,private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullname:["", Validators.required],
      mobileno:["",Validators.required],
      username:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required],
      address:["",Validators.required]
    })
  }

  get f(){
    return this.signUpForm.controls;
  }


  signUp(){
    this.signupObj.fullname = this.signUpForm.value.fullname;
    this.signupObj.username = this.signUpForm.value.username;
    this.signupObj.password = this.signUpForm.value.password;
    this.signupObj.mobileno = this.signUpForm.value.mobileno;
    this.signupObj.address = this.signUpForm.value.address;
    this.userService.signUp(this.signupObj)
    .subscribe(res=>{
      alert(res.message);
      this.signUpForm.reset();
      this.router.navigate(['login'])
    })
  }
}




