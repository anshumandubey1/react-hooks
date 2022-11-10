import React, { useContext, useEffect, useState } from 'react'
import CountContext from '../contexts/countContext';

function Shade() {
    const [color, setColor] = useState('#000000')
    const value = useContext(CountContext);

    useEffect(() => {
        changeColor();
    }, [value])

    const changeColor = () => {
        let red = 0;
        let green = 0;
        let blue = 0;
        do {
          red = Math.round(Math.random()*255)
          green = Math.round(Math.random()*150)
          blue = Math.round(Math.random()*255)
        } while((red + green + blue)>400)
        setColor(`rgb(${red},${green},${blue})`);
    }
    return (
        <div className='shade' style={{backgroundColor: color}}>{value}</div>  
    )
}

export default Shade