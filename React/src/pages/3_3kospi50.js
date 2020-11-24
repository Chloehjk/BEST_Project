import React from 'react';
import 'pages_css/3kospi50.css';
import 'pages_css/3_3kospi50.css';
import Api from '../Api';
import { Space, notification } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

notification.config(
    {duration: 30}
)


export default function Kospi50_3({code, company})
{

    const [posneglist, setPosneglist] = React.useState({'code':[], 'name':[], 'pos':[],'neg':[],'neu':[],'total':[], 'pos_pn':[],'pos_pnn':[]})

    React.useEffect(()=>{
        Api.get('POSORNEG?code=' + code)
        .then((res)=>{
            const {data} = res;
            // console.log(data)
        })
    },[code])

    const openNotificationWithIcon = type => {
        notification[type]({
            message: '분류방법',
            description:
            '현재 시점을 기준으로 3개월 정도의 뉴스 기사를 분석하였습니다. 긍정/부정 dataset을 구축하여 그 확률을 구하였습니다:)',
        });
    };

    return(
        <>
        <div id='posneg'>
            <div id='com_name'>
                {company}의 최근 기사 긍정, 부정 분석 결과
                <Space><QuestionCircleOutlined onClick={() => openNotificationWithIcon('warning')}/></Space>
            </div>
            
        </div>
        </>
    )
}