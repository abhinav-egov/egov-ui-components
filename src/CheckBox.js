import React from "react";
import {check} from './svgindex'

const CheckBox = (props) =>{
    return(
        <div className="checkbox-wrap">
            <input type="checkbox" />
            <p className="custom-checkbox">
              <img src={check} alt="" />
            </p>
            <p className="label">{props.label}</p>
        </div>
    )
}

export default CheckBox