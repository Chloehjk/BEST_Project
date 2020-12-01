import React from 'react';
import Api from '../Api';

import happy from 'images/happy.png';
import neutral from 'images/neutral.png';
import sad from 'images/sad.png';

import 'pages_css/4services.css';
import { Modal, Button, message, notification, Space, BackTop } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


notification.config(
    {duration: 30}
)

export default function Services()
{
    const [industry,setIndustry] = React.useState([]);
    const [per,setPer] = React.useState('');
    const [pbr,setPbr] = React.useState('');
    const [reserve_ratio, setReserve_ratio] = React.useState('');
    const [debt_ratio, setDebt_ratio] = React.useState('');
    const [selectPer,setSelectPer] = React.useState('');
    const [state1,setState1] = React.useState({ visible: false });    
    const [state2,setState2] = React.useState({ visible: false });
    


    React.useEffect(()=>{
        Api.get('MEANOFPER/').then((res)=>{
            console.log(res);
            const {data} = res;
            setIndustry(data)
        });
    },[])

    const test = (e) => {
        setSelectPer(e.target.value)
    }

    const test2 = (e) => {
        setPer(e.target.value)
    }
       
    const test3 = (e) => {
        setPbr(e.target.value)
    }

    const test4 = (e) => {
        setReserve_ratio(e.target.value)
    }

    const test5 = (e) => {
        setDebt_ratio(e.target.value)
    }
///////////////////////////////////////////////////////////////////
    const showModal_1 = () => {
        if(! ((/^[0-9\.]+$/g.test(per)) && (/^[0-9\.]+$/g.test(pbr)))) {
            message.info('숫자를 입력해주세요!');
            return
        }
        setState1({
            visible: true,
        });
      };
///////////////////////////////////////////////////////////////////      
    const showModal_2 = () => {
    if(! ((/^[0-9\.]+$/g.test(reserve_ratio)) && (/^[0-9\.]+$/g.test(debt_ratio)))) {
        message.info('숫자를 입력해주세요!');
        return
    }
    setState2({
        visible: true,
        });
    };
/////////////////////////////////////////////////////////////////////
    const handleOk1 = (e) => {
        console.log(e);
        setState1({
            visible: false,
        });
    };

    const handleCancel1 = (e) => {
        console.log(e);
        setState1({
            visible: false,
        });
    };
////////////////////////////////////////////////////////   
    const handleOk2 = (e) => {
        console.log(e);
        setState2({
            visible: false,
        });
    };

    const handleCancel2 = (e) => {
        console.log(e);
        setState2({
            visible: false,
        });
    };
    const openNotificationWithIcon = type => {
        notification[type]({
            message: '주의사항',
            description:
            '철강, 건설, 항공 등의 장비가 필요한 산업의 경우는 저평가가 나와도 설비나 장비가 부채일 가능성이 높기 때문에, 재무 안정도 분석을 꼭 봐주세요!',
        });
    };


    return(
        <>
            <div>
                <div id='content_gray4'>
                    <div class='box4'>
                        <p id='theme4'>✔ BEST에서 제공하는 펀더멘탈 분석</p>
                        <div>
                            BEST의 펀더멘탈 분석은 기업의 재무제표에 명시되어 있는 지표들을 활용하여 기업의 기초 체력을 확인하는 작업입니다.<br/>
                            재무적으로 안정적인지, 미래 성장 가능성이 있는지 등을 볼 수 있습니다.
                            또한 이를 활용해 기업이 가진 가치가 주가에 반영이 잘 되었는지 아닌지를 판단할 수 있습니다.<br/>
                            <p id='theme4_1'>BEST 제공 분석 Tool</p>
                            <p>① 해당 기업의 주식이 저평가됐는지 고평가됐는지 평가하기 위해 <a>PER, PBR</a> 지표를 활용할 것입니다.<br/>
                            ② 재무 안정도를 평가하기 위해서는 <a>유보율과 부채 비율</a>을 확인해서 평가할 것입니다.</p>
                            <ul id='comment'>comment by 끌로이 🤔</ul>
                        </div>
                    </div>
                </div>

                <div id='content_white4'>
                    <div id='select_industry'>
                        <div id='first'>
                            <span>📍업종선택</span>
                            <div>
                                <select onChange={test}>
                                    {industry.map((v)=>{
                                        return <option value={v['per']}>{v['industry']}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div id='second'>
                            <span>📍저/고평가</span>                           
                                <Space><QuestionCircleOutlined onClick={() => openNotificationWithIcon('warning')}/></Space>
                            <div class='estimate1'>
                                PER
                                <input value={per} onChange={test2}/>
                            </div>
                            <div class='estimate1'>
                                PBR
                                <input value={pbr} onChange={test3}/>
                            </div>
                            <Button onClick={showModal_1}>확인!</Button>           
                            <Modal title="고객님의 주식 평가 결과는!"
                                visible={state1.visible}
                                onOk={handleOk1}
                                onCancel={handleCancel1}>
                                {
                                    (()=>{

                                        let realper = 0;
                                        let realpbr = 0;

                                        if (per > selectPer){
                                            realper -= 1
                                        }
                                        else if (per == selectPer){
                                            realper += 0
                                        }
                                        else if (per < selectPer){
                                            realper += 1
                                        };
/////////////////////////////////////////////////////////////////////////////////////////////
                                        if (pbr < 1){
                                            realpbr +=1
                                        }
                                        else if (pbr>2.5){
                                            realpbr -=1
                                        }
                                        else {
                                            realpbr += 0
                                        };
/////////////////////////////////////////////////////////////////////////////////////////////
                                        if ((realpbr + realpbr)==2){
                                            return <>
                                            <div class='face'>
                                                <p>아주 좋아요:)</p>
                                                <img id='happy' src={happy} width='50px'/>
                                            </div>
                                            </>
                                        }
                                        else if ((realpbr + realpbr)>=-1 && (realpbr + realpbr)<=1){
                                            return <>
                                            <div class='face'>
                                                <p>보통이에요:/</p>
                                                <img id='neutral' src={neutral} width='50px'/>
                                            </div>
                                            </>
                                        }
                                        else if ((realpbr + realpbr)==-2){
                                            return <>
                                            <div class='face'>
                                                <p>아주 안좋아요:(</p>
                                                <img id='sad' src={sad} width='50px'/>
                                            </div>
                                            </>
                                        };
                                    })()
                                    
                                }
                            </Modal>
                        </div>
                    </div>                    
                    <div id='finance_state'>
                        <span>📍재무 안정도</span>
                        <div class='estimate2'>
                            유보율
                            <input onChange={test4}/>
                        </div>
                        <div class='estimate2'>
                            부채비율
                            <input onChange={test5}/>
                        </div>
                        <Button onClick={showModal_2}>확인!</Button>
                        <Modal title='고객님이 선택한 기업의 재무안정도 결과는!'
                        visible={state2.visible}
                                onOk={handleOk2}
                                onCancel={handleCancel2}>
                                {
                                    (()=>{

                                        let real_reserve = 0;
                                        let real_debt = 0;

                                        if (reserve_ratio < 100){
                                            real_reserve -= 1
                                        }
                                        else if (reserve_ratio >= 500){
                                            real_reserve += 1
                                        }
                                        else{
                                            real_reserve += 0
                                        };
/////////////////////////////////////////////////////////////////////////////////////////////
                                        if (debt_ratio <= 100){
                                            real_debt += 1
                                        }
                                        else if (debt_ratio > 200){
                                            real_debt -= 1
                                        }
                                        else {
                                            real_debt += 0
                                        };
/////////////////////////////////////////////////////////////////////////////////////////////
                                        if ((real_reserve + real_debt)==2){
                                            return <>
                                            <div class='face'>
                                                <p>아주 좋아요:)</p>
                                                <img id='happy' src={happy} width='50px'/>
                                            </div>
                                            </>
                                        }
                                        else if ((real_reserve + real_debt)>=-1 && (real_reserve + real_debt)<=1){
                                            return <>
                                            <div class='face'>
                                                <p>보통이에요:/</p>
                                                <img id='neutral' src={neutral} width='50px'/>
                                            </div>
                                            </>
                                        }
                                        else if ((real_reserve + real_debt)==-2){
                                            return <>
                                            <div class='face'>
                                                <p>아주 안좋아요:(</p>
                                                <img id='sad' src={sad} width='50px'/>
                                            </div>
                                            </>
                                        };
                                    })()
                                    
                                }
                        </Modal>
                    </div>                    
                </div>
                <div id='naverfinance'>
                    <div id='aboutiframe'>
                        👇🏻확인하고 싶은 기업을 아래에서 검색해보세요!<br/>
                        <span>(검색 후에, 스크롤을 내리시면 재무제표 안의 지표들을 활용해 best에서 펀더멘탈 분석을 할 수 있답니다😁)</span>
                    </div>

                    
                    <div><iframe src='https://finance.naver.com/'></iframe></div>
                </div>
                <BackTop>
                    <div id= 'up'>up</div>
                </BackTop>
            </div>
        </>
        
    )
}
