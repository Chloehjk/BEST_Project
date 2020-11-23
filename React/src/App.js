import React from 'react';
import 'App.css';
import'antd/dist/antd.css';
import {Menu} from 'antd';
import img1 from './images/logo1.png';
import Login from 'account/Login'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

import Home from 'pages/0home';
import Introduction from 'pages/1introduction';
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
        
        <Menu id='main_category' theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/1introduction">소개</NavLink>
          </Menu.Item>
          <Menu.Item key="2_1">
            <NavLink to="/2_1basic_stock">기초 정보</NavLink>
          </Menu.Item>
          <Menu.Item key="2_2">
            <NavLink to="/2_2basic_invest">투자 방법</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/3kospi50">KOSPI 50</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/4services">펀더멘탈 분석 서비스</NavLink>
          </Menu.Item>
        </Menu>
      </div>

      <div id="category_router">
            <Switch>
                <Route exact path="/0home" component = {Home}/>
                <Route exact path="/1introduction" component = {Introduction}/>
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


