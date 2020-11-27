import React from 'react';
import 'pages_css/3kospi50.css';
import Axios from 'axios';
import Api from '../Api';
import Plot from 'react-plotly.js';
import Kospi50_1 from 'pages/3_1kospi50';
import Kospi50_2 from 'pages/3_2kospi50';
import Kospi50_3 from'pages/3_3kospi50';
import { BackTop } from 'antd';




export default function Kospi50()
{    
    const [kospilist,setKospilist] = React.useState([]);
    const [graphdata, setGraphdata] = React.useState({'date':[], 'closeprice':[]});
    const [company,setCompany] = React.useState('')
    const [code,setCode] = React.useState('')
    const [kospiclick, setKospiclick] = React.useState(0)

    React.useEffect(()=>{
        Api.get('KOSPI50/').then((res)=>{     

            const {data} = res;
            // const data = res.data;/
            setKospilist(data)
            // console.log(data)
            
        }).then()
    },[])

   
    const selectCom = (e) =>{
        const name = e.target.getAttribute("name")
        const code = e.target.getAttribute("value")
        setCompany((p) => name)
        setCode((p) => code)
        Api.get('STOCKVALUES?code=' + e.target.getAttribute("value"))
        .then((res)=>{
            const {data} = res;
            // console.log(data);
            const g_date = data.map((v)=>{
                return v.date;
            })
            const g_closeprice = data.map((v)=>{
                return v.closeprice;
            })
            setGraphdata({'date': g_date, 'closeprice': g_closeprice })

        })       
    }

    const belowChart = (e) => {
        setKospiclick(e)
    }


    return(
        <>
            <div>
                <div id='content_gray3'>
                    <div class='box3'>
                        <h4 id='title'>✔ KOSPI50 기업별 특징을 알아보세요</h4>
                        <div id='sub_title'>
                            <p>① 주식기초백과는 공부하셨나요? 그렇다면 이제는 <span>재무제표를 확인해 볼 때!</span></p>       
                            <p>② 2020 급락/급등 point 탐구! 주요 사건 키워드를 <span>워드클라우드를 </span>통해 제공합니다.</p>
                            <p>③ 관심기업의 최근 동향이 궁금하신가요? <span>뉴스데이터 분석을 통한 긍정/부정 비율을 </span>확인해보세요.</p>       
                            <p2 id='comment'>comment by 져니✨</p2>
                        </div>
                    </div>
                </div>
                
                <div id='kospi50_list'>
                    <tr>
                        <td>
                            {kospilist.map((v)=>{
                            return <div id='company' value={v.code} onClick={selectCom} name={v.name}>{v.name}</div>
                            })} 
                        </td>
                    </tr>                    
                </div>

                <div id='content_white3'>

                    <div id='chart'> 
                        <div id='chart_content'>
                            <Plot
                            data={[
                            {
                                x: graphdata.date,
                                y: graphdata.closeprice,
                                type: 'line',
                                mode: 'line',
                                
                            },
                            {type: 'line', x: graphdata.date, y: graphdata.closeprice},
                            ]}
                            layout={ {width: 850, height: 390, title: company +'  2020 주가 그래프'} }
                            />    
                        </div>
                                            
                    </div>

                    <div id='buttons'>
                        <button id ='button' class='button_fs' value='1' onClick={()=>belowChart(1)}>재무제표 🔻</button>
                        <button id ='button' class='button_wc' value='2' onClick={()=>belowChart(2)}>급락 급등 Point의 워드 크라우드🔻</button>
                        <button id ='button' class='button_pn' value='3' onClick={()=>belowChart(3)}>긍정 or 부정 분석 결과 🔻</button>
                    </div> 

                    <div id='best_services'>
                        {
                            kospiclick == 1 && company != ''&& <div className='belowChart'>
                                <div id='financestate_title'>{company}의 재무제표</div>
                                <Kospi50_1 code={code}/>
                            </div>      
                        }
                        {
                            kospiclick == 2 && company != '' && <div className='belowChart'>
                            <Kospi50_2 code={code} graphdata={graphdata} company={company}/>
                            </div>    
                        }
                        {
                            kospiclick == 3 && company != '' && <div className='belowChart'>
                                <Kospi50_3 code={code} company={company}/>
                            </div>    
                        }
                    
                    </div>                
                </div>
                <BackTop>
                    <div id= 'up'>up</div>
                </BackTop>
            </div>
        </>
        
    )
}
