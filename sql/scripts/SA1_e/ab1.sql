use fb2

-- 1)
select S_ID, M_ID, Name, Vorname, Geschlecht, Gehalt_monatl from spieler;

-- 2)
select Name, Vorname, GebDat from spieler order by Vorname;

-- 3)
select concat_ws(", ", Name, Vorname) as Spieler, GebDat from spieler order by Spieler desc;

--4)
select char_length(concat_ws(" ", Name, Vorname)) as spieler_name_laenge from spieler;

--5)
select Ort from Ort where PLZ LIKE "8%";

--6)
select Ort from Ort where Ort regexp '^[K-Mk-m]' order by Ort desc;

--7)
select concat_ws(" ,", Name, Vorname) as Spieler, Gehalt_monatl from spieler where Gehalt_monatl >= "600000" order by Spieler DESC;

-- 8)
select Name, Vorname, Ruecken_Nr from spieler where Ruecken_nr <=>1;

-- 9)
select Name from verein where Name LIKE "%FC%";

