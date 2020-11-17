import React,{ Component } from 'react';
import Slider from "react-slick";
import 'pages_css/0home.css';

import testimg1 from 'images/test1.jpg';
import testimg2 from 'images/test2.jpg';
import testimg3 from 'images/workplace.png';




export default function Home(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return(
        <>
            <div id='content'>
                <div id='content_gray'>
                    
                    {/* <h1> Single Item</h1> */}
                    <Slider {...settings}>
                    <div>
                        <img id='test1' src={testimg3}/>
                    </div>
                    <div>
                        <img id='test1' src={testimg2}/>
                    </div>
                    <div id='test2'>
                        <img  src={testimg1}/>
                        <h2>사진이랑 글귀 넣어보기~~~</h2>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    </Slider>     
                </div>
            </div>

            <div id='bottom'>
                <h4>BEST Project by TooHR</h4>
            </div>

        </>
        
    )
}
