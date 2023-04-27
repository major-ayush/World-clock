/* eslint-disable */
import { useState, useEffect } from "react";

function useFetchApi(timezone) {
    let [info, setInfo] = useState({});
    useEffect(() => {
        function increamentTime(datetime) {
            datetime.setSeconds(datetime.getSeconds() + 1);
            return datetime;
        }
        function fun(timezone) {
            fetch("https://worldtimeapi.org/api/timezone/" + timezone).then(response => response.json()).then(data => {
                const newInfo = {};
                newInfo.utc_offset = data.utc_offset;
                newInfo.timezone = data.timezone;
                const datetime = data.datetime;
                let date = datetime.substring(0, 10);
                let time = datetime.substring(11, 19);
                let dateArr = date.split("-");
                let timeArr = time.split(":");
                let year = dateArr[0];
                let month = dateArr[1];
                let day = dateArr[2];
                let hour = timeArr[0];
                let minute = timeArr[1];
                let second = timeArr[2];
                let currDateTime = new Date(year, month - 1, day, hour, minute, second);
                newInfo.datetime = currDateTime;
                info = newInfo;
                setInfo(newInfo);  
            });
        } 
        fun(timezone); 
        setInterval(() => {    
            if('datetime' in info)
            {
                const newDateTime = increamentTime(info.datetime);
                const updatedInfo = {...info, datetime  : newDateTime};
                setInfo({...updatedInfo});
            }
        }, 1000);
        
     }, [timezone]);
    return info;

}

export default useFetchApi;