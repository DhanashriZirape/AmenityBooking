import React, { useEffect, useState } from 'react';
import classes from './Filter.module.css';

export default function FilterItem({ value, handleOptionSelection, isClear }) {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsClicked(false);
    }, [isClear]);

    const handleClick = () => {

        handleOptionSelection(value);
        setIsClicked(true);
    };
    return (
        <div onClick={()=>handleClick()}
            className={`${classes.item} ${isClicked ? classes.invertedTheme : classes.defaultTheme}`}>{value}</div>
    );
}