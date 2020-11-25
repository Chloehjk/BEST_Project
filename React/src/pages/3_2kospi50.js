import React from 'react';
import 'pages_css/3kospi50.css';
import 'pages_css/3_2kospi50.css';
import pp from 'images/g.png';



export default function Kospi50_2({code})
{

    const [url, setUrl] = React.useState("")

    React.useEffect(()=>{
        setUrl("https://udgraphimages.s3.ap-northeast-2.amazonaws.com/"+ code +".png")
    },[code])

    return(
        <>
        <div>
            
            <img id="point_chart" src={url}/>
            
        </div>
        </>
    )
}