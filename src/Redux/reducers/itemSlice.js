import { createSlice } from '@reduxjs/toolkit';
import { AllAmenities } from '../../Data/amenitiesDB';

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        allItems: [...AllAmenities],
        //allItemsName: amenitiesKey
    },
    reducers: {
        //Filter item using name 
        filterItems: (state, action) => {
            if (action.payload.length > 0) {
                const filteredData = AllAmenities.filter(x => {
                    if (x.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return x;
                    }
                });
                state.allItems = [...filteredData]
            } else {
                state.allItems = [...AllAmenities];
            }
        },
        bookSlot: (state, action) => {
           // let amenity = state.allItems.find(x=> x.name === action.payload.name);
            for(let j=0;j<state.allItems.length;j++){
                const amenity = state.allItems[j];
                if(amenity.name === action.payload.name){
                    let isDateExist = false;
                    for(let i=0;i<amenity.bookedSlots.length;i++){
                        const item = amenity.bookedSlots[i];
                        if(action.payload.date === item.date){
                            state.allItems[j].bookedSlots[i].time.push(...action.payload.time);
                            isDateExist = true;
                        }
                    }
                    if(!isDateExist){
                        state.allItems[j].bookedSlots.push({
                            date: action.payload.date,
                            time: [...action.payload.time]
                        })
                    }
                }
            }
        }
    }
});

export const { filterItems,bookSlot } = itemSlice.actions;
export default itemSlice.reducer;