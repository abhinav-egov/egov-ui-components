import React from 'react'

const OTPInput = (props) =>{
    if(!props.length){
        console.warn("OTPInput Component requires length prop")
    }
    var OTP = []
    
    for (var i = 1; i <= props.length ; i++){
        OTP.push(<input key={i} type="number" max="1" className="input-otp" />)
    }

    return(
        <div className="input-otp-wrap">
            {OTP}
        </div>
    )
}

export default OTPInput