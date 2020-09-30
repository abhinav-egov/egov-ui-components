import React from 'react'
import success from '../svg/success.svg'
import error from '../svg/error.svg'

const Successful = (props) => {
    return(
        <div className="banner-completed-wrap">
            <header>{props.props.message}</header>
            <div className="banner-completed-svg-wrap">
              <img src={success} alt="successfull submition"/>
              <div className="complaintnumber-label-wrap">
                <label>Complaint No.</label>
                <p>{props.props.complaintNumber}</p>
              </div>
            </div>
        </div>
    )
}

const Error = (props) =>{
    return(
        <div className="banner-error-wrap">
            <header>{props.props.message}</header>
            <img src={error} alt="error while submition"/>
        </div>
    )
}

const Banner = (props) =>{
    
    return props.successful ? <Successful props={props}/> : <Error props={props}/>

}

export default Banner