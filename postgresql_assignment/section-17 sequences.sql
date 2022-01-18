create sequence test_sequence;
 select nextval('test_sequence')
 select currval('test_sequence')
 select lastval()
 select setval('test_sequence',15)
 select nextval('test_sequence')
 create sequence if not exists test_sequence_2 
  increment 7 start with 33
   create sequence if not exists employees_employeeid_seq
   start with 10 owned by employees.employeeid
   