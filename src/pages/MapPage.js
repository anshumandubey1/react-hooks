import React, { useState } from 'react'
import Map from '../components/map/map'

function MapPage() {
    const [x, setX] = useState(51.505);
    const [y, setY] = useState(-0.09);
    const [z, setZ] = useState(9);
    return (
        <div className='mapPage'>
            <h1>
                This is the map
            </h1>
            <Map x={x} y={y} z={z}/>
        </div>
        
    )
}

export default MapPage