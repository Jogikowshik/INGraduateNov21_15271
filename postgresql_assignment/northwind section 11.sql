select companyname from customers where exists (select customerid from orders where orders.customerid=customers.
											   customerid and orderdate between '1997-04-01' and '1997-04-30' )
===============================================================================================================
select companyname from customers where not exists (select customerid from orders where orders.customerid=customers.
											   customerid and orderdate between '1997-04-01' and '1997-04-30' )
===============================================================================================================
select producname from products where not exists (select productid from order_details join on orders. order_details.productid=products.
												  orderid where order_details.productid=products.productid and orderdate
												  between '1997-04-01' and '1997-04-30')
===============================================================================================================
select companyname from suppliers where exists (select productid from products where products.supplierid=suppliers
											   .supplierid and unitprice>200 )
===================================================================================================================
select companyname from suppliers
where not exists (select products.productid from products join order_details on order_details.productid+products.productid
			  join orders on orders.orderid=order_details.orderid
			  where products.supplierid=suppliers
											   .supplierid and orderdate between '1996-12-31' )
=============================================================================================================================
select companyname from suppliers
where not exists (select products.productid from products join order_details on order_details.productid+products.productid
			  join orders on orders.orderid=order_details.orderid
			  where products.supplierid=suppliers
											   .supplierid and orderdate>50)
											   =========================================
select companyname from customers where country in (select country from suppliers)	
==========================================================================================================
select companyname from customers where city in (select city from suppliers)	
============================================================================================================											   
											   