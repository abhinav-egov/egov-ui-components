import React from "react";
import {CheckSvg} from './svgindex'

const CheckBox = (props) =>{
    return(
        <div className="checkbox-wrap">
            <input type="checkbox" />
            <p className="custom-checkbox">
              {/* <img src={check} alt="" /> */}
              <CheckSvg />
            </p>
            <p className="label">{props.label}</p>
        </div>
    )
}

export default CheckBox