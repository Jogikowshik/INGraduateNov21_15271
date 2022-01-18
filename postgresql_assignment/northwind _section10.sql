select companyname from customers union select companyname from suppliers
================================================================================================================
select city from customers union select city from suppliers
================================================================================================================
select city from customers union all select city from suppliers
===================================================================================================================
select country from customers union select country from suppliers order by country asc
=================================================================================================================
select city from customers union select city from suppliers order by city asc
================================================================================================================
select country from customers intersect select country from suppliers
===============================================================================================================
select count(*) from (select country from customers intersect select country from suppliers) as together
============================================================================================================
select city from customers intersect select city from suppliers
=============================================================================================================
select count(*) from  (select country from customers intersect all select country from suppliers)as same_city
==============================================================================================================
select country from customers except select country from suppliers
==============================================================================================================
select count(*) from (select country from customers except all select country from suppliers) as lonely_customers
===============================================================================================================
select city from customers except select city from suppliers
==============================================================================================================
select count(*) from(select city from customers intersect select city from suppliers) as lonely_customers