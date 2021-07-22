import { createSlice } from '@reduxjs/toolkit';

const defaultTheme = {
    fontColor: "#000000c7",
    borderColor: "lightgray"
};

const invertTheme = {
    borderColor: "#d62828",
    fontColor: "#d62828"
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        isClear: false,
        //theme: defaultTheme,
        filteredVal: []
    },
    reducers: {
        setClear: (state, action) => {
            state.isClear = action.payload.isClear;
            state.filteredVal = [];
        },
        setFilterInput: (state, action) => {
            if (state.isClear) {
                state.isClear = action.payload.isClear;
            }
            if (!state.filteredVal.includes(action.payload.filterInput)) {
                state.filteredVal.push(action.payload.filterInput);
            }
        }
    }
});

export const { setClear, setFilterInput } = filterSlice.actions;
export default filterSlice.reducer;