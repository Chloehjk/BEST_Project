import pymysql
db=pymysql.connect(host='database-1.cnaloacjmwtw.ap-northeast-2.rds.amazonaws.com',port=3306,user='TooHR',passwd='20201111',db='TooHRProject',charset='utf8') 

f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/DB_POINT_주가데이터.csv','r',encoding='utf-8')

PointDate = [list(f.readline().split(',')) for _ in range(51)][1:]
for xx in PointDate:
    xx[-1] = xx[-1].replace('\n','')
    
def InsertPointDate(point1, point2, point3, point4, code_id):
    cursor = db.cursor()
    sql ="""
        INSERT INTO Best_pointdate(point1, point2, point3, point4, code_id)
        VALUES(%s,%s,%s,%s,%s)"""
    cursor.execute(sql, (point1, point2, point3, point4, code_id))

    db.commit()

for xx in PointDate:
    InsertPointDate(xx[2],xx[4],xx[6],xx[8],xx[1])