import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Header } from '../../Pages/styles';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const DaysOfTheWeek = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8vh;
`;

const DayWeek = styled.div`
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
const DaysOfTheMonth = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100%/7);
  height: 110px;
`
const Day = styled.div`
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
`;

export default function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 2).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  return (
    <Body>
      <Header>
        <IoIosArrowBack onClick={() => setDate(new Date(year, month - 1,))} />
        <div>
          {MONTHS[month]} {year}
        </div>
        <IoIosArrowForward color="white" onClick={() => setDate(new Date(year, month + 1,))} />
      </Header>
      <DaysOfTheWeek>
        {DAYS_OF_THE_WEEK.map((d) => (
          <DayWeek key={d}>
            <strong>{d}</strong>
          </DayWeek>
        ))}
      </DaysOfTheWeek>
      {Array(Math.ceil((days[month] + startDay - 1) / 7) * 7)
        .fill(null)
        .map((_, index) => {
          const d = index - (startDay - 2);
          return (
            <DaysOfTheMonth key={index}>
              <Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 && d <= days[month] ? d : ''}
              </Day>
            </DaysOfTheMonth>
          );
        })}
    </Body>
  );
}