import React from "react";
import getTimeZoneArray from "../getTimeZoneArray";

function Input(props) {
    return <div>
        <div className="input-container">
            <input 
            type="text" 
            placeholder="Enter the timezone Ex: Asia/Kolkata" 
            className="input" 
            onChange = {(event) => props.onChangeHandeler(event)}
            value = {props.value}
            list = "timezones"
            />
            <datalist id = "timezones">
                {getTimeZoneArray().map(
                    (timezone,index) => <option key = {index}>{timezone}</option>
                )}
            </datalist>
            <br />
        </div>
        <div className = "button-container">
        <button onClick = {() => props.onSearchButtonClickHandeler()}>Search</button>
        <button onClick = {() => props.onRefreshButtonClickHandeler()}>Refresh</button>
        </div>
    </div>
}

export default Input;