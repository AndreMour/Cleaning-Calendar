import {
    Container, NavigationContainer, CalendarContainer
} from './styles';
import { darkTheme, lightTheme } from '../components/Themes/Themes';
import Switch from '../components/DarkMode/Switch';
import { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import { ThemeProvider } from 'styled-components';
import DrawGrid from '../components/DrawGrid/DrawGrid';
import DaysOfCoffe from '../components/DaysOfCoffe/DaysOfCoffe';


function App() {
    const [fridayGroups, setFridayGroups] = useState([]);

    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark");
    }

    useEffect(() => {
        const updateFridayGroupsInCalendar = () => {
            setFridayGroups(fridayGroups);
        };

        updateFridayGroupsInCalendar();

    }, [fridayGroups]);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <NavigationContainer>
                    <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                    <DrawGrid setFridayGroups={setFridayGroups} fridayGroups={fridayGroups} />
                </NavigationContainer>
                <CalendarContainer>
                    <Calendar fridayGroups={fridayGroups} />
                    <DaysOfCoffe />
                </CalendarContainer>
            </Container>
        </ThemeProvider>
    );
}

export default App;