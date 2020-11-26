from django.db import models

# Create your models here.
class KOSPI50(models.Model):
    name = models.CharField(max_length=20)
    code = models.CharField(max_length=10, primary_key=True)

class STOCKVALUES(models.Model):
    code = models.ForeignKey(KOSPI50, on_delete = models.CASCADE)
    date = models.DateField()
    closeprice = models.IntegerField()

class FINANCESTATE(models.Model):
    code = models.ForeignKey(KOSPI50, on_delete = models.CASCADE)
    annual_year = models.CharField(max_length=5)
    date = models.DateField()
    sales = models.FloatField()   # 매출액
    business_profit = models.FloatField()  #영업이익
    net_profit = models.FloatField()  #당기순이익
    bp_percent = models.FloatField()  #영업이익률
    np_percent = models.FloatField()  #순이익률
    roe = models.FloatField() 
    debt_ratio = models.FloatField()  #부채비율
    quick_ratio = models.FloatField()  #당좌비율
    reserve_ratio = models.FloatField()  #유보율
    eps = models.FloatField()
    per = models.FloatField()
    bps = models.FloatField()
    pbr = models.FloatField()
    per_share = models.FloatField()  #주당배당금
    dividend_rate = models.FloatField()  #시가배당률
    propensity_rate = models.FloatField()  #배당성향

class POSORNEG(models.Model):
    code = models.ForeignKey(KOSPI50, on_delete = models.CASCADE)
    name = models.CharField(max_length=10)
    pos = models.IntegerField()
    neg = models.IntegerField()
    neu = models.IntegerField()
    total = models.IntegerField()
    pos_pn = models.FloatField()  #긍정/긍정+부정
    neg_pn = models.FloatField()
    pos_pnn = models.FloatField()  #긍정/긍정+부정+중립
    neg_pnn = models.FloatField()

class MEANOFPER(models.Model):  #PER평균
    industry = models.CharField(max_length=20)   #업종
    per = models.FloatField()  #업종별 평균 PER
    company = models.CharField(max_length=50)  #해당회사

class POINTDATE(models.Model): #급등/급락 주가데이터
    code = models.ForeignKey(KOSPI50, on_delete = models.CASCADE)
    point1 = models.CharField(max_length=30)
    point2 = models.CharField(max_length=30)
    point3 = models.CharField(max_length=30)
    point4 = models.CharField(max_length=30, null=True)