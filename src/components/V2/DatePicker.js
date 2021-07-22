import React, { useState } from 'react';
import styled from 'styled-components';

const DateDisplay = styled.input`
padding: 10px;
font-weight: bold;
border: 2px solid lightgray;
`;

export default function DatePicker({ maxBookingPeriod }) { 
    let plusTwoDay = new Date();
    plusTwoDay.setDate(plusTwoDay.getDate() + 2);
    const todayPlusTwo = plusTwoDay.toISOString().slice(0, 10);

    const [selectedDate, setSelectedDate] = useState(todayPlusTwo);

    

    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + maxBookingPeriod);

    const maxBookingDate = maxDate.toISOString().slice(0, 10);

    const handleChange = (e)=>{
        console.log('da',e);
        setSelectedDate(e.target.value);
    }

    return (
        <DateDisplay type="date" id="eventDate" name="event-date"
            value={selectedDate}
            required pattern="\d{4}-\d{2}-\d{2}"
            min={todayPlusTwo} max={maxBookingDate} onChange={(e)=>handleChange(e)}></DateDisplay>
    );
}