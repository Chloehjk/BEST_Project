{/* <div class="wrap">
<div class="top">
<h1>ScrollMagic Demo</h1>
<p>스크롤매직 라이브러리 데모입니다.<br/><a href="http://scrollmagic.io/examples/" target="_blank">여기</a>에서 더 많은 예시를 확인할 수 있습니다.</p>
</div> */}

// <div class="main">
// <div id="container">
// <div class="spacer"></div>
// <div id="trigger1"></div>

// <div class="iconWrap">
// <div id="animate1" class="animation1">Hello, there!</div>
// </div>
// <div class="spacer"></div>
// <div class="spacer"></div>
// </div>
// </div>
// <div class="footer"><a href="https://nykim.work">nykim.work</a></div>
// </div>O



import React from 'react';
import 'pages_css/1_1project.css';
import { useState } from 'react';
import { Timeline, Radio } from 'antd';



function TimelimeLabelDemo() {
    const [mode, setMode] = useState('left');
  
    const onChange = e => {
      setMode(e.target.value);
    };
  
    return (
      <>
        <Radio.Group
          onChange={onChange}
          value={mode}
          style={{
            marginBottom: 20,
          }}
        >
          <Radio value="left">Left</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="alternate">Alternate</Radio>
        </Radio.Group>
        <Timeline mode={mode}>
          <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
          <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
          <Timeline.Item>Technical testing</Timeline.Item>
          <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
        </Timeline>
      </>
    );
}
export default TimelimeLabelDemo;