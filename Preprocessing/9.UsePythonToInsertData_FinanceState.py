import pymysql
db=pymysql.connect(host='database-1.cnaloacjmwtw.ap-northeast-2.rds.amazonaws.com',port=3306,user='TooHR',passwd='',db='TooHRProject',charset='utf8')
f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/DB_재무제표(통합).csv','r',encoding='utf-8')
Finance_State = [list(f.readline().split(',')) for _ in range(493)][1:]

for ff in Finance_State:
    del ff[19]
    
def InsertFinanceState(annual_year, date, sales, business_profit, net_profit, bp_percent, np_percent, roe, debt_ratio, quick_ratio, reserve_ratio, eps, per, bps, pbr, per_share, dividend_rate, propensity_rate, code_id):
    cursor = db.cursor()
    sql ="""
        INSERT INTO Best_financestate(annual_year, date, sales, business_profit, net_profit, bp_percent, np_percent, roe, debt_ratio, quick_ratio, reserve_ratio, eps, per, bps, pbr, per_share, dividend_rate, propensity_rate, code_id)
        VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
    cursor.execute(sql, (annual_year, date, sales, business_profit, net_profit, bp_percent, np_percent, roe, debt_ratio, quick_ratio, reserve_ratio, eps, per, bps, pbr, per_share, dividend_rate, propensity_rate, code_id))
    db.commit()

    
for xx in Finance_State:
    InsertFinanceState(xx[1],xx[2],xx[3],xx[4],xx[5],xx[6],xx[7],xx[8],xx[9],xx[10],xx[11],xx[12],xx[13],xx[14],xx[15],xx[16],xx[17],xx[18],xx[0])