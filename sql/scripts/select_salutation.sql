use fb;

-- 1)
select
  if(Geschlecht="m", "Herr", "Frau") as Geschlecht,
  Vorname, 
  Name
from spieler
order by Geschlecht;

-- 2)
select 
  ifnull(m_id,  "NICHTS") as ID,
  ifnull(vorname, "KEINE BEZEICHNUNG") as Vorname,
  name
from spieler;

-- 3)
select 
  Name, 
  Vorname 
from SPIELER 
order by CHAR_LENGTH(Name) ASC;

-- 4)
select
  CONCAT_WS(", ", Name, Vorname) as Spieler
from SPIELER;

-- 5)
select
  HEX(ort) as Ort
from ORT;

-- 6)
select
  SUBSTRING(MannschName, 1, 5) as Mannschaft
from Mannschaft;

-- 7)
select 
  upper(Name) as Name,
  lower(Vorname) as Vorname,
  GebDat
from spieler;
