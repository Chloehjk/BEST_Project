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

path_dir = 'C:/Users/ASIA/ToohrProject/워드기업별'
 
file_list = os.listdir(path_dir)

for i in file_list[:2]:
    # 파일불러오기
    print("start======>", i)
    
    file = open("C:/Users/ASIA/ToohrProject/워드기업별/" + i,'r', encoding='UTF8')
    lists = file.readlines() 
    file.close() 
    lists

    # 형태소 나누기
    twitter = Twitter()
    morphs = [] 
    for sentence in lists: 
        morphs.append(twitter.pos(sentence)) 
        
    #print(morphs)
    
#     명사, 형용사, 부사만 추출
    noun_adj_adv_list=[] 
    
    for sentence in morphs : 
        for word, tag in sentence : 
    #         포함하지 않을 단어 지정
            if tag in ['Noun'] and ("이" not in word) and ("등" not in word)and ("데" not in word)and ("사"not in word) and("때"not in word)and("며"not in word)and("수"not in word)and("내"not in word)and("달"not in word)and("못"not in word)and("원"not in word)and("점"not in word)and("안"not in word)and("날"not in word)and("권"not in word)and("임"not in word): 
                noun_adj_adv_list.append(word) 
    
    count = Counter(noun_adj_adv_list)
    words = dict(count.most_common())

    matplotlib.rc('font',family = 'Malgun Gothic')

    set_matplotlib_formats('retina') #글자 선명하게?

    matplotlib.rc('axes',unicode_minus = False)


    wordcloud = WordCloud(max_font_size=250,
                          font_path = 'C:/Users/ASIA/ToohrProject/NanumBarunpenB.ttf', 
                          background_color='white',
                          colormap = "Accent_r", #폰트색정하기
                          width=680, 
                          height=450
                          ).generate_from_frequencies(words) 


    plt.imshow(wordcloud) 
    plt.axis('off') 
    plt.savefig('C:/저장위치설정/'+i.replace('.csv','')+'.svg', dpi=300) 
      