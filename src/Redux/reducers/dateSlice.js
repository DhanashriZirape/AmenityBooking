import { createSlice } from '@reduxjs/toolkit';
import { AllAmenities } from '../../Data/amenitiesDB';

let sevenDays = [];
for (let i = 0; i < 7; i++) {
    let day = new Date();
    day.setDate(day.getDate() + i);
    sevenDays.push(day.toISOString().slice(0, 10));
}

export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        allDates: [...sevenDays],
        selectedDate: sevenDays[0]
    },
    reducers: {
        changeSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
        }
    }
})

export const {changeSelectedDate} = dateSlice.actions;
export default dateSlice.reducer;