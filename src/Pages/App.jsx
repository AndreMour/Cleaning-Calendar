import {
    Container, NavigationContainer, CalendarContainer, darkTheme, lightTheme
} from './styles';
import Switch from '../components/DarkMode/Switch';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import { ThemeProvider } from 'styled-components';
import TitleCafe from '../components/TitleCoffe';
import DrawGrid from '../components/DrawGrid';
import DaysOfCoffe from '../components/DaysOfCoffe';


function App() {
    const [fridayGroups, setFridayGroups] = useState([]);

    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark");
    }

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <NavigationContainer>
                    <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                    <DrawGrid />
                </NavigationContainer>
                <CalendarContainer>
                    <Calendar fridayGroups={fridayGroups} />
                    <TitleCafe />
                    <DaysOfCoffe />
                </CalendarContainer>
            </Container>
        </ThemeProvider>
    );
}

export default App;