import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        inputVal: ''
    },
    reducers: {
        setValue: (state, action) => {
            state.inputVal = action.payload;
        },
        
    }
});

export const {setValue} = searchSlice.actions;
export default searchSlice.reducer;