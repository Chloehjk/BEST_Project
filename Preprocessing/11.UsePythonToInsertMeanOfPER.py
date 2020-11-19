import pymysql
db=pymysql.connect(host='database-1.cnaloacjmwtw.ap-northeast-2.rds.amazonaws.com',port=3306,user='TooHR',passwd='20201111',db='TooHRProject',charset='utf8')
f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/KOSIP50 업종별 PER 평균.csv','r',encoding='utf-8')
MeanOfPer = [list(f.readline().split(',')) for _ in range(30)][1:]
for xx in MeanOfPer:
    xx[-1] = xx[-1].replace('\n','')
for i in MeanOfPer:
    i[2] = ','.join(i[2:]).replace('"','')
    
##########################################################  
def InsertMeanPer(industry, per, company):
    cursor = db.cursor()
    sql ="""
        INSERT INTO Best_meanofper(industry, per, company)
        VALUES(%s,%s,%s)"""
    cursor.execute(sql, (industry, per, company))
    db.commit()
############################################################
for xx in MeanOfPer:
    InsertMeanPer(xx[0],xx[1],xx[2])