import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICart } from '../cart/ICart';
import { User } from '../registration/IUser';
import { Cartservice } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!:IProduct[];
  cart:ICart | undefined;
  User = new User();
  searchProductText: string = '';

  constructor(
    private productService: ProductService,
    private cartService:Cartservice,
    private _snackBar: MatSnackBar,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.productService.searchProduct.subscribe(searchText => {
    this.searchProductText = searchText.toLocaleLowerCase();
    this.getProducts(this.searchProductText);
    });

  }
  getProducts(searchText:string): void {
    this.productService.getProducts().subscribe(
      (products:IProduct[]) => {
        if(searchText.length>0) {
         this.products = <Array<IProduct>>products.filter(p=>p.productname.toLocaleLowerCase().includes(searchText));
        } else {
          this.products = products;
          console.log([this.products]);
        }
      },
      (error) => {
        this._snackBar.open('Something went wrong', 'Please Try again', {
          duration: 3000
        });
      }
    );
  }


  addToCart(product:IProduct){
    if(product) {
      this.cartService.findCartByProduct(product.id).subscribe((cart:ICart[])=> {
        if(cart.length > 0) {
          this.route.navigate(['/Cart']);
        } else {
          this.cart = {
            id:0,
            productid:product.id,
            productname:product.productname,
            image:'NA',
            quantity: 1,
            totalamount:product.price
          }

          this.cartService.create(this.cart).subscribe((cart:ICart)=> {
            this.route.navigate(['/Cart']);

          },
          (error)=>{
            this._snackBar.open('Something went wrong', 'Please Try again', {
              duration: 3000
            });
          });
        }
       },
       (error)=>{
         this._snackBar.open('Something went wrong', 'Please Try again', {
           duration: 3000
         });
       });


    }

  }
}


