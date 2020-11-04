import React from "react";
import { ArrowLeft} from "./svgindex"
const BackButton = (props) =>{
    return(
        // <div className="back-btn">
        //     <label className="back-btn-pointer">&#x25c4;</label>
        //     <p>{props.children}</p>
        // </div>
        <div className="back-btn2">
            <ArrowLeft />
            <p>Back</p>
        </div>
    )
}
export default BackButton