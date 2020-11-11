from os.path import isfile, join
from os import listdir
import csv
import re
import pandas as pd
import plotly
import plotly.graph_objects as go
import plotly.express as px

### 본인 폴더 경로 설정 요망
filepath ="C:/주가데이터(통합)";

# 주가데이터명 리스트로 저장 
files = [x for x in listdir(filepath) if isfile(join(filepath,x))]


###  슬라이싱해서 html 가져오기(kb금융~고려아연, cp949, '\t')

i = 0
for com in files[0:17]:
    df = pd.read_csv(f'C:/Users/ASIA/Desktop/투현란 프로젝트/주가데이터(통합)/{com}',encoding='cp949',sep='\t',parse_dates=['날짜'])
    df = df.rename(columns= {'날짜': 'date', '종가': 'close', '오픈': 'open', '고가': 'high', '저가': 'low', '거래량': 'volume', '변동 %':'move'}) 
    df.drop(['low'],1)
    df.drop(['volume'],1)
    df.drop(['move'],1)
    # 데이터 타입을 int로 바꿔주기
    df[['close', 'open', 'high']] = df[['close', 'open', 'high']].astype(int) 

    # 컬럼명 'date'의 타입을 date로 바꿔줌 
    df['date'] = pd.to_datetime(df['date']) 

    # 날짜 오름차순으로 바꾸기
    df = df.sort_values(by=['date'], ascending=True) 
    df['date']

    fig = px.line(df, x='date', y='close', title=f"{com}")

    fig.update_xaxes(
        rangeslider_visible=True,
        rangeselector=dict(
            buttons=list([
                dict(count=1, label="1m", step="month", stepmode="backward"),
                dict(count=3, label="3m", step="month", stepmode="backward"),
                dict(count=6, label="6m", step="month", stepmode="backward"),
                dict(step="all")
            ])
        )
    )
    fig.show()
    fig.write_html(f"{i}_{com}.html")
    i += 1
