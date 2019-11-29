# $Id: create_table_fb_mit_werten.sql 1107 2013-06-01 09:50:23Z michael $
#
create database if not exists FB;
USE FB;

/* Grundeinstellungen */
SET NAMES utf8;

/* FK-/UNIQUE-Check ausschalten */
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;

/* Tabellen löschen */
DROP TABLE IF EXISTS VEREIN;
DROP TABLE IF EXISTS SPIELER;
DROP TABLE IF EXISTS ZT_SPIEL_SPIELER;
DROP TABLE IF EXISTS ORT;
DROP TABLE IF EXISTS PLATZ_STADION;
DROP TABLE IF EXISTS MANNSCHAFT;
DROP TABLE IF EXISTS ZT_SPIEL_MANNSCHAFT;
DROP TABLE IF EXISTS SPIEL;
DROP TABLE IF EXISTS KATEGORIE;
DROP TABLE IF EXISTS GROESSE_SPIELFELD;
DROP TABLE IF EXISTS LIGA;

/* Tabellen erstellen */
CREATE TABLE VEREIN(
   V_ID INTEGER NOT NULL AUTO_INCREMENT,
   Name VARCHAR(50) NOT NULL,
   Strasse VARCHAR(50),
   O_ID INTEGER,
   /*Logo VARBINARY*/
   PRIMARY KEY (V_ID)
) ENGINE=InnoDB;

CREATE TABLE SPIELER(
   S_ID INTEGER NOT NULL AUTO_INCREMENT,
   M_ID INTEGER,
   Name VARCHAR(30) NOT NULL,
   Vorname VARCHAR (30),
   Ruecken_Nr TINYINT(2) NOT NULL,
   GebDat DATE NOT NULL,
   Geschlecht VARCHAR(8),
   Gehalt_monatl DECIMAL(12,2),
   PRIMARY KEY (S_ID)
) ENGINE=InnoDB;

CREATE TABLE ZT_SPIEL_SPIELER(
   S_ID INTEGER,
   SP_ID INTEGER,
   Tore TINYINT(2),
   roteKarte TINYINT (2),
   gelbeKarte TINYINT (2),
   PRIMARY KEY (S_ID, SP_ID)
) ENGINE=InnoDB;

CREATE TABLE ORT(
   O_ID INTEGER NOT NULL AUTO_INCREMENT,
   PLZ VARCHAR(10),
   Ort VARCHAR(30),
   PRIMARY KEY (O_ID)
) ENGINE=InnoDB;

CREATE TABLE PLATZ_STADION(
   P_ID INTEGER NOT NULL AUTO_INCREMENT,
   TYP VARCHAR(30),
   Zuschauerplaetze INTEGER,
   Gr_ID INTEGER,
   STRASSE VARCHAR(30),
   O_ID INTEGER,
   PRIMARY KEY (P_ID)
) ENGINE=InnoDB;

CREATE TABLE MANNSCHAFT(
   M_ID INTEGER NOT NULL AUTO_INCREMENT,
   MannschName VARCHAR(50),
   V_ID INTEGER,
   K_ID INTEGER,
   L_ID INTEGER,
   PRIMARY KEY (M_ID)
) ENGINE=InnoDB;

CREATE TABLE ZT_SPIEL_MANNSCHAFT(
   M_ID INTEGER,
   SP_ID INTEGER,
   Tore INTEGER NOT NULL,
   Punkte TINYINT NOT NULL,
   Heimmannschaft BOOLEAN,
   PRIMARY KEY (M_ID, SP_ID)
) ENGINE=InnoDB;

CREATE TABLE SPIEL(
   SP_ID INTEGER NOT NULL AUTO_INCREMENT,
   Tag DATE NOT NULL,
   Uhrzeit TIME,
   Ergebnis VARCHAR(5) NOT NULL,
   P_ID INTEGER,
   Spieltag TINYINT(3),
   Zuschauerzahl INTEGER,
   L_ID INTEGER,
   PRIMARY KEY (SP_ID)
) ENGINE=InnoDB;

CREATE TABLE KATEGORIE(
   K_ID INTEGER NOT NULL AUTO_INCREMENT,
   Beschreibung VARCHAR(255),
   Gr_ID INTEGER,
   Spielerzahl TINYINT NOT NULL,
   Torgroesse VARCHAR(20),
   PRIMARY KEY (K_ID)
) ENGINE=InnoDB;

