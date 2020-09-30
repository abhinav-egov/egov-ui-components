import React from 'react'
import camera from '../img/camera.png'
import deleteBtn from '../svg/close.svg'

const MiniUpload = (props) =>{
    return(
        <div class="upload-camera-img-mini-wrap">
            <img src={camera} class="upload-camera-img-mini" alt="upload"/>
        </div>
    )
}

const UploadImages = (props) =>{
    
    if(props.thumbnails && props.thumbnails.length>0){
        return(
            <div className="upload-wrap">
                {props.thumbnails.map((thumbnail,index)=>{                    
                    return (
                        <div key={index} className="upload-camera-img-mini-wrap">
                            <img src={deleteBtn} onClick={props.onDelete} className="upload-camera-img-mini-delete" alt="delete"/>
                            <img src={thumbnail} className="upload-img-mini" alt="uploaded thumbnail"/>
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
                <img src={camera} className="upload-camera-img" alt="upload"/> 
            </div>
        )
    }
}

export default UploadImages