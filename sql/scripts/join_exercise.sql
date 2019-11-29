Connect mysql;

DROP DATABASE IF EXISTS Elektro_Markt;
create database Elektro_Markt CHARACTER SET utf8;
use Elektro_Markt;

create table FILIALE(Nr integer not null,Ort varchar(50),Telefon integer,Flaeche integer,Leiter integer,PRIMARY KEY(Nr));

insert into FILIALE values (0,'Zentrale',43441,0,6);
insert into FILIALE values (1,'München-West',444321,2500,23);
insert into FILIALE values (2,'München-Süd',727772,4000,404);
insert into FILIALE values (3,'Nürnberg',409040,1900,320);
insert into FILIALE values (4,'Augsburg',60944,3400,101);
insert into FILIALE values (5,'Kempten',38999,3400,122);
insert into FILIALE values (6,'Passau',33991,1200,445);
insert into FILIALE values (7,'Ulm',15677,2800,567);

create table MITARBEITER(Nr integer not null,Name varchar(50),Vorname varchar(50),Abteilung varchar(50),Filiale integer,Vorgesetzter integer,PRIMARY KEY(Nr),FOREIGN KEY (FILIALE) REFERENCES FILIALE(Nr) ON DELETE CASCADE,FOREIGN KEY (Vorgesetzter) REFERENCES MITARBEITER(Nr) ON DELETE CASCADE);

insert into MITARBEITER values (887,'Galgani','Pius','Stellv. Filialleiter',1,null);
insert into MITARBEITER values (6,'Danner','Hans','Leiter Zentrale',0,null);
insert into MITARBEITER values (320,'Donat','Peter','Filialleiter',3,null);
insert into MITARBEITER values (404,'Wagner','Otto','Filialleiter',2,null);
insert into MITARBEITER values (101,'Bauer','Matthias','Filialleiter',4,null);
insert into MITARBEITER values (445,'Immler','Michael','Filialleiter',6,null);
insert into MITARBEITER values (441,'Echter','Anne','Filialleiterin',5,null);
insert into MITARBEITER values (23,'Frisch','Katarina','Filialleiterin',1,null);
insert into MITARBEITER values (567,'Jaeger','Paula','Filialleiterin',7,null);
insert into MITARBEITER values (122,'Hauber','Mandana','Filialleiterin',5,null);
insert into MITARBEITER values (888,'Hilber','Susanne','Management',1,null);
insert into MITARBEITER values (300,'Becker','Lars','Lager',4,101);
insert into MITARBEITER values (490,'Aziz','Yesim','Abt.Leiter PC',4,101);
insert into MITARBEITER values (1220,'Adlmann','Sylvia','Buchhaltung',0,6);
insert into MITARBEITER values (620,'Vils','Armin','Stellv. Abt.Leiter',4,101);
insert into MITARBEITER values (24,'Haug','Hannes','Stellv. Filialleiter',5,441);
insert into MITARBEITER values (355,'Angerer','Helmut','Verkauf Haushalt',1,887);
insert into MITARBEITER values (568,'Frey','Elke','Verkauf PC',4,490);
insert into MITARBEITER values (1303,'Ackermann','Boris','Verkauf PC',4,620);
insert into MITARBEITER values (994,'Burstedt','Annika','Verkauf Tele',1,23);
insert into MITARBEITER values (616,'Eberle','Walter','Verkauf Tele',1,994);
insert into MITARBEITER values (132,'Fiener','Thomas','Verkaufsleiter Haushalt',3,320);
insert into MITARBEITER values (222,'Abele','Siglinde','Verkauf Haushalt',3,132);


create table GROSSHAENDLER(Nr integer not null,Name varchar(50),Branche varchar(50),Ansprechpartner varchar(50),Tel integer,PRIMARY KEY(Nr));

insert into GROSSHAENDLER values (100,'CompX','PC','Hr. Wiese',43233);
insert into GROSSHAENDLER values (101,'Computer3000','PC','Fr. Winter',848823);
insert into GROSSHAENDLER values (102,'Köhlmann','Haushalt','Hr. Köhlmann',303044);
insert into GROSSHAENDLER values (103,'E-Xpert','Telekommu','Hr. Brunner-Ebb',2030499);
insert into GROSSHAENDLER values (104,'Telwings','Telekommu','Fr. Feyer',98738);
insert into GROSSHAENDLER values (105,'FeinMIX','Haushalt','Fr. Lass',99832);

create table BELIEFERT(
  Haendler integer not null,
  Filiale integer not null,
  PRIMARY KEY(Haendler, Filiale),
  FOREIGN KEY (Haendler) REFERENCES GROSSHAENDLER(Nr) ON DELETE CASCADE,
  FOREIGN KEY (Filiale) REFERENCES FILIALE(Nr) ON DELETE CASCADE);

insert into BELIEFERT values (100,1);
insert into BELIEFERT values (100,2);
insert into BELIEFERT values (100,4);
insert into BELIEFERT values (101,3);
insert into BELIEFERT values (101,6);
insert into BELIEFERT values (102,4);
insert into BELIEFERT values (102,7);
insert into BELIEFERT values (103,1);
insert into BELIEFERT values (103,2);
insert into BELIEFERT values (103,7);
insert into BELIEFERT values (105,2);
insert into BELIEFERT values (105,3);
insert into BELIEFERT values (104,4);

ALTER TABLE FILIALE ADD CONSTRAINT `FK_filiale_1` FOREIGN KEY `FK_filiale_1` (`Leiter`) REFERENCES MITARBEITER (`Nr`) on delete cascade;
