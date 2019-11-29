-- 1a)
select 
  Ort, 
  count(mannschaft.m_id) as Anzahl
from verein 
join mannschaft on mannschaft.v_id = verein.v_id 
join ort on ort.o_id = verein.o_id 
group by ort.Ort
order by Anzahl DESC;

-- 1b)
select 
  Ort, 
  count(mannschaft.m_id) as Anzahl
from verein 
left join mannschaft on mannschaft.v_id = verein.v_id 
left join ort on ort.o_id = verein.o_id 
group by ort.Ort
order by Anzahl DESC;

-- 2)
select 
  Ort, 
  round(avg(timestampdiff(year, GebDat, curdate()))) as Alter_Spieler_Ort 
from verein
join mannschaft on mannschaft.v_id = verein.v_id 
join ort on ort.o_id = verein.o_id 
join spieler s on s.m_id = mannschaft.m_id 
group by ort.Ort 
order by Alter_Spieler_Ort DESC;


-- 3)
select Name, count(mannschaft.ManschName) as "AnzahlMannsch"
from mannschaft
join verein on mannschaft.v_id = verein.v_id
group by mannschaft.v_id
order by 5 DESC;

-- 4)
select Name, count(mannschaft.ManschName) as "Anzahl_Mannsch"
from mannschaft
join verein on mannschaft.v_id = verein.v_id
group by m.v_id
having count(m.MannschName) > 1
order by 2 DESC;