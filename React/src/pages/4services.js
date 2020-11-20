import React from 'react';
import Axios from 'axios';
import Api from '../Api';

import 'pages_css/4services.css';


export default function Services()
{


    const [industry,setIndustry] = React.useState([]);
    const [per,setPer] = React.useState([]);


    React.useEffect(()=>{
        Api.get('MEANOFPER/').then((res)=>{
            console.log(res);
            const {data} = res;
            setIndustry(data)
        });
    },[])



    return(
        <>
            <div>
                <div id='content_gray4'>
                    <div class='box'>
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
                    <div>
                        <div id='select_industry'>
                            <span>📍업종선택</span>
                            <div>
                                <select>
                                    {industry.map((v)=>{
                                        return <option>{v['industry']}</option>
                                    })}
                                </select>
                            </div>
                        </div>                    
                        <div id='finance_state'>
                            djWJfn
                        </div>
                    </div>
                </div>
            </div>

        </>
        
    )
}
