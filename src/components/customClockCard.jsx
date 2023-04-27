import React from "react";
import useFetch from "./useFetch";
import XCustomClockCard from "./XCustomClockCard";

function CustomClockCard(props) {
    console.log(props.timezone);
    const data = useFetch(props.timezone);
    if(!("timezone" in data))
    return null;
    return <XCustomClockCard
        datetime = {data.datetime.toString()}
        utc_offset = {data.utc_offset}
        timezone = {data.timezone}
    />
}

export default CustomClockCard;
