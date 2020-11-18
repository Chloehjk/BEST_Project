import React from 'react';
import testimg1 from 'images/StockTerms.png';
import testimg2 from 'images/Stockbasic.png';
import ReactDOM from 'react-dom';
import 'pages_css/2_2basic_invest.css';


export default function BasicStock()
{
    return(
        <>
            
            <div id='content'>
                <div id='content_gray'>
                    <div class='box'>
                        <ul id='theme'>✔ 주식 시장이란?</ul>
                        <ul id='description'>주식이란 뭘까요?! <br/>
                        주식을 시작하기로 마음을 먹었어도 어디서부터 뭘 해야될지 막막하기만 할텐데요,
                        <a> 주린이(줄임말: 주식어린이)들을 위해 주식에 대해 알아야할 정보를 네 가지로 나눠 준비했습니다.</a><br/>
                        아예 처음이신 분들을 위해 계좌 개설 방법도 하단에 내용을 첨부해놓았답니다.
                        1번을 통해 기본 지식을 습득하신 후, 2번과 3번내용을 참고하여 원하는 주식을 고르시는데 참고해보세요!👍<br/>                        
                        BEST가 준비한 정보로 주식 입문에 대한 두려움을 덜고,<a> 저희와 함께 BEST stock holder로 성장해봅시다.😊</a><br/></ul> 
                        <ul id='comment'>comment by 라니😉</ul> 

                    </div>
                </div>
                <div id='content_white'>
                    <ul class='title'>1. 주식 기초 개념 익히기</ul>
                        <li class='idea'> 주식을 처음 시작하려고 하면 많은 주식용어, 복잡한 차트 때문에 어디서부터 접근을 해야될지 어려움이 따르기 마련입니다.  
                            내용을 입력하세요.<br/>
                            아래의 블로그 링크를 보며 전반적인 내용을 이해 한 후, 영상을 보시면 더욱 이해하기에 편합니다.</li>

                        <div>
                            <img id='test1' src={testimg1}/>
                        </div>

                        <div>
                            <img id='test1' src={testimg2}/>
                        </div>
                        
                        <li class='idea'>
                            {/* 블로그 링크 넣기 */}
                            <br/>
                            주식에 대한 전반적인 내용이 이해가셨나요? <br/>
                            그렇다면 이번엔 영상을 통해 더욱 기본기를 다져보는 시간을 가져보시길 바랍니다.</li>
                            {/* 유튜브 링크넣기 */}
                            {/* <p align = 'middle'>
                            <frameset rows="300,*" frameborder="1">
                            <iframe framespacing="20px" vspace ="20" width="450" height="350" src="https://www.youtube.com/embed/LzXzHoXO5ZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <iframe marginwidth="20px" width="450" height="350" src="https://www.youtube.com/embed/-d291restec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </frameset>
                            </p> */}
                    <ul class='title'>2. 주식을 고를때 유의할점!</ul>
                        <li class='idea'> 주식을 고를때에 여러가지 사항을 확인한 후 신중한 선택을 하는 것이 중요한데요, 그 중에서도 '재무제표'를 꼭 참고하여 주식을 고를 필요가 있습니다.<br/> 
                            좋은 주식을 고르기 전 꼭 확인해야 할 기업의 재무제표! 같이 알아볼까요? <br/>
                            내용을 입력하세요.
                            내용을 입력하세요.</li>
                        <p align = 'middle'>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/92550HuR3Ss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/UDNbcrIrfzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/ZpSdwgL5K5A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </p>
                    <ul class='title'>3. 주식차트분석</ul>
                        <li class='idea'> 주식차트 분석하는 법 아직 모르시죠? 저희 투현란이 알려드립니다!
                            내용을 입력하세요.<br/>
                            내용을 입력하세요.
                            내용을 입력하세요.</li>

                        <ul class='title'>4. 주식 계좌 개설 방법 안내</ul>
                        <li class='idea'> 주식을 시작하려면 먼저 계좌를 개설해야합니다. 
                            계좌개설이 주식을 시작하기 위한 첫단계라고 말할 수 있죠!<br/>
                            근데 어떻게 해야될지 막막하시죠?
                            저희 투현란이 알려드립니다!</li>
                    
                    <div>
                        <a>Fundamental Tool</a>
                    </div>
                </div>
            </div>
    </>
        
    )
}




