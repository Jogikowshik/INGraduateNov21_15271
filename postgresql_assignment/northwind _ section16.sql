drop table practices;

create table pets(
    petid integer primary key,
	name varchar(50) not null
);
-------------------------------------------------------------------------------------------------------
insert into practices (practiceid )
values(1)
-----------------------------------------------------------------------------------------------------------------
alter table practices
drop constraint practices_pkey;
------------------------------------------------------------------------------------------------
create table practices (
   practiceid integer foreign key,
	practicefield varchar(50)
)
-----------------------------------------------------------------------------
create table students (Sno integer constraint sno_unq unique);
insert into students values(4);
select * from students 
drop table students
-----------------------------------------------------------------------------------------------------------------------
create table students (Sno integer,JDate  default   );
-----------------------------------------------------------------------------------
alter table students
drop constraint sno_unq
-------------------------------------------------------------------------