CREATE TABLE GROESSE_SPIELFELD(
   Gr_ID INTEGER NOT NULL AUTO_INCREMENT,
   Beschreibung VARCHAR(255),
   Laenge INTEGER NOT NULL,
   Breite INTEGER NOT NULL,
   PRIMARY KEY (Gr_ID)
) ENGINE=InnoDB;

CREATE TABLE LIGA(
   L_ID INTEGER NOT NULL AUTO_INCREMENT,
   Beschreibung VARCHAR(255) NOT NULL,
   PRIMARY KEY (L_ID)
) ENGINE=InnoDB;

/* FKs hinzufügen */
ALTER TABLE VEREIN
   ADD FOREIGN KEY (O_ID)
   REFERENCES ORT (O_ID);

ALTER TABLE SPIELER
   ADD FOREIGN KEY (M_ID)
   REFERENCES MANNSCHAFT (M_ID);

ALTER TABLE ZT_SPIEL_SPIELER
   ADD FOREIGN KEY (S_ID)
   REFERENCES SPIELER (S_ID);

ALTER TABLE ZT_SPIEL_SPIELER
   ADD FOREIGN KEY (SP_ID)
   REFERENCES SPIEL (SP_ID);

ALTER TABLE PLATZ_STADION
   ADD FOREIGN KEY (Gr_ID)
   REFERENCES GROESSE_SPIELFELD (Gr_ID);

ALTER TABLE PLATZ_STADION
   ADD FOREIGN KEY (O_ID)
   REFERENCES ORT (O_ID);

ALTER TABLE ZT_SPIEL_MANNSCHAFT
   ADD FOREIGN KEY (M_ID)
   REFERENCES MANNSCHAFT (M_ID);

ALTER TABLE ZT_SPIEL_MANNSCHAFT
   ADD FOREIGN KEY (SP_ID)
   REFERENCES SPIEL (SP_ID);

ALTER TABLE SPIEL
   ADD FOREIGN KEY (P_ID)
   REFERENCES PLATZ_STADION (P_ID);

ALTER TABLE SPIEL
   ADD FOREIGN KEY (L_ID)
   REFERENCES LIGA (L_ID);

ALTER TABLE KATEGORIE
   ADD FOREIGN KEY (Gr_ID)
   REFERENCES GROESSE_SPIELFELD (Gr_ID);

ALTER TABLE MANNSCHAFT
   ADD FOREIGN KEY (V_ID)
   REFERENCES VEREIN (V_ID);

ALTER TABLE MANNSCHAFT
   ADD FOREIGN KEY (L_ID)
   REFERENCES LIGA (L_ID);

ALTER TABLE MANNSCHAFT
   ADD FOREIGN KEY (K_ID)
   REFERENCES KATEGORIE (K_ID);

