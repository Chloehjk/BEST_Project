import React from 'react';

export default function Services()
{
    return(
        <>
            <div>
                <div id='content_gray'>
                    <li>업종선택 리스트 박스</li>
                    <li>저평가, 고평가</li>
                    <li>재무안정도</li>
                    <select>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
            </div>

        </>
        
    )
}
