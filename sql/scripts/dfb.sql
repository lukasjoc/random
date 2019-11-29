use dfb

--ort
create table if not exists ort (
	o_id integer not null primary key auto_increment,
	plz varchar(30) not null,
	ort varchar(30) not null
)

--liga
create table if not exists liga (
	l_id integer not null primary key auto_increment,
	beschreibung varchar(40)
) 
 
-- verein
create table if not exists verein (
	v_id not null primary key auto_increment,
	name varchar(50) not null,
	strasse varchar(30),
	o_id integer reference
	logo varbinary
)