/* Daten hinzufügen */
INSERT INTO VEREIN (V_ID, Name, Strasse, O_ID) VALUES
(1,"FC Bayern München AG","Säbener Straße 51-57",1),
(2,"Borussia VfL 1900 Mönchengladbach GmbH","Hennes-Weisweiler-Allee 1",3),
(3,"TSV 1860 München GmbH & Co. KG aA","Grünwalder Straße 114",1),
(4,"SSV Jahn 2000 Regensburg GmbH & Co. KGaA","Prüfeninger Str. 57a",5),
(5,"Sport-Club Freiburg e.V.","Schwarzwaldstr. 193",6),
(6,"Bayer 04 Leverkusen Fußball GmbH","Bismarckstr. 122 - 124",7),
(7,"Borussia Dortmund GmbH & Co. KGaA","Rheinlanddamm 207-209",8),
(8,"Eintracht Frankfurt Fußball AG","Mörfelder Landstraße 362",10),
(9,"Sport-Club Freiburg e.V.","Schwarzwaldstr. 193",11),
(10,"1. FSV Mainz 05 e. V.","Isaac-Fulda-Allee 5",12),
(11,"FC Schalke 04 e.V","Ernst-Kuzorra-Weg 1",13),
(12,"VfB Stuttgart 1893 e.V.","Mercedesstraße 109",14),
(13,"Hamburger Sport-Verein e.V.","Sylvesterallee 7",15),
(14,"SV Grasshopper Dorfmühle","Dorfstr. 1",17),
(15,"FC Hertha München e.V.","Höglwörther Straße 219",19),
(16,"FC Neuhadern","Wolkerweg 17",20),
(17,"FC Olympia Moosach e.V.","Saarlouiser Str. 86",21),
(18,"FC Stern München 1919 e.V.","Feldbergstraße 65",22),
(19,"MTV-München von 1879 e.V.","Häberlstraße 11b",23),
(20,"Münchner Sportvereinigung von 1906 e.V.","Görzer Str. 55",24),
(21,"FC Rot-Weiß Oberföhring e.V.","Johanneskirchner STr. 72",25),
(22,"SC Bogenhausen","Fritz-Lutz-Straße 23",26),
(23,"SC München 50 e.V.","Werner-Freimann-Bogen 14",27),
(24,"1. FC Nürnberg, Verein für Leibesübungen e.V","Valznerweiherstraße 200",28),
(25,"TSG 1899 Hoffenheim Fußball-Spielbetriebs GmbH","Dietmar-Hopp-Sportpark, Horrenberger Straße 58",29),
(26,"FC Augsburg 1907 GmbH & Co. KGaA","Donauwörther Str. 170",30),
(27,"Fortuna Düsseldorf","Arena-Straße 1",31),
(28,"1. FC St. Pauli e.V.","Elballee 17",32),
(29,"Hannover 96 GmbH & Co. KGaA","Robert-Enke-Straße 1",33),
(30,"SV Werder Bremen GmbH & Co. KGaA","Franz-Böhmert-Straße 1c",34),
(31,"SpVgg Greuther Fürth GmbH & Co. KGaA","Laubenweg 60",35),
(32,"VfL Wolfburg-Fußball GmbH","In den Allerwiesen 1",36); 

INSERT INTO MANNSCHAFT VALUES
(1,"FC Bayern Profis Herren",1,2,1),
(2,"Borussia Mönchengladbach Profis Herren",2,2,1),
(3,"1860 München Profis Herren",3,2,3),
(4,"SSV Jahn Regensburg Profis Herren",4,2,3),
(5,"FC Bayern Profis Damen",1,1,2),
(6,"SC Freiburg Profis Damen",5,1,2),
(7,"Bayer 04 Leverkusen Profis Herren",6,2,1),
(8,"Borussia Dortmund Profis Herren",7,2,1),
(9,"Eintracht Frankfurt Profis Herren",8,2,1),
(10,"SC Freiburg Profis Herren",9,2,1),
(11,"Mainz 05 Profis Herren",10,2,1),
(12,"FC Schalke 04 Profis Herren",11,2,1),
(13,"VfB Stuttgart Profis Herren",12,2,1),
(14,"Hamburger SV Profis Herren",13,2,1),
(15,"Fortuna Düsseldorf Profis Herren",27,2,1),
(16,"ST. Pauli Profis Herren",28,2,3),
(17,"Hannover 96 Profis Herren",29,2,1),
(18,"SV Werder Bremen Profis Herren",30,2,1),
(19,"Greuther Fürth Profis Herren",31,2,1),
(20,"VfL Woflsburg Profis Herren",32,2,1),
(21,"FC Bayern Profis Herren 2. Mannschaft",1,2,3),
(22,"SV Grashopper Dorfmühle B-Jugend 1",14,4,5),
(23,"FC Herta München 1. Mannschaft",15,2,9),
(24,"FC Neuhadern 1. Mannschaft",16,2,9),
(25,"FC Olympia Moosach 1. Mannschaft",17,2,9),
(26,"FC Stern München 1. Mannschaft",18,2,9),
(27,"MTV-München 1. Mannschaft",19,2,9),
(28,"Münchner SportVgg 1906 1. Mannschaft",20,2,9),
(29,"Rot-Weiß Oberföhring 1. Mannschaft",21,2,9),
(30,"SC Bogenhausen 1. Mannschaft",22,2,9),
(31,"SC München 50 1. Mannschaft",23,2,9),
(32,"1. FC Nürnberg Profis Herren",24,2,1),
(33,"1899 Hoffenheim Profis Herren",25,2,1),
(34,"FC Augsburg Profis Herren",26,2,1),
(35,"FC Bayern C-Jugend w, 1. Mannschaft",1,5,12),
(36,"FC Bayern D-Juniorinnen",1,7,10),
(37,"FC Augsburg C-Jugend weiblich",26,5,12),
(38,"FC Augsburg D-Juniorinnen",26,7,11),
(39,"1. FC Nürnberg C-Juniorinnen",24,5,12),
(40,"1. FC Nürnberg D-Juniorinnen",24,7,10);

