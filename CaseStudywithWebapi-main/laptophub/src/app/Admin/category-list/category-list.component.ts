import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { Icategory } from '../category/ICategory';
import{CategoryService}from '../services/category.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories:Icategory[]=[];
  displayedColumns: string[] = ['id', 'categoryName', 'Action'];
  dataSource = new MatTableDataSource<Icategory>(this.categories);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private categoryService :CategoryService,private router: Router) { }


  ngOnInit(): void {
    this.getCategories()
  }
  getCategories():void
  {
     this.categoryService.getCategories().subscribe(all_category=>this.dataSource.data=all_category);
   }
   deleteUser(id:number){
     confirm("are you sure you want to delete");
    this.categoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(category => category.id !== id);
         console.log('Category deleted successfully!');
         this.router.navigateByUrl('dashboard/categorylist');
    })
  }


}
