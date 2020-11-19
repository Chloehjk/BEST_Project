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
                <div id='content_gray'>
                    <div id='select_industry'>
                        <span>📍업종선택</span>
                            <select>
                                {industry.map((v)=>{
                                    return <option>{v['industry']}</option>
                                })}
                            </select>
                    </div>
                </div>
            </div>

        </>
        
    )
}
