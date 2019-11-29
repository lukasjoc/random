use fb; 

-- 1)
select 
Name, 
timestampdiff(YEAR, GebDat, curdate()) as S_Alter 
from spieler 
order by S_Alter 
limit 10;

-- 2)
select 
  m.MannschName, 
  l.Beschreibung, 
  count(s.s_id) as S_Anzahl 
from spieler s, liga l, mannschaft m 
where s.m_id = m.m_id AND m.l_Id = l.l_id 
group by s.m_id 
order by S_Anzahl DESC 
LIMIT 1;

-- 3)
set @counter := 0;
select (@counter:=@counter+1) as Rang, x.*
from (select m.MannschName, COUNT(z.sp_id) as SpielTage
    SUM(z.Punkte), as Punkte, SUM(z.Tore) as Tore
    from Mannschaft m, Spiel s, zt_spiel_mannschaft z, liga l
    where m.M_id = z.m_id and z.sp_id and l.L_id=m.l_id
    and l.Beschreibung LIKE "%1. Bundesliga Herren%"
    group by z.m_id
    order by Punkte DESC, Tore, DESC
)x;