INSERT INTO ZT_SPIEL_MANNSCHAFT VALUES
(1,1,1,1,true),
(2,1,1,1,false),
(3,2,1,3,true),
(4,2,0,0,false),
(5,3,0,0,true),
(6,3,2,3,false),
(7,4,3,3,true),
(14,4,0,0,false),
(11,5,3,3,true),
(13,5,0,0,false),
(12,6,1,0,true),
(10,6,3,3,false),
(11,61,0,0,true),
(12,61,2,3,false),
(8,7,2,3,true),
(18,7,1,0,false),
(2,8,2,3,true),
(33,8,1,0,false),
(10,9,1,1,true),
(11,9,1,1,false),
(34,10,0,0,true),
(15,10,2,3,false),
(14,11,0,0,true),
(32,11,1,3,false),
(19,12,0,0,true),
(1,12,3,3,false),
(9,13,2,3,true),
(7,13,1,0,false),
(13,14,0,0,true),
(20,14,1,3,false),
(17,15,2,1,true),
(12,15,2,1,false),
(11,16,0,0,true),
(19,16,1,3,false),
(12,17,3,3,true),
(34,17,1,0,false),
(7,18,2,3,true),
(10,18,0,0,false),
(18,19,2,3,true),
(14,19,0,0,false),
(32,20,1,1,true),
(8,20,1,1,false),
(33,21,0,0,true),
(9,21,4,3,false),
(15,22,0,0,true),
(2,22,0,0,false),
(20,23,0,0,true),
(17,23,4,3,false),
(1,24,6,3,true),
(13,24,1,0,false),
(34,25,0,0,true),
(20,25,0,0,false),
(8,26,3,3,true),
(7,26,0,0,false),
(1,27,3,3,true),
(11,27,1,0,false),
(2,28,2,0,true),
(32,28,3,3,false),
(13,29,0,0,true),
(15,29,0,0,false),
(17,30,3,3,true),
(18,30,2,0,false),
(19,31,0,0,true),
(12,31,2,3,false),
(10,32,5,3,true),
(33,32,3,0,false),
(9,33,3,3,true),
(14,33,2,0,false),
(32,34,1,0,true),
(9,34,2,3,false),
(12,35,0,0,true),
(1,35,2,3,false),
(20,36,1,1,true),
(19,36,1,1,false),
(11,37,2,3,true),
(34,37,0,0,false),
(14,38,2,3,true),
(8,38,2,0,false),
(15,39,0,1,true),
(10,39,0,1,false),
(7,40,1,1,true),
(2,40,1,1,false),
(18,41,2,1,true),
(13,41,2,1,false),
(33,42,3,3,true),
(17,42,1,0,false),
(1,43,3,3,true),
(20,43,0,0,false),
(12,44,3,3,true),
(11,44,0,0,false),
(19,45,0,0,true),
(15,45,2,3,false),
(9,60,3,1,true),
(8,60,3,1,false),
(2,46,2,1,true),
(14,46,2,1,false),
(13,47,0,0,true),
(33,47,3,3,false),
(17,48,4,3,true),
(32,48,1,0,false),
(10,49,1,0,true),
(18,49,2,3,false),
(34,50,1,0,true),
(7,50,3,3,false),
(15,51,2,1,true),
(12,51,2,1,false),
(7,52,2,3,true),
(19,52,0,0,false),
(18,53,0,0,true),
(1,53,2,3,false),
(32,54,0,0,true),
(13,54,2,3,false),
(33,55,0,1,true),
(34,55,0,1,false),
(14,56,1,3,true),
(17,56,0,0,false),
(8,57,5,3,true),
(2,57,0,0,false),
(9,58,2,3,true),
(10,58,1,0,false),
(20,59,2,3,true),
(11,59,2,3,false);

