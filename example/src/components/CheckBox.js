import React from 'react'
import check from '../svg/check.svg'

const CheckBox = (props) =>{
    return(
        <div className="checkbox-wrap">
            <input type="checkbox" className="checkbox" />
            <label className="custom-checkbox">
              <img src={check} className="checkbox-check" alt="" />
            </label>
            <label className="checkbox-label">{props.label}</label>
        </div>
    )
}

export default CheckBox