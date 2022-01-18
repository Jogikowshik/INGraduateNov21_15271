select distinct country,city from suppliers order by country desc, city asc
------------------------------------------------------------------------------------------------------------
select productname,unitprice from products order by country desc, city asc
---------------------------------------------------------------------------------------------------------------
select min(orderdate)from orders where shipcountry='Italy';
-----------------------------------------------------------------------------------------------------------
select max(shippeddate)from orders where shipcountry='Canada';
------------------------------------------------------------------------------------------------------------------
select max(shippeddate-orderdate)from orders where shipcountry='France';
------------------------------------------------------------------------------------------------------------
select avg(freight)from orders where shipcountry='France';
select sum(quantity) from order_details where productid=14;
select avg(quantity) from order_details where productid=35;
-----------------------------------------------------------------------------------------------------------
select companyname,contactname from customers where contactname like '%d';
--------------------------------------------------------------------------------------------------------------
select unitprice*quantity as toatalspent from order_details;
--------------------------------------------------------------------------------------------------------------
select productid,unitprice*quantity as Totalcost from order_details order by Totalcost desc limit 3;
------------------------------------------------------------------------------------------------------------
select productname,unitprice*unitsinstock as Totalinventory from products order by Totalinventory desc limit 2;
---------------------------------------------------------------------------------------------------------------------
select count(*) from customers where region is null;
-------------------------------------------------------------------------------------------------------------------
select count(*) from suppliers where region is not null;
---------------------------------------------------------------------------------------------------------------
select count(*) from orders where shipregion is null;


