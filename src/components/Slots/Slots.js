import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedSlots } from '../../Redux/reducers/slotSlice';
import style from './Slots.module.css';


export default function Slots({ time, isBooked }) {
    const [isClicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setClicked(true);
        dispatch(setSelectedSlots(time));
    }
    return (
        <div className={`${style.item} ${(isBooked) ? style.invertedTheme:  style.defaultTheme}
        ${isClicked? style.selectedTheme:  style.defaultTheme}`} 
        onClick={handleClick}>{time}</div>
    )
}