import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{ProductService}from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  submitted!:false;
  form!: FormGroup;
  ICart=true;
  imagePreview!: string;
  constructor(public productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productname: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  onImagePicked(event:Event) {
    // const file = (event.target as HTMLInputElement).files [0];
    // this.form.patchValue({ image: file });
    // this.form.get('image')?.updateValueAndValidity()
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.imagePreview = reader.result as string;
    // };
    // reader.readAsDataURL(file);
  }

  submit(){
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe((res:any) => {
         alert('Product created successfully!');
         this.router.navigateByUrl('/dashboard/productlist');
    })
  }

}
