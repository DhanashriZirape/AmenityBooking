import styled from 'styled-components';
import Styled from 'styled-components';

export const MainContainer = Styled.div`
display: grid;
    grid-template-columns: 1fr 3fr;
    grid-row-gap: 50px;
    grid-column-gap: 10px;
    padding:20px;
}`;

export const Container = Styled.div`
display: grid;
grid-row-gap: 0.5rem;
grid-template-rows: 50px 50px 270px;
`;

export const Room = Styled.div`
box-shadow: 7px 5px 4px 1px grey;
    padding: 8px;
    border: 1px solid gray;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MeetingRoomName = Styled.div`
font-weight: bolder;
font-size: 25px;
margin-bottom: 15px;`;


export const RoomDetail = Styled.div`
margin-right: 1rem;
`;

export const Button = styled.button`
background-color: #d62828;
color: white;
border-radius: 0.4rem;
border: none;
padding: 0.5rem;
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
height: 40px;
    width: 80px;
`;

export const MeetingRoomWrapper = styled.div`
display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
`;

export const  SlotContainer = styled.div`
display: grid;
    grid-template-columns: 70px 70px 70px 70px 70px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    `;

export const SliderDisplay = styled.div`
display: flex;
justify-content: center;`;

export const DurationContainer = styled.div`display: flex;
padding: 10px;`;