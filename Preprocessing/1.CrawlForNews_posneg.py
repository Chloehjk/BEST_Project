from selenium import webdriver
import time
import pandas as pd
import csv


# 종목 코드 추출
code = {}

# 자신의 폴더 경로에 맞게 설정 요망
with open('KOSPI50 종목코드.csv','r',encoding='cp949') as f:
    reader = csv.reader(f)
    
    for txt in reader:
        code[txt[1]] = txt[0]
    print(code)
code_keys = [str(xx) for xx in code.keys()]
code_values = [str(xx) for xx in code.values()]



# 크롤링 코드
def Crawl_first_page(cc,name):
    title = []
    company = []
    newsdate = []
    driver = webdriver.Chrome()
    chromedriver = 'chromedriver.exe' #jupyter notebook의 경우 크롬드라이버 사용
    
    for i in range(1,31):
        driver.get(f'https://finance.naver.com/item/news_news.nhn?code={cc}&page={i}&sm=title_entity_id.basic&clusterId=')
        #time.sleep(10)
        print(f'{i}쪽')
        trs = driver.find_elements_by_xpath('/html/body/div/table[1]/tbody/tr')

        for tr in trs:
            #time.sleep(10)
            try:
                news_title = tr.find_element_by_xpath('./td[1]/a').text
                title.append(news_title)
                time.sleep(6)
            except:
                pass

            try:
                news_com = tr.find_element_by_xpath('./td[2]').text
                company.append(news_com)
                time.sleep(4)
            except:
                pass

            try:
                news_date = tr.find_element_by_xpath('./td[3]').text
                newsdate.append(news_date)
                time.sleep(5)
            except:
                pass

        News=[]
        News.append(title)
        News.append(company)
        News.append(newsdate)

        News = pd.DataFrame(News)
        data = News.transpose()
        data.columns = ['Title','News_Company','Date']
        #print(data)
        data.to_csv(f'{name}_{cc}.csv', encoding='cp949')
        print(f'{name}완료')




# 코드넘버 가져와서 함수에 삽입
for i in range(시작,종료):
    cc = code_keys[i]
    name = code_values[i]
    Crawl_first_page(cc, name)
    time.sleep(8)