INSERT INTO SPIEL VALUES
(1,"2012-12-14","20:30:00","1:1",2,17,64989,1),
(2,"2012-08-04","13:00:00","1:0",4,1,26976,3),
(3,"2012-11-11","14:00:00","0:2",5,9,8576,2),
(4,"2012-12-15","15:30:00","3:0",6,17,33301,1),
(5,"2012-12-15","15:30:00","3:1",10,17,35001,1),
(6,"2012-12-15","18:30:00","1:3",9,17,55001,1),
(7,"2012-08-24","20:30:00","2:1",7,1,48987,1),
(8,"2012-08-25","15:30:00","2:1",4,1,24799,1),
(9,"2012-08-25","15:30:00","1:1",5,1,32100,1),
(10,"2012-08-25","15:30:00","0:2",11,1,30560,1),
(11,"2012-08-25","15:30:00","0:1",12,1,44700,1),
(12,"2012-08-25","15:30:00","0:3",13,1,39000,1),
(13,"2012-08-25","18:30:00","2:1",8,1,29700,1),
(14,"2012-08-25","20:45:00","0:1",14,1,37900,1),
(15,"2012-08-26","17:30:00","2:2",15,1,27600,1),
(16,"2012-08-31","20:30:00","0:1",16,2,31500,1),
(17,"2012-09-01","15:30:00","3:1",9,2,59000,1),
(18,"2012-09-01","15:30:00","2:0",6,2,49800,1),
(19,"2012-09-01","15:30:00","2:0",17,2,32900,1),
(20,"2012-09-01","15:30:00","1:1",18,2,12800,1),
(21,"2012-09-01","15:30:00","0:4",19,2,23900,1),
(22,"2012-09-01","18:30:00","0:0",20,2,34900,1),
(23,"2012-09-02","15:30:00","0:4",21,2,29870,1),
(24,"2012-09-02","17:30:00","6:1",2,2,60340,1),
(25,"2012-09-14","20:30:00","0:0",11,3,29123,1),
(26,"2012-09-15","15:30:00","3:0",7,3,51200,1),
(27,"2012-09-15","15:30:00","3:1",2,3,62350,1),
(28,"2012-09-15","15:30:00","2:3",4,3,29780,1),
(29,"2012-09-15","15:30:00","0:0",14,3,42300,1),
(30,"2012-09-15","15:30:00","3:2",15,3,39850,1),
(31,"2012-09-15","18:30:00","0:2",13,3,25700,1),
(32,"2012-09-16","15:30:00","5:3",5,3,36800,1),
(33,"2012-09-16","18:30:00","3:2",8,3,32100,1),
(34,"2012-09-21","20:30:00","1:2",18,3,36500,1),
(35,"2012-09-22","15:30:00","0:2",9,4,59600,1),
(36,"2012-09-22","15:30:00","1:1",21,4,26870,1),
(37,"2012-09-22","15:30:00","2:0",16,4,31400,1),
(38,"2012-09-22","15:30:00","3:2",12,4,32100,1),
(39,"2012-09-22","15:30:00","0:0",20,4,39870,1),
(40,"2012-09-23","15:30:00","1:1",6,4,59800,1),
(41,"2012-09-23","17:30:00","2:2",17,4,49600,1),
(42,"2012-09-23","17:30:00","3:1",19,4,17800,1),
(43,"2012-09-25","20:00:00","3:0",2,5,63200,1),
(44,"2012-09-25","20:00:00","3:0",9,5,58700,1),
(45,"2012-09-25","20:00:00","0:2",13,5,36500,1),
(60,"2012-09-25","20:00:00","3:3",8,5,41000,1),
(46,"2012-09-26","20:00:00","2:2",4,5,39500,1),
(47,"2012-09-26","20:00:00","0:3",14,5,39600,1),
(48,"2012-09-26","20:00:00","4:1",15,5,35700,1),
(49,"2012-09-26","20:00:00","1:2",5,5,29850,1),
(50,"2012-09-26","20:00:00","1:3",11,5,19800,1),
(51,"2012-09-28","20:30:00","2:2",20,6,47500,1),
(52,"2012-09-29","15:30:00","2:0",6,6,58790,1),
(53,"2012-09-29","15:30:00","0:2",17,6,58900,1),
(54,"2012-09-29","15:30:00","0:2",18,6,32500,1),
(55,"2012-09-29","15:30:00","0:2",19,6,23600,1),
(56,"2012-09-29","15:30:00","1:0",12,6,39500,1),
(57,"2012-09-29","18:30:00","5:0",7,6,35410,1),
(58,"2012-09-30","15:30:00","2:1",8,6,23600,1),
(59,"2012-09-30","17:30:00","0:2",21,6,26980,1);

