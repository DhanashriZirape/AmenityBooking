import { configureStore } from '@reduxjs/toolkit';
import  dateSlice  from '../reducers/dateSlice';
import filterReducer from '../reducers/filterSlice';
import itemSlice from '../reducers/itemSlice';
import searchReducer from '../reducers/searchSlice';
import  slotSlice  from '../reducers/slotSlice';

const store = configureStore({
    reducer: {
        filter: filterReducer,
        search: searchReducer,
        items: itemSlice,
        date: dateSlice,
        slot: slotSlice,
    }
});

export default store;