import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 1000px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.body};
`
export const NavigationContainer = styled.div`
    height: 100%;
    width: 30%;
    overflow-y: auto;
    background-color: ${(props) => props.theme.body};
`
export const CalendarContainer = styled.div`
    width: 70%;
    height: 100%;
    border-left: 1px solid;
    border-color: #747474;
`;