INSERT INTO SPIELER VALUES
(1,1,"Lahm","Philpp",21,"1983-11-11","männlich",910000.00),
(2,1,"Badstuber","Holger",28,"1989-03-13","männlich",420970.00),
(3,1,"Ribéry","Franck",7,"1983-04-07","männlich",857500.00),
(4,1,"Martínez","Javier",8,"1988-09-02","männlich",900000.00),
(5,2,"Brouwers","Roel",4,"1981-11-28","männlich",300000.00),
(6,2,"Dams","Niklas",37,"1990-05-28","männlich",280900.00),
(7,2,"Ring","Alexander",5,"1991-04-09","männlich",190500.00),
(8,5,"Putigam","Sarah",13,"1993-10-13","weiblich",10570.00),
(9,5,"Cross","Niki",3,"1985-05-30","weiblich",12950.00),
(10,5,"Hartmannsegger","Sandra",15,"1992-07-24","weiblich",8950.00),
(11,7,"Rolfes","Simon",6,"1982-01-21","männlich",679750.00),
(12,7,"Bender","Lars",8,"1989-04-27","männlich",520400.00),
(13,7,"Friedrich","Manuel",5,"1979-09-13","männlich",120590.00),
(14,8,"Bender","Sven",6,"1989-04-27","männlich",530000.00),
(15,8,"Götze","Mario",10,"1977-01-01","männlich",699700.00),
(16,8,"Reus","Marco",11,"1979-12-30","männlich",590500.00),
(17,9,"Jung","Sebastian",24,"1990-06-22","männlich",99600.00),
(18,9,"Hien","Alexander",33,"1993-04-03","männlich",14980.00),
(19,9,"Friend","Rob",29,"1981-01-23","männlich",12990.00),
(20,10,"Sorg","Oliver",11,"1980-04-20","männlich",14870.00),
(21,10,"Schmid","Jonathan",21,"1991-03-11","männlich",13870.00),
(22,11,"Kirchhoff","Jan",15,"1990-10-01","männlich",99800.00),
(23,11,"Soto","Elkin",19,"1980-08-04","männlich",101900.00),
(24,11,"Müller","Nicolai",27,"1987-09-25","männlich",75200.00),
(25,12,"Hildebrand","Timo",1,"1988-09-27","männlich",397000.00),
(26,12,"Matip","Joel",32,"1991-08-08","männlich",73980.00),
(27,12,"Höger","Marco",12,"1989-09-16","männlich",67709.50),
(28,12,"Metzelder","Christoph",21,"1980-11-05","männlich",285499.03),
(29,13,"Ibisevic","Vedad",9,"1990-02-20","männlich",197000.00),
(30,13,"Gentner","Christian",20,"1985-08-14","männlich",201876.34),
(31,13,"Cacau",null,18,"1981-03-27","männlich",410695.00),
(32,14,"Adler","Rene",15,"1985-01-15","männlich",370675.33),
(33,14,"Diekmeier","Dennis",2,"1989-10-20","männlich",120000.00),
(34,14,"Aogo","Dennis",6,"1987-01-14","männlich",398999.99),
(35,null,"Kobold","Pumukel",99,"1962-02-21","männlich",0.00),
(36,11,"Szalai","Adám",28,"1987-12-09","männlich",12970.00),
(37,11,"Parker","Shawn",31,"1993-03-07","männlich",75000.00),
(38,11,"Choupo-Moting","Eric",10,"1989-03-23","männlich",29877.00),
(39,11,"Baumgartlinger","Julian",14,"1988-01-02","männlich",14599.00),
(40,11,"Ivanschitz","Andreas",25,"1983-10-15","männlich",17970.00),
(41,11,"Bell","Stefan",16,"1991-08-24","männlich",44776.00),
(42,17,"Ziegler","Ron-Robert",1,"1989-02-12","männlich",69880.00),
(43,17,"Rausch","Konstantin",34,"1990-03-15","männlich",120990.00),
(44,17,"Cherundolo","Steven",6,"1979-02-19","männlich",100900.00),
(45,17,"Djourou","Johann",17,"1987-01-18","männlich",15000.00),
(46,17,"Felipe",null,20,"1987-05-15","männlich",976500.00),
(47,17,"Da Silva Pinto","Sergio",7,"1980-10-16","männlich",96455.00),
(48,17,"Schmiedebach","Manuel",8,"1988-12-05","männlich",37699.00),
(49,17,"Nikci","Adrian",22,"1989-11-10","männlich",100900.00),
(50,17,"Schlaudraff","Jan",13,"1983-07-18","männlich",290650.00),
(51,17,"Sobiech","Artur",9,"1990-06-12","männlich",45920.00),
(52,17,"Abdellaoue","Mohammed",25,"1985-10-23","männlich",12396.00),
(53,20,"Benaglio","Diego",1,"1983-09-08","männlich",32098.00),
(54,20,"Naldo",null,25,"1982-09-10","männlich",499930.00),
(55,20,"Schäfer","Marcel",4,"1984-06-07","männlich",650000.00),
(56,20,"Fagner",null,32,"1989-06-1","männlich",69852.00),
(57,20,"Rodriguez","Ricardo",34,"1992-08-25","männlich",193252.00),
(58,20,"Diego",null,10,"1985-02-28","männlich",58663.00),
(59,20,"Polak","Jan",29,"1981-03-14","männlich",58300.00),
(60,20,"Träsch","Christian",15,"1987-09-01","männlich",600000.00),
(61,20,"Knoche","Robin",31,"1992-05-22","männlich",52133.00),
(62,20,"Olio","Ivica",11,"1979-09-14","männlich",15322.00),
(63,20,"Dost","Bas",12,"1989-05-31","männlich",54233.00),
(64,20,"Helmes","Patrik",33,"1984-03-01","männlich",212121.00),
(65,20,"Hasebe","Makoto",13,"1984-01-18","männlich",147852.00),
(66,13,"Ulreich","Sven",1,"1988-08-03","männlich",59631.00),
(67,13,"Ziegler","Marc",22,"1976-06-13","männlich",58723.00),
(68,13,"Sakai","Gotoku",2,"1991-03-14","männlich",794613.00),
(69,13,"Niedermeier","Georg",6,"1986-02-26","männlich",95713.00),
(70,13,"Tasci","Serdar",5,"1987-04-24","männlich",796523.00),
(71,13,"Molinaro","Cristian",21,"1983-07-30","männlich",586933.00),
(72,13,"Harnik","Martin",7,"1987-06-10","männlich",489666.00),
(73,13,"Khedira","Rani",28,"1994-01-27","männlich",487775.00),
(74,13,"Holzhauser","Raphael",26,"1993-02-16","männlich",12345.00),
(75,13,"Torun","Tunay",17,"1990-04-21","männlich",14785.00);


