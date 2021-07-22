import React from 'react';
import { SliderDisplay } from '../Styled-componets';



export default function Slider({ name, min, max }) {
    return (
        <SliderDisplay>
            <div>{min} Hr</div>
            {<input type="range" id={name} name={name}
                min={min} max={max}></input>}
            <div>{max} Hr</div>
        </SliderDisplay>
    );
}