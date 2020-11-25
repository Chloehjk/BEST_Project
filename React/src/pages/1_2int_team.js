import React from 'react';
import 'pages_css/1_2team.css';
import face1_img from 'images/face1.png';
import face2_img from 'images/face2.png';
import face3_img from 'images/face3.png';
import profile_img from 'images/profile.jpeg';
import mickey_img from 'images/mickey.jpg';
import { GithubOutlined, MailOutlined, LinkOutlined, CheckOutlined } from '@ant-design/icons';
// import ScrollTrigger from '@terwanerik/scrolltrigger'


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
            <div id='content'>
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
                                <font size = '3'>KIM HYEON JIN</font>
                            </div>

                            <div id = 'imgfix'>
                                <img id='profile_top2' src={face2_img} alt='지현' value="2" onClick={()=>test(2)}/>
                                <font size = '3'>LEE JI HYEON</font>
                            </div>

                            <div id = 'imgfix'>
                                <img id='profile_top3' src={face3_img} alt='수란' value="3" onClick={()=>test(3)}/>
                                <font size = '3'>HAN SURAN</font>
                            </div>
                        </div>
                                                             
                        
                    </div>
                </div>


                <div>
                    {
                        now == 1 && <div className="members">
                            
                            <div id = 'members_container'>

                                <div id = 'left'>

                                    <div id = 'profile'>
                                        <img id='mickey' src={mickey_img} alt='미키'/>
                                        KIM HYEON JIN
                                    </div>      

                                    <div id = 'profile_detail'>  
                                        <MailOutlined /> e-mail :  <br/>
                                        <GithubOutlined /> GitHub : 깃터브주소 입력 <br/>
                                        <LinkOutlined /> Blog : 블로그주소 입력 <br/>
                                        <CheckOutlined /> programing language : Python <br/>
                                    </div>                   
                                </div>


                                <div id = 'right'>
                                    <div id = 'profile_contents'>  
                                        <p><font size = '5'>Best 프로젝트 내 역할</font><br/></p>
                                        Python기반 워드클라우드 제작 <br/>
                                        워드클라우드 제작과정
                                        konlpy 설치 <br/>
                                        내용을입력하세요.The immune system’s memory <br/>
                                        of the new coronavirus lingers for at least six months in most people. <br/>
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <p><font size = '5'>프로그램 제작 과정</font><br/></p>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <font size = '5'>6. 프로그램 개발 경험</font><br/>
                                        A Correspondence published in The Lancet Infectious Diseases presents <br/>
                                        the first confirmed case of SARS-CoV-2 reinfection in South America. A 46-year-old male in <br/>
                                        Ecuador initially tested positive for COVID-19 in May 2020 before receiving a negative result by June 3rd. <br/>
                                        One month later, the patient once again presented symptoms suggestive of COVID-19, this time more severely, <br/>
                                        and tested positive for COVID-19. Phylogenetic analysis <br/>
                                        suggests the two infection variants resulted from distinct evolutionary trajectories. <br/>
                                        Authors note surprise that the patient showed a more severe disease in the second infection and state that these <br/>
                                        findings add to the COVID-19 reinfection evidence.
                                  
                                    </div>    


                                    <div id = 'profile_contents'>  
                                        <font size = '5'>6. 프로그램 개발 경험</font><br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                    </div>    

                                 
                                </div>

                            </div>


                        </div>
                    }

                    {
                        now == 2 && <div className="members">
              
                            <div id = 'members_container'>

                                <div id = 'left'>

                                    <div id = 'profile'>
                                        <img id='mickey' src={mickey_img} alt='미키'/>
                                        LEE JIHYEON
                                    </div>      

                                    <div id = 'profile_detail'>  
                                        <MailOutlined /> e-mail :  <br/>
                                        <GithubOutlined /> GitHub : 깃터브주소 입력 <br/>
                                        <LinkOutlined /> Blog : 블로그주소 입력 <br/>
                                        <CheckOutlined /> programing language : Python <br/>
                                    </div>                   
                                </div>


                                <div id = 'right'>
                                    <div id = 'profile_contents'>  
                                        <p><font size = '5'>Best 프로젝트 내 역할</font><br/></p>
                                        Python기반 워드클라우드 제작 <br/>
                                        워드클라우드 제작과정
                                        konlpy 설치 <br/>
                                        내용을입력하세요.The immune system’s memory <br/>
                                        of the new coronavirus lingers for at least six months in most people. <br/>
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <p><font size = '5'>프로그램 제작 과정</font><br/></p>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <font size = '5'>6. 프로그램 개발 경험</font><br/>
                                        A Correspondence published in The Lancet Infectious Diseases presents <br/>
                                        the first confirmed case of SARS-CoV-2 reinfection in South America. A 46-year-old male in <br/>
                                        Ecuador initially tested positive for COVID-19 in May 2020 before receiving a negative result by June 3rd. <br/>
                                        One month later, the patient once again presented symptoms suggestive of COVID-19, this time more severely, <br/>
                                        and tested positive for COVID-19. Phylogenetic analysis <br/>
                                        suggests the two infection variants resulted from distinct evolutionary trajectories. <br/>
                                        Authors note surprise that the patient showed a more severe disease in the second infection and state that these <br/>
                                        findings add to the COVID-19 reinfection evidence.
                                  
                                    </div>    


                                    <div id = 'profile_contents'>  
                                        <font size = '5'>6. 프로그램 개발 경험</font><br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                    </div>    

                                 
                                </div>

                            </div>


                        </div>
                    }

                    {
                        now == 3 && <div className="members">

                        <div id = 'members_container'>

                                <div id = 'left'>

                                    <div id = 'profile'>
                                        <img id='mickey' src={mickey_img} alt='미키'/>
                                        HAN SURAN
                                    </div>      

                                    <div id = 'profile_detail'>  
                                        <MailOutlined /> e-mail : soi2524@hanmail.net <br/>
                                        <GithubOutlined /> GitHub : 깃터브주소 입력 <br/>
                                        <LinkOutlined /> Blog : 블로그주소 입력 <br/>
                                        <CheckOutlined /> programing language : Python 상중하하하<br/>
                                    </div>                   
                                </div>


                                <div id = 'right'>
                                    <div id = 'profile_contents'>  
                                        <p><font size = '5'>Best 프로젝트 내 역할</font><br/></p>
                                        Python기반 워드클라우드 제작 <br/>
                                        워드클라우드 제작과정
                                        konlpy 설치 <br/>
                                        내용을입력하세요.The immune system’s memory <br/>
                                        of the new coronavirus lingers for at least six months in most people. <br/>
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <p><font size = '5'>프로그램 제작 과정</font><br/></p>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                    </div>    

                                    <div id = 'profile_contents'>  
                                        <font size = '5'>6. 프로그램 개발 경험</font><br/>
                                        A Correspondence published in The Lancet Infectious Diseases presents <br/>
                                        the first confirmed case of SARS-CoV-2 reinfection in South America. A 46-year-old male in <br/>
                                        Ecuador initially tested positive for COVID-19 in May 2020 before receiving a negative result by June 3rd. <br/>
                                        One month later, the patient once again presented symptoms suggestive of COVID-19, this time more severely, <br/>
                                        and tested positive for COVID-19. Phylogenetic analysis <br/>
                                        suggests the two infection variants resulted from distinct evolutionary trajectories. <br/>
                                        Authors note surprise that the patient showed a more severe disease in the second infection and state that these <br/>
                                        findings add to the COVID-19 reinfection evidence.
                                  
                                    </div>    


                                    <div id = 'profile_contents'>  
                                        <font size = '5'>6. 프로그램 개발 경험</font><br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                        내용을입력하세요. <br/>
                                    </div>    

                                 
                                </div>

                            </div>

                         

                        </div>
                    }


                </div>
            </div>
        </>
        
    

     


    )


    
}

