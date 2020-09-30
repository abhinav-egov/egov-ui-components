import React from 'react'
import searchicon from '../svg/searchicon.svg'

const LocationSearch = (props) =>{
    return(
        <div className="map-wrap">
          <div className="map-search-bar-wrap">
            <img src={searchicon} className="map-search-bar-icon" alt=""/>
            <input id="pac-input" className="map-search-bar" type="text" placeholder="Search Address"/>
          </div>
        </div> 
    )
}

export default LocationSearch