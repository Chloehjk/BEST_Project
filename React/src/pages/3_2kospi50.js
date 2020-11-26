import React from 'react';
import 'pages_css/3kospi50.css';
import 'pages_css/3_2kospi50.css';
import pp from 'images/g.png';
import Api from '../Api';



export default function Kospi50_2({code})
{

    const [url, setUrl] = React.useState("")
    const [pointdate,setPointdate] = React.useState([])
    const [wc, setWc] = React.useState("")


    React.useEffect(()=>{
        setUrl("https://udgraphimages.s3.ap-northeast-2.amazonaws.com/"+ code +".png")

        Api.get("POINTDATE?code=" + code)
        .then((res)=>{
            const {data} = res;
            setPointdate([data[0]['point1'], data[0]['point2'], data[0]['point3'], data[0]['point4']])
        })

       
    },[code])

    return(
        <>
            <div id="point_part">           
                <img id="point_chart" src={url}/>
               
                <div id='point_dates'>
                    <tr>
                        <p id= 'pointintro'>급락/급등 포인트 날짜</p>
                    </tr>
                    <tr>
                        <td>
                            {pointdate.map((v)=>{
                            return <div id='point'>{v}</div>
                            })} 
                        </td>
                    </tr>                    
                </div>

            </div>

            <div id="wordcloud">
              
            </div>
            

        </>
    )
}