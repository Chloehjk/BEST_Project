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
                        <ul id='description'>(프로필 및 역할적기..)</ul>

                            <img id='face' src={face1_img} alt='프로필사진 대체' value="1" onClick={()=>test(1)}/> 
       
                            <img id='face' src={face2_img} alt='프로필사진 대체' value="2" onClick={()=>test(2)}/>
                              
                            <img id='face' src={face3_img} alt='프로필사진 대체' value="3" onClick={()=>test(3)}/>
                               
                    </div>
                </div>
                <div>
                    {
                        now == 1 && <div className="test">
                            현진
                        </div>
                    }
                    {
                        now == 2 && <div className="test">
                            지현
                        </div>
                    }
                    {
                        now == 3 && <div className="test">
                            수란
                        </div>
                    }
                </div>
            </div>
        </>
        
    




    )


    
}
