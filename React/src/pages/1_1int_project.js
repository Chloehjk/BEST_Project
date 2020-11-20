import React from 'react';
import 'pages_css/1_1project.css';
import { useState } from 'react';
import { Timeline, Radio } from 'antd';
import project_img from 'images/project.PNG';



// export default function IntroProject()
function IntroProject()

{
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
                    {/* <TimelimeLabelDemo/> */}
                    
                </div>
                <img id='project1' src={project_img} alt='이런식으로 할거임'/> 
            </div>
            
    )
}






// function TimelimeLabelDemo() {
//     const [mode, setMode] = useState('left');
  
//     const onChange = e => {
//       setMode(e.target.value);
//     };
  
//     return (
//       <>
        
//         <Radio.Group
//           onChange={onChange}
//           value={mode}
//           style={{
//             marginBottom: 20,
//           }}
//         >
//           <Radio value="left">Left</Radio>
//           <Radio value="right">Right</Radio>
//           <Radio value="alternate">Alternate</Radio>
//         </Radio.Group>
//         <Timeline mode={mode}>
//           <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
//           <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
//           <Timeline.Item>Technical testing</Timeline.Item>
//           <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
//         </Timeline>
//       </>
//     );
// }


export default IntroProject

