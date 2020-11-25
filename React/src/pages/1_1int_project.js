import ReactDOM from 'react-dom';
import React from 'react';
import 'pages_css/1_1project.css';
import { Timeline } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';


function IntroProject(){

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
                        <div id = 'introduce_title'>
                        프로젝트명
                        </div>
                        <div id = 'introduce_body'>
                        주린이들을 위한 주식지침서 (Wanna Be <b>BEST</b> Stock Holder📈)
                        </div>
                    </div>


                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        주제 선정 배경
                        </div>
                        <div id = 'introduce_body'>
                        주식을 시작하고 싶지만 입문 방법을 몰라 고민하고 계신 분들과, <br/>
                        주식을 시작한지얼마 되지 않아 주식에 대해 많은 지식이 없는 주린이들을 위해<br/>
                        BEST가 준비한 주식 기초정보를 익히고 투자방법에 대해서도 함께 알아보는 사이트가 있으면 좋겠다고 생각하여 만들게 되었습니다.
                        </div>
                    </div>

                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        제작 기간
                        </div>
                        <div id = 'introduce_body'>
                        <p>2020.10.28~2020.12.01</p>
                        
                        <Timeline>
                            <Timeline.Item dot={<CarryOutOutlined className="timeline-clock-icon" />} color="blue" style={{ fontSize: '16px' }}>
                                2020-10-28
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                                웹기획 디자인 구성<br/> 뉴스 크롤링, 워드클라우드 코드 제작 및 코드 실행<br/>
                                KOSPI50 긍/부정 키워드 데이터 생성  
                            </Timeline.Item>

                            <Timeline.Item dot={<CarryOutOutlined className="timeline-clock-icon" />} color="blue" style={{ fontSize: '16px' }}>
                                2020-11-02
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                                KOSPI50기업별 주식 차트 데이터 수집
                            </Timeline.Item>

                            <Timeline.Item dot={<CarryOutOutlined className="timeline-clock-icon" />} color="blue" style={{ fontSize: '16px' }}>
                                2020-11-11
                            </Timeline.Item>
                            <Timeline.Item color="green">
                                BEST배너제작<br/>
                                주식기초백과 페이지 레이아웃 및 내용 구성<br/>
                                데디터베이스 폴더 생성 및 연동<br/>
                                메인페이지 디자인 구성<br/>
                            </Timeline.Item>

                            <Timeline.Item dot={<CarryOutOutlined className="timeline-clock-icon" />} color="blue" style={{ fontSize: '16px' }}>
                                2020-11-16
                            </Timeline.Item>
                            <Timeline.Item color="green">
                                프론트엔드 제작<br/>
                                DDDD<br/>
                                AWS연동<br/>
                            </Timeline.Item>

                            <Timeline.Item dot={<CarryOutOutlined className="timeline-clock-icon" />} color="blue" style={{ fontSize: '16px' }}>
                                2020-12-01
                            </Timeline.Item>
                            <Timeline.Item color="green">
                                프론트엔드 제작 마무리<br/>
                                최종점검 및 발표준비<br/>
                              
                            </Timeline.Item>
                        </Timeline>

                      


                       

                        </div>
                    </div>

                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        팀원 구성 및 역할
                        </div>
                        <div id = 'introduce_body'>
                        <b><font size = '3'>김현진</font></b> - 역할을 적어주세요.<br/>
                        <font color = 'gray'>Click ☝🏻</font><br/><br/>
                        <b><font size = '3'>이지현</font></b> - 역할을 적어주세요.<br/>
                        <font color = 'gray'>Click ☝🏻</font><br/><br/>
                        <b><font size = '3'>한수란</font></b> - 워드클라우드 및 프론트엔드 제작<br/>
                        <font color = 'gray'>Click ☝🏻</font><br/>
                        (members 페이지로 랜딩되도록!)
                        </div>
                    </div>

                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        데이터 수집 및 활용방법
                        </div>
                        <div id = 'introduce_body'>
                            <div id = 'data'>
                                뉴스기사 크롤링 (워드클라우드, 긍부정 단어)<br/>
                                재무제표<br/>
                                주식차트
                            </div>
                        </div>
                    </div>

                    <div id = 'introduce_container'>
                        <div id = 'introduce_title'>
                        구현기능
                        </div>
                        <div id = 'introduce_body'>
                            <b><font size = '4'>① 주식기초백과</font></b>
                            <font color = 'gray'> Click 👈🏻</font><br/>
                            주식에 대한 기초 지식과 투자 방법에 대해 알아 볼 수 있는 페이지 입니다.<br/><br/>

                            <b><font size = '4'>② KOSPI50</font></b>
                            <font color = 'gray'> Click 👈🏻</font><br/>
                            기업별 재무제표와 주식의 급락/급등 포인트를 워드클라우드를 통해 한눈에 보실수 있습니다.<br/> 
                            뉴스기사 데이터를 통한 기업의 주식관련 긍부정 키워드 비율도 알아보세요!<br/><br/>
                         
                            <b><font size = '4'>③ 펀더멘탈 분석서비스</font></b>
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
                        <div id = 'introduce_body'>
                        1. 주식투자 시 개인의 손실 최소화<br/> 
                        2. 주식 기초 지식을 습득할 수 있는 정보제공의 장 마련<br/> 
                        3. 주가정보 플랫폼과의 연계<br/> 
                        4. 광고 수익 창출 기대효과<br/> 
                        </div>
                    </div>
                </div>   
            </div>     
  
            
    )


}


export default IntroProject


