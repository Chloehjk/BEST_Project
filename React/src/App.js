import React from 'react';
import 'main.css';
import'antd/dist/antd.css';
import {Menu} from 'antd';
import img1 from './images/logo1.png';
import Login from 'account/Login'

function App() {
  return (
    <div id='total_container'>
      <div id='top_container'>
        <img id='logo' src={img1} width='170px'/>
        <Menu id='main_category' theme="dark" mode="horizontal">
          <Menu.Item key="1">소개</Menu.Item>
          <Menu.Item key="2">주식 기초</Menu.Item>
          <Menu.Item key="3">KOSPI 50</Menu.Item>
          <Menu.Item key="4">기초 투자방법</Menu.Item>
        </Menu>
      </div>
      <div id='content_gray'>
        풀 화면으로 회색박스임. 내용2
      </div>
      <div id='content_white'>
        흰색 박스 내용2
      </div>
    </div>
  );
}
export default App;


