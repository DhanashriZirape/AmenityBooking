import React, { useState } from 'react';
import { Container, Header, Name, ClearFilter, FilterOptionsWrapper } from './FilterStyled';
import FilterItem from './FilterItem';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../Redux/reducers/itemSlice'
import { filterSlots } from '../../Redux/reducers/slotSlice';

export default function Filter({ filterName, options }) {
    const [isClear, setIsClear] = useState(false);
    const dispatch = useDispatch();

    const handleOptionSelection = (value) => {
        setIsClear(false);
        if (filterName === 'Slots') {
            dispatch(filterSlots(value.props.text))
        } else {
            dispatch(filterItems(value));
        }
    }

    const filterOptions = options.map(x => <FilterItem value={x}
        handleOptionSelection={handleOptionSelection} isClear={isClear}></FilterItem>);


    const clearSelection = () => {
        setIsClear(true);
        if (filterName === 'Slots') {
            dispatch(filterSlots([]))
        } else {
            dispatch(filterItems([]));
        }
    }

    return (
        <Container>
            <Header>
                <Name>{filterName}</Name>
                <ClearFilter onClick={clearSelection}>Clear</ClearFilter>
            </Header>
            <FilterOptionsWrapper>
                {filterOptions}
            </FilterOptionsWrapper>
        </Container>
    );
}