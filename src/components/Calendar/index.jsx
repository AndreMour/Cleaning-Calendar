import { useState, useEffect } from 'react';
import { Body, DaysOfTheWeek, DayWeek, DaysOfTheMonth, Day, Participants, GridParticipants } from '../Calendar/styles';
import { Header } from '../../Pages/styles';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Calendar({ fridayGroups }) {
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

  const isFriday = (year, month, day) => {
    const date = new Date(year, month, day);

    for (var i; fridayGroups.lenght; i++) {
      <p>{fridayGroups.i}</p>
    }

    return date.getDay() === 5
  }

  return (
    <Body>
      <Header>
        <IoIosArrowBack onClick={() => setDate(new Date(year, month - 1,))} />
        <div>
          {MONTHS[month]} {year}
        </div>
        <IoIosArrowForward onClick={() => setDate(new Date(year, month + 1,))} />
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
          const isCurrentMonth = d > 0 && d <= days[month];
          const isFridayDay = isCurrentMonth && isFriday(year, month, d);

          let participantsForDay = [];

          if (isFridayDay) {
            const fridayIndex = Math.floor((d - 1) / 7) % fridayGroups.length;
            participantsForDay = fridayGroups[fridayIndex];
          }

          return (
            <DaysOfTheMonth key={index}>
              <Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                isFriday={isFridayDay}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 && d <= days[month] ? d : ''}
                {isFridayDay && participantsForDay.map((participant, idx) => (
                  <GridParticipants>
                    <Participants key={idx}>{participant}</Participants>
                  </GridParticipants>
                ))}
              </Day>
            </DaysOfTheMonth>
          );
        })}
    </Body>
  );
}