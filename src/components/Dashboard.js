import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import { Container, MainContainer, MeetingRoomWrapper, Room } from './Styled-componets';
import { slotGroups } from './Slots/SlotDB';
import SlotPicker from './Slots/SlotFilter';
import BookingBlock from './BookingBlock';
import { useSelector } from 'react-redux';
import DateTabs from './DateTab/DateTabs';
import { AllAmenities } from '../Data/amenitiesDB';


const Dashboard = (props) => {
  //  const allItemsName = useSelector(state => state.items.allItemsName);
    const allItems = useSelector(state => state.items.allItems);
   // const amenityNames = allItems.map(x=>x.name);
  // const amenitiesKey = allItems.map(x=>Object.keys(x)[0]);
    const dates = ['Today', 'Tomorrow'];
   
    const bookingBlock = allItems.map(x=>{
    console.log('x book',x.name,x.bookedSlots)
    return <BookingBlock name={x.name} slots={x.bookedSlots}></BookingBlock>
    });
    const allItemsName =AllAmenities.map(x=> x.name);
    const slotsDisplay = slotGroups.map(x => <SlotPicker icon={x.icon} text={x.text}></SlotPicker>);
    return (
        <MainContainer>
            <div>
                <Filter filterName={'Amenities'} options={allItemsName}></Filter>
                <Filter filterName={'Slots'} options={slotsDisplay}></Filter>

            </div>

            <Container>

                <Search></Search>
                <DateTabs></DateTabs>
                <MeetingRoomWrapper>
                    { bookingBlock}
                </MeetingRoomWrapper>

            </Container>
        </MainContainer>
    );
}

export default Dashboard;