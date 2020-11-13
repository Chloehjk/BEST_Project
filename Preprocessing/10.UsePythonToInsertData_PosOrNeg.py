import pymysql
db=pymysql.connect(host='database-1.cnaloacjmwtw.ap-northeast-2.rds.amazonaws.com',port=3306,user='TooHR',passwd='',db='TooHRProject',charset='utf8') 

f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/DB_PosNegLabeling.csv','r',encoding='utf-8')
PosOrNeg = [list(f.readline().split(',')) for _ in range(51)][1:]

for xx in PosOrNeg:
    xx[7] = xx[7].replace('\n','')
    
def InsertPosOrNeg(name,pos,neg,neu,total,pos_pn,pos_pnn,code_id):
    cursor = db.cursor()
    sql ="""
        INSERT INTO Best_posorneg(name,pos,neg,neu,total,pos_pn,pos_pnn,code_id)
        VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"""
    cursor.execute(sql, (name,pos,neg,neu,total,pos_pn,pos_pnn,code_id))
    db.commit()
    
for xx in PosOrNeg:
    InsertPosOrNeg(xx[1],xx[2],xx[3],xx[4],xx[5],xx[6],xx[7],xx[0])