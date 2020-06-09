import React from 'react';




const Input = ({type, name, label, value, defaultValue, error, handleChange}) => {
    
    const style = {
        color: 'red'
    }
    
    return(
        <div className="form-group text-center">
            <span style={style}>{error ? error: ""}</span><br></br>
            <label>
                {label}
            </label><br></br>
            <input type={type} value={value} defaultValue={defaultValue} name={name} onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default Input;