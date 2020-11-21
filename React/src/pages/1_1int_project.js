import ReactDOM from 'react-dom';
import React from 'react';
import 'pages_css/1_1project.css';
import project_img from 'images/project.PNG';
//import Texty from 'rc-texty';
//import 'rc-texty/assets/index.css';


function IntroProject(){

    return(
        
            <div id='content'>
                <div id='content_top'>
                    <div class='box'>
                        <ul id='theme'>✔ BEST 프로젝트 소개</ul>
                        <ul id='description'>
                            
                        프로젝트 소개를 적어주세요.<br/>
                        (주제 선정 배경, 데이터 활용방법, 구현기능, 기대효과 등)
                        </ul>  

                    </div>
                    
                </div>
                <img id='project1' src={project_img} alt='이런식으로 할거임'/> 
            </div>
            
    )
}

export default IntroProject

