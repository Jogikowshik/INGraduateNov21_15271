select * from employees;
--------------------
select companyname,city,country from suppliers;
---------------------------------------------------
select distinct country,customerid,city from customers;
---------------------------------------------------
select count (distinct city) from  customers;
------------------------------------------------------
select customerid,shippeddate - orderdate from orders;
------------------------------------------------------
select orderid,unitprice*quantity from order_details;
-----------------------------------------------------
select companyname,contactname from customers where country='Mexico';
-------------------------------------------------------------------
select count(*) from orders where employeeid=4;
---------------------------------------------------------------------
select count(*) from order_details where quantity>20;
-------------------------------------------------------------
select count(*) from orders where orderdate >= '1998-01-01';
----------------------------------------------------------------
select count(*) from orders where shippeddate < '1997-07-05';
---------------------------------------------------------------
select count(*) from orders where shipcountry='USA' or shipcountry='argentina'
---------------------------------------------------------------
select count(*) from customers where country='USA' or country='Canada'
---------------------------------------------------------------
select count(*) from customers where not country='France'
---------------------------------------------------------------
select count(*) from suppliers where not country='USA'
---------------------------------------------------------------
select count(*) from orders where  shipcountry='France' and (freight<50 or freight>175)
---------------------------------------------------------------
select count(*) from order_details where unitprice between 10 and 20;
---------------------------------------------------------------
select count(*) from orders where shippeddate between '1996-06-01' and '1996-09-30';
---------------------------------------------------------------
select count(*) from suppliers where country in ('germany','France','Spain','Italy')
---------------------------------------------------------------
select productid,productname,supplierid from products order by supplierid;
---------------------------------------------------------------
select count(*) from products;
-----  --------
SELECT supplierid,COUNT(productid)
FROM products
GROUP BY supplierid
ORDER BY supplierid;
-------------------------
select distinct country,region from customers;
-------------
select country,count(region) from customers group by country;
SELECT reportsto, COUNT(employeeid)
 FROM public.employees
 GROUP BY reportsto;
 ---------------------------------------------------------------
SELECT reportsto, COUNT(employeeid)
 FROM public.employees
 where reportsto is not null
   GROUP BY reportsto;
   ----------------------------------------------
SELECT reportsto, COUNT(employeeid)
 FROM public.employees
 where reportsto is not null
   GROUP BY reportsto
   HAVING COUNT(employeeid)>3;
 -----------------------------------------------
  SELECT reportsto, COUNT(employeeid)
 FROM public.employees
 where reportsto is not null
   GROUP BY reportsto
   HAVING COUNT(employeeid)>3;
-----------------------------------------------------------------------------
SELECT region,COUNT(employeeid)
FROM public.employees
WHERE region IS NOT NULL
GROUP BY region;



