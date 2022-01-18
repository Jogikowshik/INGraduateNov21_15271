select * from orders
where customerid='VIENT'
---------------------------------------------------------------------------------------------
select max(orderid)
from orders
----------------------------------------------------------------------------------------------
insert into orders
(orderid,customerid,employeeid,orderdate,requireddate,shipvia,freight,shipname,shipaddress,shipcity,shippostalcode,shipcountry)
values(11077,'Vinet',4,'2017-09-30','2017-09-30',3,42.5,'Vins et alcools chevalier','59 rue de l''Abbaye','Reims','51100','France')
-------------------------------------------------------------------------------------------------------
update orders 
set requireddate='2017-09-20',freight=50
where orderid=11078;
-----------------------------------------------------------------------------------------------------------
update order_details 
set quantity=40,discount=05
--------------------------------------------------------------------------------------------------------------
select * from order_details
where orderid=11077;
------------------------------------------------------------------------------------------------------------
update order_details 
set quantity=40,discount=05
where orderid=11078 and productid=11;
------------------------------------------------------------------------------------------------------------
delete from order_details
where orderid=11078 and productid=11;
---------------------------------------------------------------------------------------------------------------
delete from orders
where orderid=11078
---------------------------------------------------------------------------------------------------------
select * 
into orders_1997
from orders
where orderdate between '1997-01-01' and '1997-12-31'
------------------------------------------------------------------------------------------------------------
insert into suppliers_northamerica
select *
from suppliers
where country in ('Brazil','Argentina')
------------------------------------------------------------------------------------------------------------
insert into orders_1997
select * from orders 
where orderdate between '1996-12-01' and '1996-12-31'
-----------------------------------------------------------------------------------------------------
insert into employees
(firstname,lastname,title,employeeid,reportsto)
values ('Bob','Smith','Mr Big',50,2)
returning employeeid
---------------------------------------------------------------------------------------------------------
insert into orders (customerid,employeeid,requireddate,shippeddate,orderid)
values('VIENT',5,'1996-08-01','1996-08-10',501)
returning orderid
-----------------------------------------------------------------------------------------------------------
update products
set unitprice=unitprice*1.2
where productid=1
returning productid,unitprice as new_price
------------------------------------------------------------------------------------------------------------
delete from employees
where employeeid=50
returning *
