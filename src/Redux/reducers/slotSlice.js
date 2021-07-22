import { createSlice } from '@reduxjs/toolkit';
import { allSlots, slotGroups } from '../../components/Slots/SlotDB';

export const slotSlice = createSlice({
    name: 'slot',
    initialState: {
        allItems: allSlots,
        selectedSlots: [],
    },
    reducers: {
        setSelectedSlots: (state, action) => {
            if (action.payload.length > 0) {
                state.selectedSlots.push(action.payload)
            } else {
                state.selectedSlots = []
            }
        },
        filterSlots: (state, action) => {
            console.log('slot slic', action.payload)
            if (action.payload.length) {
                const filteredData = slotGroups.find(x => {
                    console.log('x is', x, action.payload)

                    if (x.text.toLowerCase() === action.payload.toLowerCase()) {
                        return x.slots;
                    }
                });
                state.allItems = [...filteredData.slots]
                state.selectedSlots = [];
            } else {
                state.allItems = [...allSlots];
                state.selectedSlots = [];
            }
        },
    }
});

export const { filterSlots, setSelectedSlots } = slotSlice.actions;

export default slotSlice.reducer;