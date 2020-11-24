import React from 'react';
import 'pages_css/1_2team.css';
import face1_img from 'images/face1.png';
import face2_img from 'images/face2.png';
import face3_img from 'images/face3.png';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const test = e =>{
    console.log('aaa')
}


function callback(key) {
    console.log(key);
  }




export default function IntroTeam()
{
    return(
        <>
            <div id='content'>
                <div id='content_gray2'>
                    <div class='team_box'>
                        <ul id='theme'>✔ 팀원 프로필 소개</ul>
                        <ul id='description'>(프로필 및 역할적기..)</ul>

                        
                       
                            <img id='face' src={face1_img} alt='프로필사진 대체' onClick={test}/> 
       
                            <img id='face' src={face2_img} alt='프로필사진 대체'/>
                              
                            <img id='face' src={face3_img} alt='프로필사진 대체'/>
                               
                    </div>
                </div>
                

                <div id = 'Tab'>
                    <Tabs defaultActiveKey="1" onChange={callback} centered>
                        <TabPane tab="Tab 1" key="1">
                            현진's page
                        </TabPane>

                        <TabPane tab="Tab 2" key="2">
                            지현's page
                        </TabPane>
                        
                        <TabPane tab="Tab 3" key="3">
                            수란's page
                        </TabPane>
                    </Tabs>
                </div>
         

            </div>
        </>
        
    




    )


    
}
