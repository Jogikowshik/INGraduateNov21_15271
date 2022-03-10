import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/products/IProduct';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-headers',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class MainHeaderComponents implements OnInit {
search:string="";
product:any;
@Output() public sidenavToggle = new EventEmitter();


constructor(private productService:ProductService){}

  ngOnInit(): void {
  }

  searchProduct(searchText : string){
    this.productService.searchProduct.next(searchText.trim());
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
