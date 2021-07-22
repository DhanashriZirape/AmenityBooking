import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TabPanel from './TabPanel';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import classes from './DateTabs.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedDate } from '../../Redux/reducers/dateSlice';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      height: 30,
      width: '100%',
      backgroundColor: '#fca311',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(17),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export default function DateTabs() {
  const [value, setValue] = useState(0);
  const allDates = useSelector(state => state.date.allDates);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(changeSelectedDate(allDates[newValue]));
  };

  return (
    <div className={classes.container}>

      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="slot tabs"
      >
        {allDates.map(x => <StyledTab label={x} />)}

      </StyledTabs>

    </div>

  );
}