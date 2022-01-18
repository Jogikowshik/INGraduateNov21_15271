create unique index idx_employees_employeeid
on employees (employeeid);
--------------------------------------------------------------
create unique index idx_orders_customerid_orderid
on orders (customerid,orderid);
---------------------------------------------------------------
drop index idx_employees_employeeid;
----------------------------------------------------------------
drop index  idx_orders_customerid_orderid;
---------------------------------------------------------------
drop table if exists performance_test;
create table performance_test(
id serial,
location text);

insert into performance_test (location)
select 'katmandu,nepal' from generate_series(1,500000000);
---------------------------------------------------------------------------
insert into performance_test (location)
select mds(random()::text) from generate_series(1,000000000);
--------------------------------------------------------------------------------------
select count(*)
from performance_test;
-------------------------------------------------------------------------------------------------------
select *
from performance_test
where id = 2000000;
-----------------------------------------------------------------------------------------------------------
explain select count(*)
from performance_test;
---------------------------------------------------------------------------------------------------------
explain select *
from performance_test
where id = 2000000;
---------------------_------------------------------------------------------------------------------------
create table performance_test_id on performance_test (id);
---------------------------------------------------------------------------------------------------------
explain analyze select * from performance_test
where id=2000000
analyze performance_test;
-----------------------------------------------------------------------------------------------------------------
explain select *
from performance_test
where location like 'ab%'
-------------------------------------------------------------------------------------------------------------
select pg_relation_size('performance_test'),
pg_size_pretty(pg_relation_size('performance_test'))
------------------------------------------------------------------------------------------------------------------
select relpages * current_setting('seq_page_cost')::numeric,
reltuples
from pg_class
where relname='performance_test';
-------------------------------------------------------------------------------------------------------------------
select relpages * current_setting('seq_page_cost')::numeric
from pg_class
where relname='performance_test'
----------------------------------------------------------------------------------------------------------------
show cpu_tuple_cost
----------------------------------------------------------------------------------------------------------------
show cpu_operator_cost
----------------------------------------------------------------------------------------------------------------
select relpages * current_setting('seq_page_cost')::numeric,
(reltuples * (current_setting('cup_tuple_cost')::numeric *
			 current_setting('cup_operator_cost')::numeric))
from pg_class
where relname='performance_test';
--------------------------------------------------------------------------------------------------------------
set max_parallel_workers_per_gather = 2;
explain select *
from performance_test
where location like 'ab%'
-----------------------------------------------------------------------------------------------------------------
show parallel_tuple_cost
-------------------------------------------------------------------------------------------------------
alter table performance_test
add column name text
------------------------------------------------------------------------------------
update performance_test
set name = md5(location);
-----------------------------------------------------------------------------------
explain analyze select * 
from  performance_test
where location  like 'df%' and name like 'cf%'
-----------------------------------------------------------------
create index idx_ performance_test_location_name
on  performance_test (location,name);
----------------------------------------------------------------------------------------------------------------------
explain analyze select * 
from  performance_test
where location  like 'df%' 
------------------------------------------------------------
explain analyze select * 
from  performance_test
where location  like 'cf%' 
----------------------------------------------
explain  select * 
from  production.product
where name like 'flats'
-----------------------------------------------
explain  select * 
from  production.product
where upper (name) like upper ('flats')
--------------------------------------------------------
create index idx_ performance_fullname
on   production.product {([firstname]'**'[lastname])};
----------------------------------------------------------------------
create index idx_ performance_test_location_name
on  performance_test (location,name);




