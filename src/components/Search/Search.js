import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../Redux/reducers/searchSlice';
import { filterItems } from '../../Redux/reducers/itemSlice';
import styles from './Search.module.css';

export default function Search() {

    const searchInput = useSelector(state => state.search.inputVal);
   // const allItemsName = useSelector(state => state.items.allItemsName);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const searchInput = e.target.value;
        dispatch(setValue(searchInput));
        dispatch(filterItems(searchInput));
    }

    return (
        <div className={styles.container}>
            <div className={styles.icon}><FaSearch ></FaSearch></div>
            <input className={styles.searchBar} placeholder="Search for Amenities"
                autoComplete="off" onChange={handleChange} value={searchInput} />
        </div>
    )
}