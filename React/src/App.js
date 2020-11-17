import React from 'react';
import 'App.css';
import'antd/dist/antd.css';
import {Menu} from 'antd';
import img1 from './images/logo1.png';
import Login from 'account/Login'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

import Home from 'pages/0home';
import Introduction from 'pages/1introduction';
import BasicStock from 'pages/2basic_stock';
import Kospi50 from 'pages/3kospi50';
import BasicInvest from 'pages/4basic_invest';

function App() {
  return (
    <div id='total_container'>
      <div id='top_container'>
        <NavLink to="pages/0home">
          <img id='logo' src={img1} width='170px'/>
        </NavLink>
        
        <Menu id='main_category' theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/1introduction">소개</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/2basic_stock">주식 기초</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/3kospi50">KOSPI 50</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/4basic_invest">기초 투자방법</NavLink>
          </Menu.Item>
        </Menu>
      </div>

      <div id="category_router">
            <Switch>
                <Route exact path="/0home" component = {Home}/>
                <Route exact path="/1introduction" component = {Introduction}/>
                <Route exact path="/2basic_stock" component = {BasicStock}/>
                <Route exact path="/3kospi50" component = {Kospi50}/>
                <Route exact path="/4basic_invest" component = {BasicInvest}/>
            </Switch>
      </div>


      <div id='content'>
        <div id='content_gray'></div>
        <div id='content_white'></div>

      </div>
    </div>
  );
}
export default App;


