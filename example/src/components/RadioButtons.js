import React from 'react'

const RadioButtons = (props) => {
    return(
        <div className="card-radio-wrap">
            {props.options.map((option)=>{
                return(
                    <div key={option}>
                        <span className="card-radio-btn-wrap">
                            <input className="card-radio-btn" type="radio" value={option} />
                            <span className="card-radio-btn-checkmark"></span>
                        </span>
                        <label>{option}</label>
                    </div>
                )
                })
            }
        </div>
    )
}

export default RadioButtons