import React from 'react';
import 'App.css';
//import'antd/dist/antd.css';
//import {Menu} from 'antd';
import img1 from './images/logo1.png';
//import Login from 'account/Login';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Home from 'pages/0home';
import IntroProject from 'pages/1_1int_project';
import IntroTeam from 'pages/1_2int_team';
import BasicStock from 'pages/2_1basic_stock';
import BasicInvest from 'pages/2_2basic_invest';
import Kospi50 from 'pages/3kospi50';
import Services from 'pages/4services';



function App() { 

  return (
    <div id='total_container'>
      <div id='top_container'>
        <NavLink to="/0home">
          <img id='logo' src={img1} width='170px'/>
        </NavLink>
        
        <ul id='main_category'>
          <li id='menu' class = 'twoinone' key="1">
            <a>소개</a>
            <ul>
              <li id='subone' key="1_1"><NavLink to="/1_1int_project">BEST프로젝트 설명</NavLink></li>
              <li id='subtwo'key="1_2"><NavLink to="/1_2int_team">Members</NavLink></li>
            </ul>
            
          </li>

          <li id='menu' class ='twoinone' key="2" >
            <a>주식 기초백과</a>
            <ul>
              <li id='subone' key="2_1"><NavLink to="/2_1basic_stock">주식 기초 정보</NavLink></li>
              <li id='subtwo'key="2_2"><NavLink to="/2_2basic_invest">투자 방법 기초</NavLink></li>
            </ul>
          </li>

          <li id='menu' key="3">
            <NavLink to="/3kospi50">KOSPI 50</NavLink>
          </li>

          <li id='menu' key="4">
            <NavLink to="/4services">펀더멘탈 분석 서비스</NavLink>
          </li>
        </ul>
      
      </div>

      <div id="category_router">
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route exact path="/0home" component = {Home}/>
                <Route exact path="/1_1int_project" component = {IntroProject}/>
                <Route exact path="/1_2int_team" component = {IntroTeam}/>
                <Route exact path="/2_1basic_stock" component = {BasicStock}/>
                <Route exact path="/2_2basic_invest" component = {BasicInvest}/>
                <Route exact path="/3kospi50" component = {Kospi50}/>
                <Route exact path="/4services" component = {Services}/>
            </Switch>
      </div>


      {/* <div id='content'>
        <div id='content_gray'></div>
        <div id='content_white'></div>
      </div> */}
    </div>
  );
}
export default App;



