from bs4 import BeautifulSoup
import urllib.request
from urllib.parse import quote
import pandas as pd
import time
import requests
import numpy as np

# 자신의 경로에 맞게 바꾸기
f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/KOSPI50 종목코드(통합).csv','r', encoding='utf-8')
companys = [list(f.readline().replace('\n','').replace('\ufeff','').split(',')) for _ in range(50)]
print(companys)


######재무제표 부분 가져오는 함수 만들기######
def get_fin_state(com):
    URL = f"https://finance.naver.com/item/main.nhn?code={com[1]}"

    KB = requests.get(URL)
    html = KB.text

    soup = BeautifulSoup(html, 'html.parser')
    finance_html = soup.select('table')[3]

    th_data = [item.get_text().strip() for item in finance_html.select('thead th')]
    # print(finance_html)

    annual_date = th_data[3:7]
    quarter_date = th_data[7:13]

    finance_index = [item.get_text().strip() for item in finance_html.select('th.h_th2')][3:]
    finance_data = [item.get_text().strip() for item in finance_html.select('td')]

    finance_data = np.array(finance_data)
    finance_data.resize(len(finance_index),10)

    finance_date = annual_date + quarter_date
    finance = pd.DataFrame(data=finance_data[0:,0:], index=finance_index,columns=finance_date)

    annual_finance = finance.iloc[:,:4]
    quarter_finance = finance.iloc[:,4:]

    ###################save####################
    annual_finance.to_csv(f'{com[0]}_annual.csv', encoding='utf-8')
    quarter_finance.to_csv(f'{com[0]}_quarter.csv', encoding='utf-8')


#####함수 돌려서 저장######
for com in companys:
    get_fin_state(com)