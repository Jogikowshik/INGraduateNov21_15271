import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IOrder } from '../orders-list/IOrder';
import{OrderService}from '../services/order.service';
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  Order:IOrder[]=[];
  displayedColumns: string[] = ['productId','customerId', 'orderDate','orderAddress', 'totalAmount'];
  dataSource = new MatTableDataSource<IOrder>(this.Order);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private orderService :OrderService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getOrders();
  }
  getOrders():void
  {
     this.orderService.getOrders().subscribe(all_orders=>this.dataSource.data=all_orders);
   }
  //  deleteOrder(id:number){
  //   this.orderService.delete(id).subscribe(res => {
  //        this.Order = this.Order.filter(Order => Order.id !== id);
  //   })
  // }
}
