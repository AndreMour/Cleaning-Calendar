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
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 1px solid #747474;
  border-right: 1px solid #747474;
  padding: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.text};

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #B73625;
      margin: -1px;
    `}

    ${(props) =>
    props.isSelected &&
    css`
     background-color: #171717;
    `}
`
export const DayContent = styled.div`
  position: absolute;
  bottom: -10px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;    
`
export const ParticipantsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: blue;
  overflow: hidden;
  margin-right: 60px;
  margin-bottom: 25px;
`

export const Participants = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-top: 5px;
  margin-right: 50px;
  margin-bottom: 20px;
`