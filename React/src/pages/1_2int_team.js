import React from 'react';
import 'pages_css/1_2team.css';
import face1_img from 'images/face1.png';
import face2_img from 'images/face2.png';
import face3_img from 'images/face3.png';
import { Tabs } from 'antd';
const { TabPane } = Tabs;




export default function IntroTeam()
{
    const [now, setNow] = React.useState(1)

    const test = e =>{
        console.log(e)
        setNow(e)
        // console.dir(e.target.getAttribute("value"))
    }
    
    
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
                      
                            <img id='face' src={face1_img} alt='현진' value="1" onClick={()=>test(1)}/>

                            <img id='face' src={face2_img} alt='지현' value="2" onClick={()=>test(2)}/>
                    
                            <img id='face' src={face3_img} alt='수란' value="3" onClick={()=>test(3)}/>
                            
                               
                    </div>
                </div>


                <div>
                    {
                        now == 1 && <div className="members">
                            현진
                            
                            <div id = 'members_detail'>
                                안녕하세요? 지금 남은시간 단 4일!! <br/>
                                할수있습니다. 밤새면
                            </div>

                        </div>
                    }

                    {
                        now == 2 && <div className="members">
                            지현

                        </div>
                    }

                    {
                        now == 3 && <div className="members">
                            수란

                        </div>
                    }
                </div>
            </div>
        </>
        
    




    )


    
}
