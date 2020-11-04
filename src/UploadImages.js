import React from "react";
import {CameraSvg} from './svgindex'
import {DeleteBtn} from './svgindex'

const MiniUpload = (props) =>{
    return(
        <div className="upload-img-container">
            {/* <img src={camera} className="upload-camera-img" alt="upload"/> */}
            <CameraSvg className="upload-camera-img"/>
        </div>
    )
}

const UploadImages = (props) =>{
    
    if(props.thumbnails && props.thumbnails.length>0){
        return(
            <div className="multi-upload-wrap">
                {props.thumbnails.map((thumbnail,index)=>{                    
                    return (
                        <div key={index}>
                            {/* <img src={deleteBtn} onClick={props.onDelete} className="delete" alt="delete"/> */}
                            <DeleteBtn onClick={props.onDelete} className="delete" />
                            <img src={thumbnail} alt="uploaded thumbnail"/>
                        </div>
                    )
                })}
            {props.thumbnails.length<3 ? <MiniUpload /> : null }
            </div>
        )
    }

    else{
        return(
            <div className="upload-wrap" onClick={props.onUpload}>
                {/* <img src={camera} alt="upload"/>  */}
                <CameraSvg />
            </div>
        )
    }
}

export default UploadImages