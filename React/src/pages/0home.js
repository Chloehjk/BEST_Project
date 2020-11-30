import React,{ Component } from 'react';
import Slider from "react-slick";
import 'pages_css/0home.css';


import main_banner02 from 'images/real_main_banner01.gif';
import main_banner01 from 'images/real_main_banner02.jpg';
import main_banner03 from 'images/real_main_banner03.jpg';

import m_main from 'images/m_real_banner.png';

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
                        <a href='/2_1basic_stock'>
                            <img id='test1' src={main_banner01}/>
                        </a>
                    </div>
                    <div>
                        <a href='/3kospi50'>
                            <img id='test1' src={main_banner02}/>
                        </a>
                    </div>
                    <div>
                        <a href='/4services'>
                            <img id='test1' src={main_banner03}/>
                        </a>
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
