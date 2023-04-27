import React, { useState} from "react";
import ClockCard from "./components/clockCard";
import Heading from "./components/heading";
import Input from "./components/input";
import CustomClockCard from "./components/customClockCard";
import getTimeZoneArray from "./getTimeZoneArray";
import InvalidTimeZone from "./components/invalidTimeZone";
function App() {

  document.onkeydown = (event) => {
    if(event.key === "Enter")
    {
       onSearchButtonClickHandeler();
    }
 }

  const [isCustomSearchClicked, setCustomSearch] = useState(false);
  const [doesInputTimeZoneExists, setDoesInputTimeZoneExists] = useState(false);
  const [inputTimezone, setInputTimezone] = useState("");
  const [passingTimezone, setPassingTimezone] = useState("");

  function onChangeHandeler(event)
  {
    setInputTimezone(event.target.value);
  }

  function onSearchButtonClickHandeler()
  {
    if(inputTimezone === "") return;

    setCustomSearch(true);

    if(getTimeZoneArray().findIndex(timezone => timezone.toLowerCase() === inputTimezone.toLowerCase()) === -1)
    {
      setDoesInputTimeZoneExists(false);
    }
    else
    {
      setDoesInputTimeZoneExists(true);
      setPassingTimezone(inputTimezone);
    }
  }

  function onRefreshButtonClickHandeler()
  {
    setCustomSearch(false);
    setPassingTimezone("");
    setInputTimezone("");
  }


  const timezones = ["America/New_york", "Asia/Kolkata", "Asia/Shanghai", "Asia/Tokyo", "Europe/London", "Australia/Sydney"];


  return (
    <div className="App">
      <Heading/>
      <Input 
        onChangeHandeler = {onChangeHandeler}
        onSearchButtonClickHandeler = {onSearchButtonClickHandeler}
        onRefreshButtonClickHandeler = {onRefreshButtonClickHandeler}
        value = {inputTimezone}
      />

      
      {
        isCustomSearchClicked ? 
        doesInputTimeZoneExists ? <CustomClockCard timezone = {passingTimezone}/> : <InvalidTimeZone/>
        : timezones.map((timezone,key) => <ClockCard timezone = {timezone} key = {key}/>)
      }

      {/* {
        timezones.map((timezone,key) => <ClockCard timezone = {timezone} key = {key}/>)
      } */}

    </div>
  );
}

export default App;

