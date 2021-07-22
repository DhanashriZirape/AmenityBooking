
import { GiSunrise, GiSun, GiSunset, GiNightSleep } from 'react-icons/gi';

export const slotGroups = [{
    icon: <GiSunrise />,
    text: '5 AM - 6 AM',
    slots: ['5 AM'],
}, {
    icon: <GiSun />,
    text: '6 AM - 12 PM',
    slots: ['6 AM', '7 AM', '8 AM', 
    '9 AM', '10 AM', '11 AM'],
}, {
    icon: <GiSunset />,
    text: '12 PM - 6 PM',
    slots: ['12 PM', 
    '1 PM', '2 PM', '3 PM', '4 PM',
    '5 PM',],
}, {
    icon: <GiNightSleep />,
    text: '6 PM - 8 PM',
    slots: ['6 PM', '7 PM',],
},];
export const allSlots = ['5 AM', '6 AM', '7 AM', '8 AM', 
'9 AM', '10 AM', '11 AM', '12 PM', 
'1 PM', '2 PM', '3 PM', '4 PM',
'5 PM', '6 PM', '7 PM']