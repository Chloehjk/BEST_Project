import pymysql
import csv

db=pymysql.connect(host='database-1.cnaloacjmwtw.ap-northeast-2.rds.amazonaws.com',port=3306,user='TooHR',passwd='',db='TooHRProject',charset='utf8') 
def InsertKopsi50(company, code):
    cursor = db.cursor()
    sql ="""
        INSERT INTO Best_kospi50
        VALUES(NULL,%s,%s)"""
    cursor.execute(sql, (company, code))
    db.commit()
    
f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/KOSPI50 종목코드(통합).csv','r',encoding='utf-8')
Kospi50 = [list(f.readline().split().replace('')) for _ in range(50)]


codes = {}
with open('C:/Users/ASIA/Desktop/투현란 프로젝트/KOSPI50 종목코드(통합).csv','r',encoding='utf-8') as f:
    reader = csv.reader(f)
    
    for txt in reader:
        codes[txt[1]] = txt[0]
    codes['105560'] = codes['105560'].replace('\ufeff','')
#     print(codes)


for code in codes:
    InsertKopsi50(codes[code], code)
    