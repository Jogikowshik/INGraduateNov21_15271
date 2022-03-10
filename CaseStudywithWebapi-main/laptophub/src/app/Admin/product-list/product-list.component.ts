import { Component, OnInit, ViewChild,AfterViewInit, Input  } from '@angular/core';
import { IProduct } from '../product/IProduct';
import{ProductService}from '../services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products:IProduct[]=[];
  displayedColumns: string[] = ['ProductName','Image', 'Price' , 'Action'];
  dataSource = new MatTableDataSource<IProduct>(this.products);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private productService : ProductService ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getProducts();
  }
  getProducts():void
  {
     this.productService.getProducts().subscribe(all_products=>{this.dataSource.data=all_products});
   }

   deleteUser(id:number){
     this.productService.delete(id).subscribe(res => {
          this.products = this.products.filter(product => product.id !== id);
          console.log('Product deleted successfully!');
     })
   }

}
