import React from 'react';
import 'pages_css/1_2team.css';
import girl_img from 'images/girl.png';



export default function IntroTeam()
{
    return(
        <>
            <div id='content'>
                <div id='content_gray2'>
                    <div class='team_box'>
                        <ul id='theme'>✔ 팀원 프로필 소개</ul>
                        <ul id='description'>(프로필 및 역할적기..)</ul>
                   
                            <img id='girl1' src={girl_img} alt='프로필사진 대체'/>  
                            <img id='girl1' src={girl_img} alt='프로필사진 대체'/>  
                            <img id='girl1' src={girl_img} alt='프로필사진 대체'/>  
                    </div>
                </div>

                <div id='content_white'>
                    <ul class='title'>현진</ul>
                    <li class='idea'></li>
                    

                    <ul class='title'>지현</ul>
                    <li class='idea'></li>
                    

                    <ul class='title'>수란</ul>
                    <li class='idea'></li>
                </div>
            </div>

        </>
        
    )
}
