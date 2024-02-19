import styled, { css } from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const DaysOfTheWeek = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8vh;
`
export const DayWeek = styled.div`
  border: 1px solid;
  border-bottom: 1px solid;
  border-left: 0;
  border-color: #747474;
  width: 100%;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 8px;
  color: ${(props) => props.theme.text};
`
export const DaysOfTheMonth = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100%/7);
  height: 110px;
`
export const Day = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 1px solid #747474;
  border-right: 1px solid #747474;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.text};

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #B73625;
    `}

  ${(props) =>
    props.isFriday &&
    css`
     
    `}
`;