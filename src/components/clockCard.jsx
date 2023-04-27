
import useFetchApi from "./useFetchApi";
import XClockCard from "./xclockCard";

function ClockCard(props) {
    const data = useFetchApi(props.timezone);
    if(!("timezone" in data))
    return null;
    return <XClockCard
        datetime = {data.datetime.toString()}
        utc_offset = {data.utc_offset}
        timezone = {data.timezone}
    />
}

export default ClockCard;
