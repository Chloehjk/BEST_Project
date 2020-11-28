import React from 'react';
import 'pages_css/1_2team.css';
import face1_img from 'images/hj.png';
import face2_img from 'images/jh.jpg';
import face3_img from 'images/sr.jpg';
import mickey_img from 'images/mickey.jpg';
import { GithubOutlined, MailOutlined, LinkOutlined, CheckOutlined } from '@ant-design/icons';
import { Affix, BackTop } from 'antd';



export default function IntroTeam()
{
    const [now, setNow] = React.useState(1)

    const test = e =>{
        console.log(e)
        setNow(e)
        // console.dir(e.target.getAttribute("value"))
    }
    
    // const trigger = new ScrollTrigger({
    //     trigger: {
    //       once: true
    //     }
    // })
    
    function callback(key) {
        console.log(key);
    }

    return(
        <>
            <div id='content1_2'>
                <div id='content_gray2'>
                    <div class='team_box'>
                        <ul id='theme'>✔ 팀원 프로필 소개</ul>
                        <ul id='description'>
                            BEST프로젝트의 팀원을 소개합니다. <br/>
                            세명이서 제작기간동안 열심히 어쩌구<br/>
                            어떤 역할을 통해 BEST프로젝트를 선보일 수 있었는지 알아볼까요?😀
                        </ul>

                        <div id = 'imgThree'>
                            <div id = 'imgfix'>
                                <img id='profile_top1' src={face1_img} alt='현진' value="1" onClick={()=>test(1)}/>
                                <font size = '3'>KIM HYUN JIN ☝🏻</font>
                            </div>

                            <div id = 'imgfix'>
                                <img id='profile_top2' src={face2_img} alt='지현' value="2" onClick={()=>test(2)}/>
                                <font size = '3'>LEE JI HYUN ☝🏻</font>
                            </div>

                            <div id = 'imgfix'>
                                <img id='profile_top3' src={face3_img} alt='수란' value="3" onClick={()=>test(3)}/>
                                <font size = '3'>HAN SURAN ☝🏻</font>
                            </div>
                        </div>
                                                             
                        
                    </div>
                </div>


                <div>
                    {
                        now == 1 && <div className="members">
                            
                            <div id = 'members_container'>

                                <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                                    <div id = 'left'>

                                        {/* <Button>120px to affix top</Button> */}
                                        <div id = 'profile'>
                                            <img id='mickey' src={face1_img} alt='미키'/><br/>
                                            <b>KIM HYUN JIN</b>
                                        </div>      

                                        <div id = 'profile_detail'>  
                                            <MailOutlined /> e-mail :  <br/>
                                            <GithubOutlined /> GitHub : 깃터브주소 입력 <br/>
                                            <LinkOutlined /> Blog : 블로그주소 입력 <br/>
                                            <CheckOutlined /> programing language : Python <br/>
                                        </div>   
                                    </div>               
                                </Affix>

                         
                                <div id = 'right'>
                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            Best 프로젝트 내 역할
                                        </div>

                                        ✔ DB 구축, 크롤링 코드 개발<br/>
                                        웹 디자인 : 배너 제작, 로고제작<br/>
                                        프론트앤드 : 펀더멘탈, 재무제표, 뉴스 확률 분석, 투자 기초 페이지<br/>
                                        백앤드 : Django Model 관리

                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            프로그램 제작 과정 
                                        </div>
                                            내용을입력하세요. <br/>
                                            내용을입력하세요. <br/>
                                            내용을입력하세요. 
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            6. 프로그램 개발 경험
                                        </div>
                                        A Correspondence published in The Lancet Infectious Diseases presents <br/>
                                        the first confirmed case of SARS-CoV-2 reinfection in South America. A 46-year-old male in <br/>
                                        Ecuador initially tested positive for COVID-19 in May 2020 before receiving a negative result by June 3rd. <br/>
                                        One month later, the patient once again presented symptoms suggestive of COVID-19, this time more severely, <br/>
                                        and tested positive for COVID-19. Phylogenetic analysis <br/>
                                        suggests the two infection variants resulted from distinct evolutionary trajectories. <br/>
                                        Authors note surprise that the patient showed a more severe disease in the second infection and state that these 
                                        findings add to the COVID-19 reinfection evidence.
                                  
                                    </div>    


                                 
                                </div>

                            </div>


                        </div>
                    }

                    {
                        now == 2 && <div className="members">
              
                            <div id = 'members_container'>

                                <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                                    <div id = 'left'>

                                        {/* <Button>120px to affix top</Button> */}
                                        <div id = 'profile'>
                                            <img id='mickey' src={face2_img} alt='지현'/><br/>
                                            <b>LEE JI HYUN</b>
                                        </div>      

                                        <div id = 'profile_detail'>  
                                            <MailOutlined /> e-mail :  <br/>
                                            <GithubOutlined /> GitHub : 깃터브주소 입력 <br/>
                                            <LinkOutlined /> Blog : 블로그주소 입력 <br/>
                                            <CheckOutlined /> programing language : Python <br/>
                                        </div>   
                                    </div>               
                                </Affix>


                                <div id = 'right'>
                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            Best 프로젝트 내 역할
                                        </div>

                                        ✔ DB 구축, 크롤링 코드 개발 <br/>
                                        웹 디자인 : 웹페이지 틀 구축 <br/>
                                        프론트앤드 : Kospi50 그래프, Point 워드크라우드 페이지, 배너 슬라이딩 <br/>
                                        백앤드 : Django View 관리

                                    </div>    


                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            프로그램 제작 과정 
                                        </div>
                                            내용을입력하세요. <br/>
                                            내용을입력하세요. <br/>
                                            내용을입력하세요. 
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            6. 프로그램 개발 경험
                                        </div>
                                        A Correspondence published in The Lancet Infectious Diseases presents <br/>
                                        the first confirmed case of SARS-CoV-2 reinfection in South America. A 46-year-old male in <br/>
                                        Ecuador initially tested positive for COVID-19 in May 2020 before receiving a negative result by June 3rd. <br/>
                                        One month later, the patient once again presented symptoms suggestive of COVID-19, this time more severely, <br/>
                                        and tested positive for COVID-19. Phylogenetic analysis <br/>
                                        suggests the two infection variants resulted from distinct evolutionary trajectories. <br/>
                                        Authors note surprise that the patient showed a more severe disease in the second infection and state that these 
                                        findings add to the COVID-19 reinfection evidence.
                                  
                                    </div>    
                                 
                                </div>

                            </div>


                        </div>
                    }

                    {
                        now == 3 && <div className="members">

                        <div id = 'members_container'>

                                <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                                    <div id = 'left'>

                                        {/* <Button>120px to affix top</Button> */}
                                        <div id = 'profile'>
                                            <img id='mickey' src={face3_img} alt='미키'/><br/>
                                            <b>HAN SURAN</b>                                        
                                        </div>      
  
                                        <div id = 'profile_detail'>  
                                            <MailOutlined /> e-mail : soi2524@hanmail.net  <br/>
                                            <GithubOutlined /> GitHub : 깃터브주소 입력 <br/>
                                            <LinkOutlined /> Blog : 블로그주소 입력 <br/>
                                            <CheckOutlined /> programing language : Python <br/>
                                        </div>   
                                    </div>               
                                </Affix>


                                <div id = 'right'>
                                <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            Best 프로젝트 내 역할
                                        </div>

                                            Python기반 워드클라우드 코드 제작<br/>
                                            웹 디자인 : 소개페이지 틀 구축<br/>
                                            프론트앤드 : 주식 기초 페이지, 프로젝트 소개 & 팀원 소개 페이지, 워드크라우드 생성<br/>
                                            백엔드 : 공부중🧡
  
                                          
                                            </div>    


                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            프로그램 제작 과정 
                                        </div>
                                            내용을입력하세요. <br/>
                                            내용을입력하세요. <br/>
                                            내용을입력하세요. 
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <div id = 'profile_contents_title'>
                                            6. 프로그램 개발 경험
                                        </div>
                                        A Correspondence published in The Lancet Infectious Diseases presents <br/>
                                        the first confirmed case of SARS-CoV-2 reinfection in South America. A 46-year-old male in <br/>
                                        Ecuador initially tested positive for COVID-19 in May 2020 before receiving a negative result by June 3rd. <br/>
                                        One month later, the patient once again presented symptoms suggestive of COVID-19, this time more severely, <br/>
                                        and tested positive for COVID-19. Phylogenetic analysis <br/>
                                        suggests the two infection variants resulted from distinct evolutionary trajectories. <br/>
                                        Authors note surprise that the patient showed a more severe disease in the second infection and state that these 
                                        findings add to the COVID-19 reinfection evidence.
                                  
                                    </div>    


                                </div>

                            </div>

                         

                        </div>
                    }


                </div>
                <BackTop>
                    <div id= 'up'>up</div>            
                </BackTop>
            </div>
        </>
        
    

     


    )


    
}

