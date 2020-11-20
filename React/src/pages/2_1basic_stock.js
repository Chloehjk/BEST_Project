import React from 'react';
import blogimage1 from 'images/blog1.PNG';
import blogimage2 from 'images/blog2.PNG';
import blogimage3 from 'images/blog3.PNG';
import blogimage4 from 'images/blog4.PNG';
import ReactDOM from 'react-dom';
import 'pages_css/2_1basic_stock.css';
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
                        <li class='idea'> 
                            주식을 처음 시작하려고 하면 많은 주식용어, 복잡한 차트 때문에 어디서부터 접근을 해야될지 어려움이 따르기 마련입니다.<br/>
                            그런 주린이들을 위해 주식에 대한 기초를 다질 수 있는 자료들을 준비했어요😊<br/> 
                            주린이들도 쉽게 이해할 수 있는 기본지식과 주식용어를 정리해두었으니 차근차근 알아보도록해요!<br/>
                            아래의 블로그 링크를 보며 전반적인 내용을 이해 한 후, 영상을 보시면 더욱 이해하기에 편합니다.</li>

                            <div id='blog_container'>
                                <div id='blog_step'>                                    
                                    <span>step 1👇🏻</span>
                                    <a href="https://blog.naver.com/e_adventure/221593948809">
                                        <img id='blog1' src={blogimage1} alt='설명'/>
                                    </a>
                                </div>
                                <div id='blog_step'>                                    
                                    <span>step 1👇🏻</span>
                                    <a href="https://www.goodchobo.com/magazine/MZTY/492">
                                        <img id='blog2' src={blogimage2} alt='설명'/>
                                    </a>
                                </div>
                            </div>

                        <li class='idea'> 
                        주식에 대한 전반적인 내용이 이해가셨나요? <br/>
                        그렇다면 이번엔 영상을 통해 기본기를 탄탄하게 다져보는 시간을 가져볼까요?
                        </li>
                        {/* 유튜브 링크넣기 */}
                        <p align = 'middle'>
                        <iframe id='youtube1' src="https://www.youtube.com/embed/LzXzHoXO5ZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                        <iframe id='youtube2' src="https://www.youtube.com/embed/-d291restec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                        </p>
                        <ul class='title'>2. 주식을 고를때 유의할점!</ul>
                            <li class='idea'> 
                            주식을 고를때에 여러가지 사항을 확인한 후 신중한 선택을 하는 것이 중요한데요, 그 중에서도 '재무제표'를 꼭 참고하여 주식을 고를 필요가 있습니다.<br/>
                            재무제표라는 단어를 처음들어보신 분들고 있을테고 들어는 봤어도 재무제표를 읽는법에 대해 어려움을 느끼던 분들도 있을텐데요, <br/>
                            그런 분들에게도 쉽고 빠르게 재무제표에 대해 이해 할 수 있도록 저희 BEST가 영상을 몇가지 준비했습니다.😀<br/>
                            좋은 주식을 고르기 전 꼭 확인해야 할 기업의 재무제표! 아래 영상을 보며 같이 알아볼까요? <br/>
                            </li>
                        <div id = 'youtube_container'>
                            <p align = 'middle'>
                            <iframe id='youtube3' src="https://www.youtube.com/embed/uhqFaT0YI1w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                            <iframe id='youtube4' src="https://www.youtube.com/embed/UDNbcrIrfzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                            <iframe id='youtube5' src="https://www.youtube.com/embed/ZpSdwgL5K5A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                            </p>
                        </div>
                        <ul class='title'>3. 주식차트분석📈</ul>
                            <li class='idea'>
                                주식이라는 단어를 들었을 때에 빨간색과 파란색의 선들로 이루어진 차트를 떠올리는 분들이 많을텐데요,<br/>
                                주식차트를 보며 매수, 매도를 결정할 수 있고 상장 기업의 그 동안의 주식 변동여부를 확인 할수도 있습니다.<br/>
                                주식차트에는 매우 다양한 종류가 있고 차트에서 사용되는 용어 또한 많습니다. <br/>
                                그중에서도 국내에서 주로 많이 사용되고 있는 봉차트(캔들차트)에 대해서 알아볼까요?<br/>
                                봉차트라는 단어를 처음들어봤다구요? 걱정마세요🙅🏻‍♀️ <br/>주린이들을 위해 주식차트에 쓰이는 용어와 봉차트의 기본개념을 알기쉽게 정리해 놓은 자료를 준비하였답니다.📋<br/>
                            
                            </li>

                        {/* 블로그 */}
                        <div id='blog_container'>
                            <div id='blog_step'>                                    
                                <span>차트용어 알아보기👇🏻</span>
                                <a href="https://www.goodchobo.com/magazine/MZTY/533">
                                    <img id='blog3' src={blogimage3} alt='설명'/>
                                </a>
                            </div>
                            <div id='blog_step'>                                    
                                <span>봉차트 개념 파악하기👇🏻</span>
                                <a href="https://blog.naver.com/kiwoomhero/90129539968">
                                    <img id='blog4' src={blogimage4} alt='설명'/>
                                </a>
                            </div>
                        </div>

                            <li class='idea'> 
                            어느정도 이해가 되셨나요? 아직 어려우시다면 아래 영상을 통해 조금 더 알아볼까요?<br/>
                            봉차트에 대한 보다 자세한 설명과 주식차트에 대한 더 많은 정보를 얻으실 수 있습니다.<br/>
                            
                            </li>

                        {/* 유튜브    */}
                        <p align = 'middle'>
                        <iframe id='youtube6' src="https://www.youtube.com/embed/HXsuDfgQrtU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                        <iframe id='youtube7' src="https://www.youtube.com/embed/hI3pzjLbOzY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                        <iframe id='youtube8' src="https://www.youtube.com/embed/jkgQ3xKilxs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                        </p>

                        <ul class='title'>4. 증권 계좌 개설 방법 안내</ul>
                        <li class='idea'> 
                            주식을 시작하려면 먼저 증권계좌를 개설해야합니다. 증권 계좌 개설이 주식을 시작하기 위한 첫단계라고 말할 수 있죠!<br/>
                            국내 증권사의 경우 그 종류도 많고, 증권사에서 진행하고 있는 이벤트도 다양한 만큼 이것저것 따져본 뒤 선택하는 것이 중요합니다.<br/>
                            좋은 증권사를 선택하는 것에서부터 주린이들의 슬기로운 주식 생활이 시작됩니다.👍<br/>
                            아래 영상을 통해 증권사를 선택하는 기준과 증권 계좌 개설 방법을 확인해보세요!</li>
                        <p align = 'middle'>
                        <iframe id='youtube9' src="https://www.youtube.com/embed/h9ikz68Xvv4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                        <iframe id='youtube10' src="https://www.youtube.com/embed/D7v9thA97tI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                        </p>

                    <div>
                        <a>Fundamental Tool</a>
                    </div>
                </div>
            </div>
    </>
        
    )
}




