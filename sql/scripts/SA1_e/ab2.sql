use fb2

-- 1)
select count(*) as Spieler_Anzahl from verein;

-- 2)
select count(*) as Spieler_Anzahl_Rn_1 from spieler where Ruecken_nr <=>1

-- 3)
select sum(Gehalt_monatl) as Spieler_Gehalt_Gesamt from spieler;

-- 4)
select sum(Gehalt_monatl) as Spieler_Rn_Gehalt_Gesamt from spieler where Ruecken_Nr <=> 1;

-- 5)
select MAX(Gehalt_monatl) as MAX_Gehalt, MIN(Gehalt_monatl) as MIN_Gehalt, ROUND(AVG(Gehalt_monatl), 2 ) as AVG_Gehalt from spieler;

-- 6a)
select Name, Vorname, GebDat, TIMESTAMPDIFF(YEAR, GebDat, CURDATE()) as S_Alter from spieler order by S_Alter;

-- 6b)
select Name, Vorname, GebDat, date_format(now(), '%Y') - date_format(GebDat, '%Y') - (date_format(now(), '00-%m-%d') < date_format(GebDat, '00-%m-%d')) as S_Alter from spieler order by S_Alter;

-- 7) 
select ROUND(AVG(TIMESTAMPDIFF(YEAR, GebDat, CURDATE())), 2) as AVG_Alter_Spieler from spieler;

-- 8)
select (select round(avg(timestampdiff(year, GebDat, curdate()))) from spieler) as AVG_SAlter, round(timestampdiff(year, GebDat, curdate()), 2) as S_Alter, Name from spieler having S_Alter < AVG_SAlter;

-- 9)
select Name, Vorname, GebDat, if((day(GebDat) < day(curdate())) OR (month(GebDat) < month(curdate())) , "x", " ") as Hatte_Geburtstag from spieler;

-- 10)
select Beschreibung as Spielfeld, Laenge, Breite, ROUND(Laenge * Breite, 0) as "m^2" from groesse_spielfeld;

