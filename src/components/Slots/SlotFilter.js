import React from 'react';
import styled from 'styled-components';

const SlotWrapper = styled.div`display: grid;
grid-template-columns: 1fr 4fr;
`; 
export default function SlotPicker({icon,text}) {
    return (
        <SlotWrapper>
            {icon}
            <span>{text}</span>
        </SlotWrapper>
    );
}