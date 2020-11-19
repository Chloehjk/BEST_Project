import React from 'react';
import Axios from 'axios';
import Api from '../Api';

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
                <select>
                    {industry.map((v)=>{
                        return <option>{v['industry']}</option>
                    })}
                </select>
                </div>
            </div>

        </>
        
    )
}