INSERT INTO ZT_SPIEL_SPIELER VALUES
(1,1,0,0,0),
(1,3,1,0,1),
(9,3,0,1,0),
(10,3,0,0,0);

INSERT INTO LIGA VALUES
(1,"1. Bundesliga Herren"),
(2,"1. Bundesliga Damen"),
(3,"2. Bundesliga Herren"),
(4,"2. Bundesliga Damen"),
(5,"Ladesliga Bayern B-Jugend männlich"),
(6,"Ladesliga Bayern B-Juniorinnen"),
(7,"Kreisklasse 1 Bayern-Süd E-Jugend männlich"),
(8,"Kreisliga Bayern-Süd E-Jugend männlich"),
(9,"Bayernliga Herren"),
(10,"Kreisliga Bayern D-Jugend weiblich"),
(11,"Bayernliga D-Jugend weiblich"),
(12,"Bayernliga C-Jugend weiblich");

INSERT INTO ORT VALUES
(1,"81547","München"),
(2,"80939","München"),
(3,"41179","Mönchengladbach"),
(4,"41063","Mönchengladbach"),
(5,"93049","Regensburg"),
(6,"79117","Freiburg"),
(7,"51373","Leverkusen"),
(8,"44137","Dortmund"),
(9,"44139","Dortmund"),
(10,"60528","Frankfurt am Main"),
(11,"79117","Freiburg"),
(12,"55124","Mainz"),
(13,"45891","Gelsenkirchen"),
(14,"70372","Stuttgart"),
(15,"22525","Hamburg"),
(16,"55128","Mainz"),
(17,"85235","Odelshausen"),
(18,"12345","Testhausen"),
(19,"81379","München"),
(20,"81375","München"),
(21,"80997","München"),
(22,"81825","München"),
(23,"80337","München"),
(24,"81549","München"),
(25,"81927","München"),
(26,"81925","München"),
(27,"80993","München"),
(28,"90480","Nürnberg"),
(29,"74939","Zunzenhausen"),
(30,"86154","Augsburg"),
(31,"40474","Düsseldorf"),
(32,"22525","Hamburg"),
(33,"30169","Hannover"),
(34,"28205","Bremen"),
(35,"90765","Fürth"),
(36,"38446","Wolfsburg");

