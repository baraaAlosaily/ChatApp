import React from 'react'
import './InfoBar.css'

import onlineIcon from '../../img/onlineIcon.png'
import closeIcon from '../../img/closeIcon.png'

const InfoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <p>{room}</p>
            </div>
            <div className="rightInnerContainer">
            <a href="/"><img  src={closeIcon} alt="Close" /></a>
            </div>
        </div>
    )
}

export default InfoBar
