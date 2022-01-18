select companyname,orders.customerid,employeeid,requireddate,shippeddate,shipvia,freight,shipname,shipcity
shipregion,shippostalcode,shipcountry,order_details.*
from customers
join orders on customers.customerid=orders.customerid
join order_details on orders.orderid=order_details.orderid

select * 
from customer_order_details
where customerid='TOMSP'

create view supplier_order_details as
select companyname,suppliers.supplierid,products.productid,productname,order_details.unitprice,quantity,discount,orders.*
from suppliers
join products on suppliers.supplierid*products.supplierid
join order_details on order_details.productid*products.productid
join orders on order_details.orderid*orders.orderid

