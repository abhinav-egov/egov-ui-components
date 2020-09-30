import React from 'react'

export const LastRow = (props) =>{
    return(
        <div className="data-table-row-last">
              <label>{props.label}</label>
              <p>{props.text}</p>
        </div>
    )
}

export const Row = (props) =>{
    return(
        <div className="data-table-row">
            <label>{props.label}</label>
            <p>{props.text}</p>
        </div>
    )
}

export const StatusTable = (props) =>{
    if(props.dataObject){
        return (
            <div className="data-table"> 
                {Object.keys(props.dataObject).map((name, index)=>{
                    if(++index === Object.keys(props.dataObject).length){
                        return(
                            <LastRow key={name} label={name} text={props.dataObject[name]}/>    
                        )
                    }
                    return(
                        <Row key={name} label={name} text={props.dataObject[name]}/>
                    )
                })}
            </div>
        )
    }

    else{
        return(
            <div className="data-table"> {props.children} </div>
        )
    }
}

