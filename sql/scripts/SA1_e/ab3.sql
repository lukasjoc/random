use fb3; 

--1)
select gs.Beschreibung, k.Beschreibung as Kategorie, Spielerzahl, Torgroesse, concat_ws("x", laenge, breite) from kategorie k join groesse_spielfeld gs on gs.gr_id = k.gr_id;

--2)
select gs.Beschreibung, k.Beschreibung as Kategorie, Spielerzahl, Torgroesse, concat_ws("x", laenge, breite) from kategorie k join groesse_spielfeld gs on gs.gr_id = k.gr_id;

--3)
select MannschName from mannschaft where MannschName LIKE "%FC Bayern%";

--4)
select MannschName, Name, Vorname, Ruecken_Nr from mannschaft join spieler on spieler.m_Id = mannschaft.m_id where MannschName LIKE "%FC Bayern Profis Herren";

--5)
select * from spieler where m_id is null;

--6)
select count(*) from spieler group by m_id;

--7)
select MannschName, Spielerzahl, Beschreibung from kategorie join mannschaft on mannschaft.k_id = kategorie.k_id where spielerzahl=7;

--8)
select count(*) from verein join gesellschaftsform gs on gs.gf_id = verein.gf_id where Bezeichnung LIKE "Aktien%";

--9)
select distinct MannschName, Ergebnis from mannschaft join liga on mannschaft.l_id = liga.l_id join spiel on spiel.l_id = liga.l_id where Ergebnis LIKE "2:1";