INSERT INTO PLATZ_STADION VALUES
(1,"Trainingsplatz FC Bayern",500,1,"Säbener Straße 51-57",1),
(2,"Allianz Arena München",65000,1,"Werner-Heisenberg-Allee 25",2),
(3,"Borussia-Park",59724,1,"Hennes-Weisweiler-Allee 1",4),
(4,"60er Stadion München",30000,1,"Grünwalder Straße 114",1),
(5,"Stadion SC Freiburg",24000,1,"Schwarzwaldstraße 193",6),
(6,"Bayarena",51000,1,"Bismarckstr. 122 - 124",7),
(7,"Signal Iduna Park",60000,1,"Strobelallee 50",9),
(8,"Commerzbank-Arena",51500,1,"Mörfelder Landstrasse 362",10),
(9,"VELTINS-Arena",61600,1,"Ernst-Kuzorra-Weg 1",13),
(10,"Coface Arena",42000,1,"Eugen-Salomon-Straße 1",16),
(11,"Stadion Augsburg",35000,1,"Simon-Weber-Str. 23",30),
(12,"Arena Hamburg",45500,1,"Hafenstraße 15",32),
(13,"Stadion Fürth",32050,1,"Hauptstraße 1",35),
(14,"Kickers Dome",42560,1,"Badstraße 26",14),
(15,"Stadion Hannover 96",56000,1,"Erich-Kästner-Str. 4",33),
(16,"Mainz-Arena",41500,1,"Hauptplatz 1",12),
(17,"Werda-Park",52500,1,"Hafenplatz 2",34),
(18,"Stadion Nürnberg",40500,1,"Frankenstr.1",28),
(19,"Hoffenheim Arena",24500,1,"Neue Straße 3",29),
(20,"Stadion Düsseldorf",37900,1,"Rheinstraße 4",31),
(21,"VfL Stadion",41700,1,"Wolfsburgerstraße 1",36);

INSERT INTO GROESSE_SPIELFELD VALUES
(1,"Normalspielfeld",105,70),
(2,"Kompaktspielfeld",70,55),
(3,"Kleinspielfeld",55,35),
(4,"Minispielfeld",35,25);

INSERT INTO KATEGORIE VALUES
(1,"A Damen",1,11,"7.32x2.44m"),
(2,"A Herren",1,11,"7.32x2.44m"),
(3,"B-Juniorinnen",1,11,"7.32x2.44m"),
(4,"B-Jugend männlich",1,11,"7.32x2.44m"),
(5,"C-Juniorinnen 7er",2,7,"7.32x2.44m"),
(6,"C-Jugend männlich",1,11,"7.32x2.44m"),
(7,"D-Juniorinnen 7er",2,7,"7.32x2.44m"),
(8,"D-Jugend männlich 9er",2,9,"7.32x2.44m"),
(9,"E-Jugend 7er",3,7,"5x2m"),
(10,"F-Jugend 7er",3,7,"5x2m"),
(11,"F-Jugend 5er",4,5,"kindgerecht"),
(12,"Bambini 7er",3,5,"5x2m"),
(13,"Bambini 5er",4,5,"kindgerecht");

/* FK-/UNIQUE-Check einschalten */
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

