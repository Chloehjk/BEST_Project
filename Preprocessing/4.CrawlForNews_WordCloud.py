from bs4 import BeautifulSoup
import urllib.request
from urllib.parse import quote
import pandas as pd
import time
import requests

# 자신의 경로에 맞게 바꾸기
f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/POINT_주가데이터.csv','r', encoding='utf-8')
title = f.readline()
companys = [list(f.readline().split(',')) for _ in range(50)]


for i, v in enumerate(companys):
    if companys[i][-1] == '\n':
        companys[i] = companys[i][0:-2]
    else:
        companys[i][-1] = companys[i][-1][0:-1]
# print(companys)

answer = 0
for xx in companys:
    sum = (len(xx)-2)/2
    answer += sum
#     print(xx[0], sum)
# print(answer)

######뉴스 크롤링 코드 함수로######
def get_title_news(query, start_date, end_date):
    news_df = pd.DataFrame(columns = ['Title'])

    url_query = quote(query)
    page=1
    idx=0
    while True:
        url = f'https://search.naver.com/search.naver?where=news&sm=nws_hty&ds={start_date}&de={end_date}&pd=3&start={page}&query=' + url_query
        search_url = urllib.request.urlopen(url).read()
        soup = BeautifulSoup(search_url, 'html.parser')
        titles = soup.select('a.news_tit')
        btn_next = soup.select_one('a.btn_next').attrs['aria-disabled']
        
        for title in titles:
            news_title = title.attrs['title']
#             print(page, news_title)
#             print('#')
            news_df.loc[idx] = [news_title]
            idx += 1
            
        page += 10
#         print(btn_next)
        if btn_next == 'true':
            break

    news_df.to_csv(f'{query}_{start_date}.csv',encoding='utf-8')
    print('포인트 하나 완료!')


######for문 돌려서 전체 크롤링#######
for xx in companys:
    i = 2; j = 3
    
    while True:
        query = xx[0]
        start_date = xx[i]
        end_date = xx[j]
        print(query, start_date, end_date)
        get_title_news(query, start_date, end_date)
        i+=2
        j+=2
        
        if len(xx) < 9:
            if i > 7:
                break
        elif len(xx) > 9:
            if i > 8:
                break