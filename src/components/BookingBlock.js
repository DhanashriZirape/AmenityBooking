import React, { useEffect, useState } from 'react';
import Slots from './Slots/Slots';
import { Button, MeetingRoomName, Room, SlotContainer } from './Styled-componets';
import { useDispatch, useSelector } from 'react-redux';
import { bookSlot } from '../Redux/reducers/itemSlice';
import { setSelectedSlots } from '../Redux/reducers/slotSlice';

export default function BookingBlock({ name, slots }) {
    const [mappedSlots, setMappedSlots]= useState([]);
    const selectedDate = useSelector(state => state.date.selectedDate);
    const selectedSlots = useSelector(state => state.slot.selectedSlots);
    const allSlots = useSelector(state => state.slot.allItems);
    //const allItems = useSelector(state => state.items.allItems);

    const dispatch = useDispatch();


  //  const currentBlock = allItems.find(x=> x.name === name);
   // const bookedSlotForDay = currentBlock.bookedSlots.find(x=>x.date === selectedDate);
 
    const selectedDayObj = slots.find(x => {
        if (x.date == selectedDate)
            return x;
    });
 
    const bookedTime = selectedDayObj?.time;
    useEffect(()=>{
        const allTime = allSlots.map(x => {
            const isBooked = bookedTime ? bookedTime.some(bookedItem => bookedItem === x) : false;
            return < Slots time={x} isBooked={isBooked} ></Slots>
        })
       setMappedSlots([...allTime])
    },[])
   

    const handleClick = () => {
        if(selectedSlots.length>0){
            dispatch(bookSlot({ name, date: selectedDate, time: selectedSlots }));
            dispatch(setSelectedSlots([]));
            alert('booked your slot')
           
        }else{
            alert('Please select atleast one slot')
        }
    }
    return (
        <Room>
            <div>
                <MeetingRoomName >{name}</MeetingRoomName>
            </div>
            <SlotContainer>
                {mappedSlots}
            </SlotContainer>
            <Button type="button" onClick={handleClick}>Book</Button>
        </Room>
    )
}