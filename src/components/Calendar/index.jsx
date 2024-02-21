import { useState, useEffect } from 'react';
import {
  Body, DaysOfTheWeek, DayWeek, DaysOfTheMonth, Day, Participants,
  ParticipantsContainer, DayContent
} from '../Calendar/styles';
import { Header } from '../../Pages/styles';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function getAllFridays(year, startMonth = 0, endMonth = 11) {
  const fridays = [];

  for (let month = startMonth; month <= endMonth; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      if (date.getDay() === 5) {
        fridays.push(date);
      }
    }
  }

  return fridays;
}

export default function Calendar({ fridayGroups }) {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const date = new Date();
  const [currentDate, setCurrentDate] = useState(date);
  const [day, setDay] = useState(currentDate.getDate());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(currentDate));

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 2).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  useEffect(() => {
    setDay(currentDate.getDate());
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
    setStartDay(getStartDayOfMonth(currentDate));
  }, [currentDate]);

  const allFridays = getAllFridays(year, 0, 11);

  let groupsIndex = 0;

  return (
    <Body>
      <Header>
        <IoIosArrowBack onClick={() => setCurrentDate(new Date(year, month - 1,))} />
        <div>
          {MONTHS[month]} {year}
        </div>
        <IoIosArrowForward onClick={() => setCurrentDate(new Date(year, month + 1,))} />
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

          if (allFridays.some(friday => friday.getDate() === d && friday.getMonth() === month)) {
            const currentGroups = fridayGroups[groupsIndex];
            groupsIndex++;

            return (
              <DaysOfTheMonth key={index}>
                <Day
                  key={index}
                  today={d === currentDate.getDate() ? d : ''}
                  selected={d === day}
                  onClick={() => setCurrentDate(new Date(year, month, d))}
                >
                  {d > 0 && d <= days[month] ? d : ''}
                  {currentGroups && (
                    <DayContent>
                      <ParticipantsContainer>
                        {currentGroups.map((participant, idx) => (
                          <Participants key={idx}>{participant}</Participants>
                        ))}
                      </ParticipantsContainer>
                    </DayContent>
                  )}
                </Day>
              </DaysOfTheMonth>
            );
          } else {
            return (
              <DaysOfTheMonth key={index}>
                <Day
                  key={index}
                  today={d === currentDate.getDate() ? d : ''}
                  selected={d === day}
                  onClick={() => setCurrentDate(new Date(year, month, d))}
                >
                  {d > 0 && d <= days[month] ? d : ''}
                </Day>
              </DaysOfTheMonth>
            );
          }
        })}
    </Body>
  );
}
