import os
import pandas as pd
from konlpy.tag import Twitter 
from collections import Counter

from wordcloud import WordCloud 
import matplotlib.pyplot as plt
%matplotlib inline
# from PIL import Image # mask 테스트
# import numpy as np # mask 테스트
# mask는 이미지를 다운받아 이미지의 모양대로 워드클라우드 만들게 해주는 기능!

import nltk
from nltk.corpus import stopwords
 

import matplotlib
from IPython.display import set_matplotlib_formats


for i in file_list:
    
    file = open("C:/Users/ASIA/ToohrProject/워드기업별/" + i,'r', encoding='UTF8')
    lists = file.readlines() 
    file.close() 
    lists
    
    company = i.split('_')[0]
    for j in codelist:
        if j[0] == company:
            code = j[1]
     
    date = i.split('_')[1].replace('.csv','')

    # 형태소 나누기
    twitter = Twitter()
    morphs = [] 
    for sentence in lists: 
        morphs.append(twitter.pos(sentence)) 
    
#     명사, 형용사, 부사만 추출
    noun_adj_adv_list=[] 
    
    for sentence in morphs : 
        for word, tag in sentence : 
    #         포함하지 않을 단어 지정
            if tag in ['Noun'] and ("이" not in word) and ("등" not in word)and ("데" not in word)and ("사"not in word) and("때"not in word)and("며"not in word)and("수"not in word)and("내"not in word)and("달"not in word)and("못"not in word)and("원"not in word)and("점"not in word)and("안"not in word)and("날"not in word)and("권"not in word)and("임"not in word): 
                noun_adj_adv_list.append(word)
    words = (','.join(noun_adj_adv_list))
                
    InsertWordCloud(date, words, code)
////////////////////////////////////////////////////////////////////
import pymysql
db=pymysql.connect(host='database-1.cnaloacjmwtw.ap-northeast-2.rds.amazonaws.com',port='',user='TooHR',passwd='',db='TooHRProject',charset='utf8') 

def InsertWordCloud(date, words, code_id):
    cursor = db.cursor()
    sql ="""
        INSERT INTO Best_makewordcloud(date, words, code_id)
        VALUES(%s,%s,%s)"""
    cursor.execute(sql, (date, words, code_id))
    db.commit()