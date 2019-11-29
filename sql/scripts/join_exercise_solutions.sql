use Elektro_Markt;


-- a)
select
	Name,
  Vorname,
  Ort as Arbeitsort
from MITARBEITER
join FILIALE
where FILIALE.Nr = MITARBEITER.Filiale 
and FILIALE.Ort LIKE "N_%"; -- encoding problems -- sonst = "Nuernberg"

-- b)
select
  Name, 
  Vorname, 
  Telefon 
from MITARBEITER 
join FILIALE on FILIALE.Nr=MITARBEITER.Filiale 
where Name="Abele";

-- c)
select 
  Name, 
  Filiale, 
  Ort 
from GROSSHAENDLER 
join BELIEFERT on BELIEFERT.Haendler = GROSSHAENDLER.Nr 
join FILIALE on BELIEFERT.Filiale = FILIALE.Nr 
where FILIALE.Ort="Augsburg";

-- d)
select 
  Ansprechpartner, 
  Tel, 
  Branche 
from GROSSHAENDLER 
join BELIEFERT on BELIEFERT.Haendler = GROSSHAENDLER.Nr 
join FILIALE on FILIALE.Nr = BELIEFERT.Filiale 
where FILIALE.Nr=2 
and GROSSHAENDLER.Branche="Haushalt";

-- e)

select 
  m1.Name, 
  m1.Vorgesetzter 
from MITARBEITER m1, MITARBEITER m2 
where m1.Name="Becker" and m1.Vorname="Lars" 
and m1.Vorgesetzter = m2.Nr;