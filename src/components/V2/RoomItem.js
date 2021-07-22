import React from 'react';
import { RoomDetail } from './Styled-componets';

export default function RoomItem({ value }) {
    return (
        <RoomDetail>{value}</RoomDetail>
    )
}