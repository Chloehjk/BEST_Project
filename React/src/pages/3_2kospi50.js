import React from 'react';
import 'pages_css/3kospi50.css';
import 'pages_css/3_2kospi50.css';
import pp from 'images/g.png';
import Api from '../Api';
import ReactWordcloud from 'react-wordcloud'


export default function Kospi50_2({code})
{

    const [url, setUrl] = React.useState("")
    const [pointdate,setPointdate] = React.useState([])
    const [wc_data, setWc_data] = React.useState([])


    React.useEffect(()=>{
        setUrl("https://udgraphimages.s3.ap-northeast-2.amazonaws.com/"+ code +".png")

        Api.get("POINTDATE?code=" + code)
        .then((res)=>{
            const {data} = res;
            setPointdate([data[0]['point1'], data[0]['point2'], data[0]['point3'], data[0]['point4']])
        })

       
    },[code])

    const select_wc = (e) =>{
        
        Api.get("MAKEWORDCLOUD?code=" + code + "&date="+ e.target.getAttribute("value"))
        .then((res)=>{
            const {data} = res;
            //console.log(data[0]);
            setWc_data(data[0].words.split(','))
            
            console.log('jbjbjb')
            console.log(data[0].words.split(','))
           
            var count = {};
            data[0].words.split(',').forEach(function(i) { count[i] = (count[i]||0) + 1;});
            var result = Object.keys(count).map((key) => { return {text:key, value:count[key]}});
            setWc_data(result);
        })

        
        //console.log(count);
        
        // const word_cloud = {
        //     return <ReactWordcloud words={count} />
        // }
       

    }
    
    

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
                                return <div id='point' onClick={select_wc} value={v}>{v}</div>
                            })} 
                        </td>
                    </tr>                    
                </div>
            </div>

            <div id="wc_box">
               <ReactWordcloud id="wordcloud" words={wc_data} />
            </div>
            

        </>
    )
}