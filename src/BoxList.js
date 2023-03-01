import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import {v4 as uuid} from 'uuid'

const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    //function to run when new data is submited, adds a new box to the list.
    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
      };

    return (
        <div className='BoxList'>
            <h1>Color Box Maker</h1>
            <div className='BoxList-form-div'>
                <h2>Create a box:</h2>
                <NewBoxForm addBox={addBox}/>
            </div>
            <div className='BoxList-boxes-div'>
                {boxes.map(box => <Box width={box.width} height={box.height} color={box.color} key={box.id}/>)}
            </div>
            
        </div>
    )
}

export default BoxList