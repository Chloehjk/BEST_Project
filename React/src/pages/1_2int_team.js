import React from 'react';
import 'pages_css/1_2team.css';
import gil_img from 'images/girl.png';



export default function IntroTeam()
{
    return(
        <>
            <div id='content'>
                <div id='content_gray2'>
                    <div class='box'>
                        <ul id='theme'>1</ul>
                        <ul id='description'>(프로필 및 역할적기)</ul>  
                        <img id='introduce1' src={gil_img} alt='프로필사진 대체'/>
                        <img id='introduce1' src={gil_img} alt='프로필사진 대체'/>  
                        <img id='introduce1' src={gil_img} alt='프로필사진 대체'/>  
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
