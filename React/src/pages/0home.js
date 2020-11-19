import React,{ Component } from 'react';
import Slider from "react-slick";
import 'pages_css/0home.css';


import main_banner02 from 'images/real_main_banner01.gif';
import main_banner01 from 'images/real_main_banner02.jpg';




export default function Home(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    };
    
    return(
        <>
            <div id='content'>
                <div id='content_gray'>
                    
                    {/* <h1> Single Item</h1> */}
                    <Slider {...settings}>
                    <div>
                        <img id='test1' src={main_banner01}/>
                    </div>
                    <div>
                        <img id='test1' src={main_banner02}/>
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
