import React from 'react'

const BackButton = (props) =>{
    return(
        <div className="back-btn">
            <label className="back-btn-pointer">&#x25c4;</label>
            <p>{props.children}</p>
        </div>
    )
}

export default BackButton