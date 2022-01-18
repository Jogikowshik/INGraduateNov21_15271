create table subscribers (
   firstname varchar(200),
    lastname varchar(200),
	email varchar(250),
	signupdate timestamp,
	frequency integer,
	iscustomer boolean
) 
----------------------------------------------------------------
create table returns (
    returnid serial,
	customerid char(5),
	datareturned timestamp,
	productid int,
	quantity smallint,
	orderid integer
)
---------------------------------------------------------------------------------------------
alter table subscribers
rename firstname to first_name;
---------------------------------------------------------------------------------------------------
alter table returns
rename returndate to return_date;
----------------------------------------------------------------------------------------------------------------------
alter table subscribers
rename to email_subscribers;
----------------------------------------------------------------------------------------------------
alter table returns
rename to bad_returns;
------------------------------------------------------------------------------------------------------
alter table email_subscribers
add column last_visit_date timestamp;
--------------------------------------------------------------------------------------------------------
alter table bad_returns
add column reason text;
-----------------------------------------------------------------------------------------------------------------------
alter table email_subscribers
alter column email set date type varchar(225);
----------------------------------------------------------------------------------------------------------------
--drop table email_subscribers;
-------------------------------------------------------------------------------------------------------



















