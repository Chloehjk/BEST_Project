from os.path import isfile, join
from os import listdir
import csv
import re
import pandas as pd


### 긍정, 부정 키워드 파일 불러와서 따로, 합친거 리스트화
posneg = []

f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/긍정, 부정 단어 모음/thr_positive_words(1102).txt', 'r', encoding='utf-8')
pos = f.readlines()

for xx in range(len(pos)):
    pos[xx] = pos[xx].replace('\n','')
    posneg.append(pos[xx])
pos = sorted(pos)

f = open('C:/Users/ASIA/Desktop/투현란 프로젝트/긍정, 부정 단어 모음/thr_negative_words(1102).txt', 'r', encoding='utf-8')
neg = f.readlines()


for xx in range(len(neg)):
    neg[xx] = neg[xx].replace('\n','')
    posneg.append(neg[xx])

neg = sorted(neg)


## 뉴스크롤링 데이터 저장경로 조회를 통한 이름 불러오기/ 폴더경로 설정 요망
filepath ="C:/기업뉴스 크롤링(통합)"

files = [x for x in listdir(filepath) if isfile(join(filepath,x))]



def what_is_pos_neg(company):
    label = []
    my_title_dic = {"title":[], "label":[]}

    j = 0
    for title in titles:
        my_title_dic['title'].append(title)

        ###  기사 제목이 pos든 neg든 키워드를 포함하고 있는지 확인   
        for i in range(len(posneg)):
            posflag = False
            negflag = False
            if i < (len(pos)-1):
                if title.find(posneg[i]) != -1:
                    posflag = True
                    break
                    
            if i > (len(pos)-2):
                if title.find(posneg[i]) != -1:
                    negflag = True
                    break
        if posflag == True:
            label.append(1)
        elif negflag == True:
            label.append(-1)
        elif (negflag == False) and (posflag == False):
            label.append(0)

        j += 1

    ###########  파일 저장
    my_title_dic['label'] = label
    my_title_df = pd.DataFrame(my_title_dic)
    my_title_df.to_csv(f'label{com}', encoding='utf-8')

    ###########pos, neg, neu 몇 개인지
    pos_num = 0
    neg_num = 0
    neu_num = 0
    pos_neg_neu = []
    total = []

    for i in my_title_df['label']:
        if i == 0:
            neu_num += 1
        elif i == 1:
            pos_num +=1
        else:
            neg_num += 1
    print(com, '긍정 개수 : ', pos_num, '부정 개수 :', neg_num, '중립 개수 :',neu_num)




##### 기업 리스트로 돌리면서 what_is_pos_neg 함수 호출 

for com in files:
    titles = []
    news = []
    try:
        f = open(f'C:/기업뉴스 크롤링(통합)/{com}', 'r', encoding='utf-8')
        # 폴더 경로 설정 요망
#         with open(f'C:/Users/ASIA/Desktop/투현란 프로젝트/주가데이터(통합)/{com}','r', encoding='utf-8') as f:
        reader = csv.reader(f)
    except:
        f = open(f'C:/기업뉴스 크롤링(통합)/{com}', 'r', encoding='cp949')
        # 폴더 경로 설정 요망
#         with open(f'C:/Users/ASIA/Desktop/투현란 프로젝트/주가데이터(통합)/{com}','r', encoding='cp949') as f:
        reader = csv.reader(f)
    for txt in reader:
        temp = txt[1]
        text = re.sub('[-=+,#/\?:^$.@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', '', str(temp))
        titles.append(text)
    titles = titles[1:]
    what_is_pos_neg(com)

