import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Router } from '@angular/router';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form!: FormGroup;



  id = "";

  order_id = "";

  total_amont = "";

  payment_mode= "";




  btnDisabled = false;



  constructor(public serviceService: ServiceService,

    private router:Router

  ) { }



  ngOnInit(): void {

    this.form = new FormGroup({

      id: new FormControl('', [Validators.required]),

      order_id : new FormControl('',[Validators.required]),

      ptotal_amont: new FormControl('',[Validators.required]),

      mpayment_mode: new FormControl('', Validators.required)

    });

  }



  get f(){

    return this.form.controls;

  }



  submit(){

    alert('User created successfully!');

    console.log(this.form.value);

    this.serviceService.create(this.form.value).subscribe((res:any) => {

         console.log('User created successfully!');

         this.router.navigateByUrl('/userList');

    })

  }

}
