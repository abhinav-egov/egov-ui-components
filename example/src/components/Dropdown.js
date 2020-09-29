import React from 'react'

const Dropdown = (props) =>{
    return(
        <div className="select-wrap">
            <label className="select-label">{props.label} {props.isMandatory ? "*" : null}</label>
            {props.isMandatory? <label className="select-label-error">Enter City</label> : null}
            <select className="select-dropdown">
                {props.option.map((option)=>{
                  return <option className="select-dropdown-option">{option}</option>  
                })}
            </select>
        </div>
    )
}

export default Dropdown