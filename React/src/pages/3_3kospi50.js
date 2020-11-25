import React from 'react';
import 'pages_css/3kospi50.css';
import 'pages_css/3_3kospi50.css';
import Api from '../Api';

import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Space, notification } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

notification.config(
    {duration: 30}
)


export default function Kospi50_3({code, company})
{

    const [posneglist, setPosneglist] = React.useState({'code':[], 'name':[], 'pos':[],'neg':[],'neu':[],'total':[], 'pos_pn':[],'neg_pn':[],'pos_pnn':[],'neg_pnn':[]})

    const option1 = {
        title : {
            text : '긍정/부정/중립 개수'
        },
        chart: {
            type: 'column'
        },
        xAxis : {
            categories : [company]
        },
        yAxis : {
            title : {text : '개수'}
        },
        tooltip : {
            valueSuffix: '개'
        },
        series : [
            {   name : '긍정',
                data: [posneglist.pos]
            },
            {
                name : '부정',
                data : [posneglist.neg]
            },
            {
                name : '중립',
                data : [posneglist.neu]
            }],
        colors : [
            '#3F7DAE','#B85152','#76B88A'
        ]
    }

    const option2 = {
        title : {
            text : '긍정/부정 비율'
        },
        chart: {
            type: 'column'
        },
        xAxis : {
            categories : [company]
        },
        yAxis : {
            title : {text : '퍼센트(%)'}
        },
        tooltip : {
            valueSuffix: '%'
        },
        series : [
            {   name : '긍정/긍정+부정',
                data: [posneglist.pos_pn]
            },
            {
                name : '부정/긍정+부정',
                data : [posneglist.neg_pn]
            },
            {
                name : '긍정/긍정+부정+중립',
                data : [posneglist.pos_pnn]
            },
            {
                name : '부정/긍정+부정+중립',
                data : [posneglist.neg_pnn]
            }],
        colors : [
            '#3F7DAE','#B85152','#3F7DAE','#B85152'
        ]
    }


    React.useEffect(()=>{
        Api.get('POSORNEG?code=' + code)
        .then((res)=>{
            const {data} = res;

            const name = data.map((v)=>{
                return v.name;
            })
            const pos = data.map((v)=>{
                return v.pos;
            })
            const neg = data.map((v)=>{
                return v.neg;
            })
            const neu = data.map((v)=>{
                return v.neu;
            })
            const total = data.map((v)=>{
                return v.total;
            })
            const pos_pn = data.map((v)=>{
                return v.pos_pn;
            })
            const neg_pn = data.map((v)=>{
                return v.neg_pn;
            })
            const pos_pnn = data.map((v)=>{
                return v.pos_pnn;
            })
            const neg_pnn = data.map((v)=>{
                return v.neg_pnn;
            })
            setPosneglist({'name':name,'pos':pos,'neg':neg, 'neu':neu,'total':total, 'pos_pn':pos_pn,'neg_pn':neg_pn,'pos_pnn':pos_pnn,'neg_pnn':neg_pnn})
        })
    },[code]);

    const openNotificationWithIcon = type => {
        notification[type]({
            message: '분류방법',
            description:
            '현재 시점을 기준으로 3개월 정도의 뉴스 기사를 분석하였습니다. 긍정/부정 dataset을 구축해 그 확률을 구한 수치입니다:)',
        });
    };

    return(
        <>
        <div id='posneg'>
            <div id='com_name'>
                {company}의 최근 기사 긍정, 부정 분석 결과
                <Space><QuestionCircleOutlined onClick={() => openNotificationWithIcon('warning')}/></Space>
            </div>
            <div id='chart_things'>
                
                <div id='chart_description'>
                    <p>Description</p>
                    <div id='des'>
                        BEST에서 제공하는 긍정 or 부정 <br/>
                        분석 결과를 활용해보세요!<br/>
                        최근 3개월의 뉴스데이터를 바탕으로<br/>
                        긍정, 부정 dataset을 구축했습니다.<br/>
                    </div>
                    <span>✅첫 번째 그래프<br/></span>
                    <span>: 기업의 긍정, 부정, 중립의 단어 개수<br/></span>
                    <span>✅두 번째 그래프<br/></span>
                    <span>: 분모를 다르게 한 긍정, 부정 비율</span>
                </div>
                <div id='chart1'>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={option1}/>
                </div>
                <div id='chart2'>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={option2}/>
                </div>
            </div>
            
        </div>
        </>
    )
}