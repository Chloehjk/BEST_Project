import ReactDOM from 'react-dom';
import React from 'react';
import 'pages_css/1_1project.css';
import { BackTop, Anchor } from 'antd';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

const { Link } = Anchor;

function IntroProject()

{
   
    return(
     
  
        
            <div id='content'>
                <div id='content_top'>
                    <div class='box'>
                        <ul id='theme'>✔ BEST 프로젝트 소개</ul>
                        <ul id='description'>
                            
                        BEST 프로젝트의 기획부터 완성까지의 단계를 한번에 보실 수 있습니다.<br/>
                        어떤 과정을 거쳐 BEST가 여러분께 선보일 수 있게 되었는지 궁금하시지 않으세요?<br/>
                        팀원들의 많은 노력 끝에 탄생한 BEST 프로젝트의 탄생과정을 소개합니다!👶🏻 
                        
                        </ul>  

                    </div>
                    
                </div>
            
                <div id = 'total_container'>

                    <div id = 'introduce_container'>
                    <Anchor>
                        <Link href="#components-anchor-demo-basic" title="프로젝트 명" />
                        <Link href="#components-anchor-demo-static" title="주제 선정 배경" />
                        <Link href="#components-anchor-demo-static" title="데이터 수집 및 활용방법" />
                        <Link href="/4services" title="주제 선정 배경" />
                    </Anchor>
                        <div id = 'introduce_title'>
                        프로젝트명
                        </div>

                        <div id = 'introduce_body0'>
                        주린이들을 위한 주식지침서 (Wanna Be <b>BEST</b> Stock Holder📈)
                        </div>
                    </div>
                  

                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        주제 선정 배경
                        </div>
                        <div id = 'introduce_body1'>
                        주식을 시작하고 싶지만 입문 방법을 몰라 고민하고 계신 분들과, <br/>
                        주식을 시작한지얼마 되지 않아 주식에 대해 많은 지식이 없는 주린이들을 위해<br/>
                        BEST가 준비한 주식 기초정보를 익히고 투자방법에 대해서도 함께 알아보는 사이트가 있으면 좋겠다고 생각하여 만들게 되었습니다.😊
                        </div>
                    </div>

                    
                    

                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        데이터 수집 및 활용방법
                        </div>
                        <div id = 'introduce_body4'>
                            <div id = 'data'>
                                뉴스기사 크롤링 (워드클라우드, 긍부정 단어)<br/>
                                재무제표<br/>
                                주식차트<br/>
                                A Correspondence published in The Lancet Infectious Diseases presents <br/>
                                the first confirmed case of SARS-CoV-2 reinfection in South America. A 46-year-old male in <br/>
                                Ecuador initially tested positive for COVID-19 in May 2020 before receiving a negative result by June 3rd. <br/>
                                One month later, the patient once again presented symptoms suggestive of COVID-19, this time more severely, <br/>
                                and tested positive for COVID-19. Phylogenetic analysis <br/>
                               
                            </div>
                        </div>
                    </div>

                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        구현기능
                        </div>
                        <div id = 'introduce_body5'>
                            <a href = '/2_1basic_stock'>
                                ① 주식기초백과
                            </a>
                            <font color = 'gray'> Click 👈🏻</font><br/>
                            주식에 대한 기초 지식과 투자 방법에 대해 알아 볼 수 있는 페이지 입니다.<br/><br/>

                            <a href = '/3kospi50'>
                                ② KOSPI50
                            </a>
                            <font color = 'gray'> Click 👈🏻</font><br/>
                            기업별 재무제표와 주식의 급락/급등 포인트를 워드클라우드를 통해 한눈에 보실수 있습니다.<br/> 
                            뉴스기사 데이터를 통한 기업의 주식관련 긍부정 키워드 비율도 알아보세요!<br/><br/>

                            <a href = '/4services'>
                                ③ 펀더멘탈 분석서비스
                            </a>
                            {/* <NavLink to="/4services">
                                <b><font size = '4'>③ 펀더멘탈 분석서비스</font></b>
                            </NavLink> */}

                            <font color = 'gray'> Click 👈🏻</font><br/>
                            재무제표를 지표를 바탕으로 기업의 기초체력을 확인할 수 있는 분석tool을 제공합니다.<br/> 
                            1. PER, PBR지표를 활용한 주식의 고평가/저평가 여부를 확인 할 수 있습니다.<br/>
                            2. 유보율과 부채비율을 활용한 기업의 재무안정도를 확인 할 수 있습니다.
                            
                        </div>
                               
                    </div>

                    <div id = 'introduce_container'>
                        
                        <div id = 'introduce_title'>
                            기대효과
                        </div>
                        
                        <div id = 'introduce_body6'>
                        <p>- 주식투자 시 개인의 손실 최소화</p>
                        <p>- 주식 기초 지식을 습득할 수 있는 정보제공의 장 마련</p>
                        <p>- 주가정보 플랫폼과의 연계</p>
                        <p>- 광고 수익 창출 기대효과</p>
                        </div>
                    </div>

                    <BackTop>
                        <div id= 'up'>up</div>
                        {/* <div style={style}>UP</div> */}
                    </BackTop>
                    
                </div>   
             
            </div>
            
    )


}


export default IntroProject


