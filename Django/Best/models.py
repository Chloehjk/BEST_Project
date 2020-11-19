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
    sales = models.IntegerField()   # 매출액
    business_profit = models.IntegerField()  #영업이익
    net_profit = models.IntegerField()  #당기순이익
    bp_percent = models.IntegerField()  #영업이익률
    np_percent = models.IntegerField()  #순이익률
    roe = models.IntegerField() 
    debt_ratio = models.IntegerField()  #부채비율
    quick_ratio = models.IntegerField()  #당좌비율
    reserve_ratio = models.IntegerField()  #유보율
    eps = models.IntegerField()
    per = models.IntegerField()
    bps = models.IntegerField()
    pbr = models.IntegerField()
    per_share = models.IntegerField()  #주당배당금
    dividend_rate = models.IntegerField()  #시가배당률
    propensity_rate = models.IntegerField()  #배당성향

class POSORNEG(models.Model):
    code = models.ForeignKey(KOSPI50, on_delete = models.CASCADE)
    name = models.CharField(max_length=10)
    pos = models.IntegerField()
    neg = models.IntegerField()
    neu = models.IntegerField()
    total = models.IntegerField()
    pos_pn = models.IntegerField()  #긍정/긍정+부정
    pos_pnn = models.IntegerField()  #긍정/긍정+부정+중립


class MEANOFPER(models.Model):  #PER평균
    industry = models.CharField(max_length=20)   #업종
    per = models.IntegerField()  #업종별 평균 PER
    company = models.CharField(max_length=50)  #해당회사