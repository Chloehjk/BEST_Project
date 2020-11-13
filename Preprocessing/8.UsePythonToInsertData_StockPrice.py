import pymysql
db=pymysql.connect(host='database-1.cnaloacjmwtw.ap-northeast-2.rds.amazonaws.com',port=3306,user='TooHR',passwd='',db='TooHRProject',charset='utf8') 


f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/DB_주가데이터 1113.csv','r',encoding='cp949')
StockPrice = [list(f.readline().split(',')) for _ in range(12026)][1:]

for ss in StockPrice:
    del ss[3:]
    
def InsertStockPrice(date, closeprice,code_id):
    cursor = db.cursor()
    sql ="""
        INSERT INTO Best_stockvalues(date, closeprice,code_id)
        VALUES(%s,%s,%s)"""
    cursor.execute(sql, (date,closeprice,code_id))
    db.commit()
    
for xx in StockPrice:
    InsertStockPrice(xx[1],xx[2],xx[0])