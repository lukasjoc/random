use fb2; 


create or replace view MANNSCHAFT_SPIELER_COUNT
(Anzahl, Manschaft)
as select 
spielerzahl, 
mannschName 
from mannschaft m 
join kategorie k on k.k_id = m.k_id 
order by mannschName DESC;

select * from MANNSCHAFT_SPIELER_COUNT;


-- subselect geschlecht

create or replace view mannschaft_spieler_count_mw as 
select m.MannschName, 
count(s.S_id) as "Anzahl Spieler", 
(select count(sp.s_id) from spieler sp, mannschaft ma
where sp.m_id=ma.m_id and m.m_id=ma.m_id and sp.Geschlecht like "w%")
(select count(sp.s_id) from spieler sp, mannschaft ma
where sp.m_id=ma.m_id and m.m_id=ma.m_id and sp.Geschlecht like "m%")
from mannschaft m, spieler s_id
where m.m_id - s.m_id
group by m.m_id
order by m.Mannschname;

select count(*) from mannschaft join spieler  where spieler.m_id =mannschaft.m_id; 