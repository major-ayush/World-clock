import React from "react";

function XClockCard(props)
{
    function getDate(dateTime) {
        const currDate = dateTime.substring(0, 16);
        return currDate;
    }
    function getTime(dateTime) {
        const currTime = dateTime.substring(16, 25);
        return currTime;
    }

    
    return <div className = "clock-card">
        
        <p className = "timezone">{props.timezone}</p>
        <p className = "date" >{getDate(props.datetime)}</p>
        <p className = "time">{getTime(props.datetime)}</p>
        <p className="utc">UTC : {props.utc_offset}</p>
    </div>
}

export default XClockCard;