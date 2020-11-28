import React from 'react';
import 'pages_css/3kospi50.css';
import 'pages_css/3_2kospi50.css';
import Api from '../Api';
import ReactWordcloud from 'react-wordcloud';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



export default function Kospi50_2({code, graphdata, company})
{

    const [url, setUrl] = React.useState("")
    const [pointdate,setPointdate] = React.useState([])
    const [wc_data, setWc_data] = React.useState([])


    React.useEffect(()=>{
        // setUrl("https://udgraphimages.s3.ap-northeast-2.amazonaws.com/"+ code +".png")

        Api.get("POINTDATE?code=" + code)
        .then((res)=>{
            const {data} = res;
            setPointdate([data[0]['point1'], data[0]['point2'], data[0]['point3'], data[0]['point4']])
           // graphdata.closeprice = graphdata.closeprice.map((v)=>{
           //     return v.closeprice;
           // })
            for(let i in graphdata.closeprice) {                
                if(graphdata.date[i] == data[0]['point1'].replace(/\./gi,"-") || 
                   graphdata.date[i] == data[0]['point2'].replace(/\./gi,"-") ||
                   graphdata.date[i] == data[0]['point3'].replace(/\./gi,"-") ||
                   graphdata.date[i] == data[0]['point4'].replace(/\./gi,"-")) {
                    graphdata.closeprice[i] = {
                        y: graphdata.closeprice[i],
                        marker: {
                            enabled : true,
                            symbol: 'circle',
                            fillColor: '#1B3523',
                            radius: 6}
                    }
                }
            }
             setOption({...option,
            title : {
                text : '2020 '+company + '의 급락, 급등 포인트'
            },
                xAxis : {
                    categories : graphdata.date,
                    reversed : true,
                    type: 'datetime',
                    labels: {
                        enabled: false
                    }
                },
                series : [{
                name : company,
                marker : {
                    enabled : false
                },
                data : graphdata.closeprice
            }
            ]})
        
        })},[graphdata])
            
    const select_wc = (e) =>{
        
        Api.get("MAKEWORDCLOUD?code=" + code + "&date="+ e.target.getAttribute("value"))
        .then((res)=>{
            const {data} = res;
            //console.log(data[0]);
            setWc_data(data[0].words.split(','))
            var count = {};
            data[0].words.split(',').forEach(function(i) { count[i] = (count[i]||0) + 1;});
            var result = Object.keys(count).map((key) => { return {text:key, value:count[key]}});
            console.log(result);
            setWc_data(result);
        })
    }
    const [option,setOption] = React.useState({
            
            chart: {
                type: 'spline',
                width : 600,
                height : 400
            },    
            yAxis : {
                title : {text : '원'}            
            },
            tooltip : {
                valueSuffix: '원',
                crosshairs: true,
                shared: true
            },
            colors : ['#76B88A']    
        })
        
    const options = {
        rotations: 3,
        rotationAngles: [-65, 0, 65],
       
    };
    

    return(
        <>
            <div id="point_part">           
                <HighchartsReact
                    highcharts={Highcharts}
                    options={option}/>
                {/* <img id="point_chart" src={url}/> */}

                <div id='point_dates'>
                    <tr>
                        <p id= 'pointintro'>궁금한 날짜를 눌러보세요👇🏻</p>
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
               <ReactWordcloud id="wordcloud" options={options} words={wc_data} />
            </div>
            

        </>
    )
}