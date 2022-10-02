CREATE DATABASE IF NOT EXISTS banksys;

USE banksys;

CREATE TABLE tgl_movimientos(
    id INT(11) NOT NULL AUTO_INCREMENT, 
    fecreal DATETIME DEFAULT NULL, 
    cuecod INT (10) NOT NULL,
    comro INT (10) NOT NULL,
    importe decimal (18, 2) NOT NULL,
    PRIMARY KEY(id) );
 
CREATE TABLE tgl_solic_movim(
    id INT(11) NOT NULL AUTO_INCREMENT, 
    cantMov INT(3) NOT NULL, 
    confirmada smallint NOT NULL,
    PRIMARY KEY(id) );    
    

show tables;

describe tgl_movimientos;

insert into tgl_movimientos 
values (1,'20220101', 1000, 1111, 5000.99);

insert into tgl_movimientos 
values (2,'20220102', 2000, 2222, 6000.99);

insert into tgl_movimientos values
 (3,'20220102', 3000, 3333, 7000.99),
 (4,'20220102', 4000, 4444, 8000.99),
 (5,'20220102', 5000, 5555, 9000.99),
 (6,'20220102', 6000, 6666, 10000.99);

select * from tgl_movimientos;


insert into tgl_solic_movim values
 (1, 50, 0),
 (2, 100, 0),
 (3, 500, 0),
 (4, 999, 0);

select * from tgl_solic_movim