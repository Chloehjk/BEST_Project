import React from 'react';
import 'pages_css/3kospi50.css';
import 'pages_css/3_2kospi50.css';
import pp from 'images/g.png';
import Api from '../Api';


export default function Kospi50_2({code})
{





    React.useEffect(()=>{
        Api.get('')

    },[])

    const [url, setUrl] = React.useState("")

    React.useEffect(()=>{
        setUrl("https://udgraphimages.s3.ap-northeast-2.amazonaws.com/"+ code +".png")
    },[code])

    return(
        <>
            <div id="point_part">           
                <img id="point_chart" src={url}/>

                {/* <div id='kospi50_list'> 여기다 포인트 날짜 리스트 넣기!!
                    <tr>
                        <td>
                            {kospilist.map((v)=>{
                            return <div id='company' value={v.code} onClick={selectCom} name={v.name}>{v.name}</div>
                            })} 
                        </td>
                    </tr>                    
                </div> */}

            </div>

            <div id="wordcloud">

            </div>
            

        </>
    )
}