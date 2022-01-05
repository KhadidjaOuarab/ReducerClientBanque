import React from 'react'

function Form({nameValue,getValue,inputValue}) {
    return (
        <div>
            <label>{nameValue}</label>
            <input onChange={getValue} value={inputValue}></input>
            <button>Save</button>
            
        </div>
    )
}

export default Form
