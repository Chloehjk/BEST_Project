import React from 'react';
import 'pages_css/3kospi50.css';
import Api from '../Api';
import 'pages_css/3_1kospi50.css';

export default function Kospi50_1({code})
{
    const [financestate, setFinancestate] = React.useState({'annual_year':[], 'date':[], 'sales':[], 'business_profit':[], 'net_profit':[],'bp_percent':[], 'np_percent':[], 'roe':[], 'debt_ratio':[], 'quick_ratio':[],'reserve_ratio':[], 'eps':[], 'per':[], 'bps':[], 'pbr':[], 'per_share':[],'dividend_rate':[], 'propensity_rate':[]})

    React.useEffect(()=>{
        Api.get('FINANCESTATE?code=' + code)
        .then((res)=>{
            const {data} = res;
            const annual_year = data.map((v)=>{
                return v.annual_year;
            })
            const date = data.map((v)=>{
                return v.date;
            })
            const sales = data.map((v)=>{
                return v.sales;
            })
             const business_profit = data.map((v)=>{
                return v.business_profit;
            })
            const net_profit = data.map((v)=>{
                return v.net_profit;
            })
            const bp_percent = data.map((v)=>{
                return v.bp_percent;
            })
            const np_percent = data.map((v)=>{
                return v.np_percent;
            })
            const roe = data.map((v)=>{
                return v.roe;
            })
            const debt_ratio = data.map((v)=>{
                return v.debt_ratio;
            })
            const quick_ratio = data.map((v)=>{
                return v.quick_ratio;
            })
            const reserve_ratio = data.map((v)=>{
                return v.reserve_ratio;
            })
            const eps = data.map((v)=>{
                return v.eps;
            })
            const per = data.map((v)=>{
                return v.per;
            })
            const bps = data.map((v)=>{
                return v.bps;
            })
            const pbr = data.map((v)=>{
                return v.pbr;
            })
            const per_share = data.map((v)=>{
                return v.per_share;
            })
            const dividend_rate = data.map((v)=>{
                return v.dividend_rate;
            })
            const propensity_rate = data.map((v)=>{
                return v.propensity_rate;
            })    
            setFinancestate({'annual_year':annual_year, 'date':date, 'sales':sales, 'business_profit':business_profit, 'net_profit':net_profit, 'bp_percent':bp_percent, 'np_percent':np_percent, 'roe':roe, 'debt_ratio':debt_ratio, 'quick_ratio':quick_ratio,'reserve_ratio':reserve_ratio, 'eps':eps, 'per':per, 'bps':bps, 'pbr':pbr, 'per_share':per_share,'dividend_rate':dividend_rate, 'propensity_rate':propensity_rate})
        })
    },[code])
        
    return(
        <>
        <div>
            <table id ="stocktable" border = "1">
                <tr>
                    <th rowSpan='2'>주요 재무 정보</th>
                    <th colSpan='4'>연간 실적</th> 
                    <th colSpan='6'>분기 실적</th>
                </tr>
                
                <tr>
                    <td>2017.12</td>
                    <td>2018.12</td>
                    <td>2019.12</td>
                    <td>2020.12</td>

                    <td>2019.09</td>
                    <td>2019.12</td>
                    <td>2020.03</td>
                    <td>2019.06</td>
                    <td>2019.09</td>
                    <td>2019.12</td>
                </tr>
                <tr>                    
                    <td>매출액(억원)</td> 
                    {financestate.sales.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>영업이익(억원)</td>
                    {financestate.business_profit.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>당기순이익(억원)</td>
                    {financestate.net_profit.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>영업이익률(%)</td>
                    {financestate.bp_percent.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>순이익률(%)</td>
                    {financestate.np_percent.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>ROE(%)</td>
                    {financestate.roe.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>부채비율(%)</td>
                    {financestate.debt_ratio.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>당좌비율(%)</td>
                    {financestate.quick_ratio.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>유보율(%)</td>
                    {financestate.reserve_ratio.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>EPS(원)</td>
                    {financestate.eps.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>PER(배)</td>
                    {financestate.per.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>BPS(원)</td>
                    {financestate.bps.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>PBR(배)</td>
                    {financestate.pbr.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>주당배당금(원)</td>
                    {financestate.per_share.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>
                    <td>시가배당률(%)</td>
                    {financestate.dividend_rate.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
                <tr>    
                    <td>배당성향(%)</td> 
                    {financestate.propensity_rate.map((v)=>{
                            return <td value={code}>{v}</td>
                            })}
                </tr>
            </table>
        </div>
        </>
    )    
}
