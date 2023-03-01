import React from 'react'
import './Box.css'

const Box = ({ width, height, color }) => {
    console.log('box component', width, height, color)
    return (
        <div className='Box' data-testid={`${color}-${width}-${height}`} style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}} >
        </div>
    )
}

export default Box