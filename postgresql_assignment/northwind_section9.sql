select country,count(*) from customers group by country order by count(*)desc;
===============================================================================================================
select  categoryname,count(*) 
from categories 
join products on products.categoryid=categories.categoryid 
group by categoryname order by count (*) desc
====================================================================================================================
select productname,avg(quantity) from products
join order_details on products.productid=order_details.productid
group by productname
order by avg(quantity) desc
=====================================================================================================
select productname,round(avg(quantity)) from products
join order_details on products.productid=order_details.productid
group by productname
order by avg(quantity) desc
=====================================================================================================
select * from products
where supplierid='8';
========================================================================================================
select country, count(*) from suppliers group by country order by count(*)desc
===========================================================================================================
select productname,sum (order_details.unitprice*quantity)
from products
join order_details on products.productid= order_details.productid
join orders on orders.orderid=order_details.orderid
where orderdate between '1997-01-01'and'1997-12-31'
group by productname
order by sum (order_details.unitprice*quantity) desc
=======================================================================================================
select productname,sum(quantity*order_details.unitprice)as amountbought
from products 
join order_details using (productid)
group by productname
having sum(quantity * order_details.unitprice) < 2000
order by amountbought asc;
=============================================================================================================
select companyname,sum(quantity*order_details.unitprice)as amountbought
from customers 
natural join orders natural join order_details 
group by companyname
having sum(quantity * order_details.unitprice) > 5000
order by amountbought desc;
=====================================================================================================
select companyname,sum(quantity*order_details.unitprice)as amountbought
from customers 
natural join orders natural join order_details
where orderdate between '1997-01-01'and'1997-06-30'
group by companyname
having sum(quantity * order_details.unitprice) > 5000
order by amountbought desc;
=========================================================================================================
select categoryname,productname,sum(od.unitprice*quantity)
from categories
natural join products
natural join order_details as od
group by grouping sets ((categoryname),(categoryname,productname))
order by categoryname,productname;
=========================================================================================================
select c.companyname,categoryname,productname,sum(od.unitprice*quantity)
from customers as c
natural join orders
natural join order_details as od
join products using (productid)
join categories using (categoryid)
group by rollup(companyname,categoryname,productname)
order by productname,categoryname,productname
==========================================================================================================
select s.companyname as supplier,c.companyname as buyer,productname,sum(od.unitprice*quantity)
from suppliers as s
join products using (supplierid)
join order_details as od using (productid)
join orders using (orderid)
join customers as c using (customerid)
group by rollup(supplier,buyer,productname)
order by supplier,buyer,productname
=====================================================================================================================
select companyname,categoryname,productname,sum(od.unitprice*quantity)
from customers 
natural join orders
natural join order_details as od
join products using (productid)
join categories using (categoryid)
group by cube(companyname,categoryname,productname)
===========================================================================================================
select s.companyname as supplier,c.companyname as buyer,productname,sum(od.unitprice*quantity)
from suppliers as s
join products using (supplierid)
join order_details as od using (productid)
join orders using (orderid)
join customers as c using (customerid)
group by rollup(supplier,buyer,productname)
order by supplier nulls first,buyer  nulls first,productname  nulls first





