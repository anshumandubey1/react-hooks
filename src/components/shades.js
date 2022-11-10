import React from 'react'
import Shade from './shade';

function Shades({value}) {

    return (
        <div className='shades'>
            <Shade value={value}/>
            <Shade value={value}/>
            <Shade value={value}/>
            <Shade value={value}/>
        </div>
    )
}

export default Shades