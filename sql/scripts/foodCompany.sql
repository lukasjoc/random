
create database if not exists foodCompany;

use foodCompany;

-- on delete cascade
-- employees: anr, anme, abteilung 
create table if not exists employees (
  employe_id integer(11) not null auto_increment primary key,
  fullname varchar(120) not null,
  department varchar(50) not null
);

-- products:wnr, wname, kategorie, gewicht, preis 
create table if not exists products (
  product_id integer(11) not null auto_increment primary key,
  prod_name varchar(120) not null, 
  category varchar(50) not null, 
  prod_weight decimal(10, 2) not null, 
  price decimal(10, 2) not null,
);

-- S: snr, sname, ortAW 
create table if not exists stores (
  store_id integer(11) not null auto_increment primary key
);

-- Mapping table between stores , products , employees
-- spe: anr, wnr, snr, menger, wname, kategorie, gewicht, preis 
create table if not exists spe (
  spe_id integer(11) not null auto_increment primary key
);
