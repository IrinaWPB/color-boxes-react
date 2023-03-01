import React, { useState } from 'react'

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    //Changing state every time user presses a key
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit} data-testid="form">
            <label htmlFor='width'>Enter width:</label>
            <input id="width" placeholder='width' type="number" name="width"
                   value={formData.width} onChange={handleChange} />
            <label htmlFor='height'>Enter height:</label>
            <input id="height" placeholder='height' type="number" name="height"
                   value={formData.height} onChange={handleChange} />
            <label htmlFor='color'>Enter color:</label>
            <input id="color" placeholder='color' type="text" name="color"
                   value={formData.color} onChange={handleChange} />
            <br></br>
            <button>Add a box</button>
        </form>
    )
}

export default NewBoxForm