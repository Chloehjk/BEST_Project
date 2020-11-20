import React from 'react';
import 'pages_css/3kospi50.css';


export default function Kospi50()
{
    return(
        <>
            <div>
                <div id='content_gray3'>
                    <div class='box3'>
                        <h4 id='title'>✔ KOSPI50 기업별 특징을 알아보세요</h4>
                        <div id='sub_title'>
                            <p>① 주식기초백과는 공부하셨나요? 그렇다면 이제는 재무제표를 확인해 볼 때!</p>       
                            <p>② 2020 급락/급등 point 탐구! 주요 사건 키워드를 워드클라우드를 통해 제공합니다.</p>
                            <p>③ 관심기업의 최근 동향이 궁금하신가요? 뉴스데이터 분석을 통한 긍정/부정 비율을 확인해보세요.</p>       
                            <p2 id='comment'>comment by 져니✨</p2>
                        </div>
                    </div>
                </div>
                
                <div id='kospi50_list'>
                    기업리스트 여기
                </div>

                <div id='content_white3'>

                    <div id='chart'> 
                        차트는 요기~

                    </div>
                    <div id='buttons'>
                        <button id ='button'>재무제표 🔻</button>
                        <button id ='button'>급락 급등 Point 🔻</button>
                        <button id ='button'>긍정 or 부정 분석 결과 🔻</button>
                    </div> 

                    <div id='show_contents'>
                        세부내용
                    </div>
                  
                
                </div>
            </div>
        </>
        
    )
}
