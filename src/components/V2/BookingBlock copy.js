import React from 'react';
import RoomItem from '../RoomItem';
import Slider from './Slider';
import { allSlots, slotGroups } from '../Slots/SlotDB';
import SlotPicker from './Slots/SlotPicker';
import Slots from '../Slots/Slots';
import { Button, MeetingRoomName, Room, SlotContainer, DurationContainer } from '../Styled-componets';
import { Tabs, Tab } from '@material-ui/core';
import TabPanel from '../DateTab/TabPanel';
export default function BookingBlock({ name, slots }) {
    const [value, setValue] = React.useState(0);


    const today = new Date().toISOString().slice(0, 10);
    const selectedDay = slots.find(x => {
        if (x.date == today)
            return x;
    }
    );
    console.log('selectedDay', selectedDay)
    const bookedTime = selectedDay.time;

    const allSlots = allSlots.map(x => {
        const isBooked = bookedTime.some(bookedItem => bookedItem === x)
        return < Slots slot={x} isBooked={isBooked} ></Slots>
    })
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Room>
            <div>
                <MeetingRoomName >{name}</MeetingRoomName>
            </div>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="slot tabs"
            >
                {slotGroups.map(x => <Tab icon={x.icon} label={x.text} />)}

            </Tabs>
            {slotGroups.map((x, index) => {
                const curentSlots = x.slots.map(item => {
                    const isBooked = bookedTime.some(bookedItem => bookedItem === x)
                    return < Slots slot={item} isBooked={isBooked} ></Slots>
                }

                )

                return (
                    <TabPanel value={value} index={index}>
                        <SlotContainer>
                        {curentSlots}
                        </SlotContainer>
                   
                    </TabPanel>
                )
            })}

            

                
            <DurationContainer>
                <RoomItem value='Duration'></RoomItem>
                <Slider name='duration' min={1} max={5}></Slider>
            </DurationContainer>
            <Button type="button">Book</Button>
        </Room>
    )
}