import React from "react";


function XCustomClockCard(props)
{
    function getDate(dateTime) {
        const currDate = dateTime.substring(0, 16);
        return currDate;
    }
    function getTime(dateTime) {
        const currTime = dateTime.substring(16, 25);
        return currTime;
    }

    
    return <div className = "custom-clock-card">
        
        <p className = "custom-timezone">{props.timezone}</p>
        <p className = "custom-date" >{getDate(props.datetime)}</p>
        <p className = "custom-time">{getTime(props.datetime)}</p>
        <p className="custom-utc">UTC : {props.utc_offset}</p>
    </div>
}

export default XCustomClockCard;