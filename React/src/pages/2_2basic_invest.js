import React from 'react';
import 'pages_css/2_2basic_invest.css';


export default function BasicInvest()
{
    return(
        <>
            <div id='content'>
                <div id='content_gray'>
                    <div class='box'>
                        <ul id='theme'>✔ 투자 방법 간단 정리</ul>
                        <ul id='description'>투자 방법을 크게 3가지로 나누어 설명하겠습니다. 
                            실제로 많이 쓰이는 방법이기도 하지만, 주관적 요소가 가미되었다는 점 참고해주세요!<br/>
                            추천하는 방법은 1번과 2번을 적절히 사용하는 것입니다. 
                            주린이(줄임말 : 주식어린이)들이 처음 주식을 시작할 때 3번 방법으로 돈을 잃는 경우가 있는데요,<br/>
                            물론 3번으로 돈을 버신 분 또한 계십니다. 
                            어찌되었건 돈 번 사람이 승자니까요! <a>그렇지만 저희는 단기투자가 목적이 아니라, 중단기를 바라보며 돈을 투자하는 방법을 선호합니다.</a><br/>
                            부디 아래 설명을 참고하시어 본인에게 맞는 방법을 찾기를 바랍니다😊</ul>
                        <ul id='comment'>comment by 끌로이 🤔</ul>
                    </div>
                </div>
                <div id='content_white'>
                    <ul class='title'>1. 기업의 기초체력 확인</ul>
                    <li class='idea'>: 보통 ‘펀더멘탈(fundamental) 투자’라고 불리우는 방법입니다.
                        기업의 재무제표에 명시되어 있는 지표들을 활용하여 기업의 기초 체력을 확인합니다.<br/>
                        재무적으로 안정적인지, 미래 성장 가능성이 있는지 등을 볼 수 있습니다.
                        또한 이를 활용해 기업이 가진 가치가 주가에 반영이 잘 되었는지 아닌지를 판단할 수 있습니다.</li>
                    <li class='idea'>저희는 저평가 되었을 때 해당 기업의 주식을 매수하여 고평가 되었을 때 매도하는 가치투자를 선호합니다.<br/>
                        Best의 분석 Tool을 활용해 본인이 관심 있는 주식이 저평가되었는지 고평가 되었는지 확인하시고, 재무적으로 안정이 되었는지 확인해보세요!</li>
                    <div>
                        <a>Fundamental Tool</a>
                    </div>
                </div>
            </div>
        </>
        
    )
}
