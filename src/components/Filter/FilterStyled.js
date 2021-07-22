import styled from 'styled-components';

export const Item = styled.div`
min-width: fit-content;
    padding: 10px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 2px;
    color: ${props => props.theme.fontColor} ;
    font-weight: 500;
    cursor: pointer;
    background: ${props => props.theme.backgroundColor};
    `;

export const Container = styled.div`
padding:16px;
display: grid;
    grid-row-gap: 10px;
    background-color: #fff;
    margin-bottom: 14px;
    `;
export const Header = styled.div`
display: grid;
    grid-template-columns: 2fr 1fr;
`;
export const FilterOptionsWrapper = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: space-between;
@media (min-width: 1024px){
    flex-direction: row;
}
`;

export const Name = styled.div`
    display: flex;
    flex-grow:1;
    color: #14213d;
    font-weight:bold;`;
export const ClearFilter = styled.div`
    color: gray;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    `