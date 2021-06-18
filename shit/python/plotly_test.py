#!/usr/bin/env python3



import pandas as pd
from sqlalchemy import create_engine

#!pip3 install matplotlib scipy
import scipy
import matplotlib
import matplotlib.pyplot as plt
import numpy as np


URL = f"mssql+pyodbc://sa:4%*8UtWH*V@localhost:1433/dilax_test?driver=ODBC+Driver+17+for+SQL+Server"
ENGINE = create_engine(URL, fast_executemany=True)

sites_df = pd.read_sql_table("site", ENGINE)
kpi_df = pd.read_sql_table("site_kpi", ENGINE)
aggr_df= pd.read_sql_table("kpi_aggregated", ENGINE)
raw_df = pd.read_sql_table("kpi_raw", ENGINE)



# Wie viele Kunden kommen in die Shop's pro Monat verteilt auf alle Shops im durchschnitt
#select from site_kpi sike
#    join kpi_aggregated kag on kag.kpi_id = sike.id
#    where sike.kpi_name='incoming'

visits = kpi_df[kpi_df.kpi_name == "incoming"].merge(
    aggr_df[aggr_df.aggregation == "average"][["kpi_id", "figure"]],
    right_on="kpi_id",
    left_on="id",
    how="inner",
)[["site_id", "figure"]] 

# flat = [visits.loc[lambda visits: visits["site_id"] == site_id].to_numpy().astype(int) for site_id in range(1, 16)]

#ids = []
#for id in visits[["site_id"]].values:
#    ids.extend(id)
# 
# figs = []
# for fig in visits[["figure"]].values:
#     figs.extend(fig)
# 
# plt.figure()
# 
# ax = visits.plot(title="(!!FAKE DATA!!) Besucher im Durchschnitt aller Läden", x="site_id", y="figure", legend=False)
# ax.set_xlabel("Laden als ID")
# ax.set_ylabel("Besucher im Durchschnitt")
# plt.show()
# 

import plotly.offline as pyo
import plotly.express as px
# pyo.init_notebook_mode()
fig = px.line(visits, x="site_id", y="figure", title='Life expectancy in Canada')
fig.show()
