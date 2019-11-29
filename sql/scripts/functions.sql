use fb;

-- 1) 
select 
  S_ID, 
  Vorname, 
  Name,
  GebDat 
from spieler 
order by GebDat DESC;

-- 2)
select 
  S_ID, 
  Vorname, 
  Name, 
  Geschlecht, 
  GebDat 
from spieler where Geschlecht LIKE "m%";

-- 3)
select 
  S_ID, 
  Vorname, 
  Name, 
  GebDat, 
  TIMESTAMPDIFF(YEAR, GebDat, CURDATE()) as S_Alter 
from spieler;

-- 4)
select 
  S_ID, 
  Vorname, 
  Name, 
  GebDat 
from spieler 
where GebDat < "1990-01-01" 
order by GebDat DESC;

-- 5)
select
S_ID,
Vorname,
Name,
GebDat,
TIMESTAMPDIFF(YEAR, GebDat, CURDATE()) as S_Alter
from spieler 
where TIMESTAMPDIFF(YEAR, GebDat, CURDATE()) >= 20;


-- 6)
select 
  S_ID, 
  Vorname, 
  Name, 
  GebDat, 
  TIMESTAMPDIFF(YEAR, GebDat, CURDATE()) as S_Alter 
from spieler 
where GebDat LIKE "%-08-%";

-- 7a)
select 
  MannschName, 
  Vorname, 
  Name 
from spieler 
left join mannschaft on mannschaft.m_id = spieler.m_id 
order by MannschName DESC;

-- 7b)
select 
  MannschName, 
  Vorname, 
  Name 
from spieler 
join mannschaft on mannschaft.m_id = spieler.m_id 
order by MannschName DESC;

-- 8)
select
  MannschName,
  Vorname, 
  Name
from spiel 
join mannschaft on mannschaft.m_id = spiel.sp_id;
