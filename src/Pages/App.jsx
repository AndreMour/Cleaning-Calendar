import {
    Container, Navigation, CalendarContainer, DivFoot, DivSeg,
    DivTer, DivQua, DivQui, DivSex, DayWeek, NameWeek, Names,
    darkTheme, lightTheme
} from './styles';
import Switch from '../components/DarkMode/Switch';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import { ThemeProvider } from 'styled-components';
import TitleCafe from '../components/TitleCafe';
import DrawGrid from '../components/DrawGrid';


function App() {
    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark");
    }

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <Navigation>
                    <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                    <DrawGrid />
                </Navigation>
                <CalendarContainer>
                    <Calendar />
                    <TitleCafe />
                    <DivFoot>
                        <DivSeg>
                            <DayWeek>seg</DayWeek>
                            <NameWeek>
                                <Names>Caio</Names>
                                <Names>Gabriel</Names>
                            </NameWeek>
                        </DivSeg>
                        <DivTer>
                            <DayWeek>ter</DayWeek>
                            <NameWeek>
                                <Names>Bruna</Names>
                                <Names>Leo</Names>
                            </NameWeek>
                        </DivTer>
                        <DivQua>
                            <DayWeek>qua</DayWeek>
                            <NameWeek>
                                <Names>Osmar</Names>
                                <Names>Caio</Names>
                            </NameWeek>
                        </DivQua>
                        <DivQui>
                            <DayWeek>qui</DayWeek>
                            <NameWeek>
                                <Names>Wasch</Names>
                                <Names>Nic</Names>
                            </NameWeek>
                        </DivQui>
                        <DivSex>
                            <DayWeek>sex</DayWeek>
                            <NameWeek>
                                <Names>Cláudia</Names>
                                <Names>Pedro K.</Names>
                            </NameWeek>
                        </DivSex>
                    </DivFoot>
                </CalendarContainer>
            </Container>
        </ThemeProvider>
    );
}

export default App;