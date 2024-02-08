import {
    Container, Navigation, Button, Title, DivButton, Indicator, DivInput,
    TextLabel, Input, ButtonInput, TextUl, ButtonList, DivList, TextLi, UlList, DeleteIcon,
    HeaderCalendar, TextHeader, ContainerNomeFuncionario, NomeFuncionario, CalendarContainer,
    TextFoot, DivFoot, DivSeg, DivTer, DivQua, DivQui, DivSex, DayWeek, NameWeek, Names, darkTheme,
    lightTheme
} from './styles';
import Switch from '../components/Switch';
import { IoAccessibility, IoCloseSharp } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import { ThemeProvider } from 'styled-components';


function App() {
    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark");
    }

    useEffect(() => {
        document.title = 'Cleaning Calendar';
    })

    const funcionario = () => {
        return (
            <ContainerNomeFuncionario>
                <RxDotFilled />
                <NomeFuncionario>
                    Baianinho
                </NomeFuncionario>
                <IoCloseSharp />
            </ContainerNomeFuncionario>
        )
    }

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <Navigation>
                    <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                    <Title>Calendário de Limpeza</Title>
                    <DivInput>
                        <TextLabel>Insira o nome</TextLabel>
                        <Input></Input>
                        <ButtonInput>Adicionar</ButtonInput>
                    </DivInput>
                    <DivList>
                        <TextUl>Lista de participantes</TextUl>
                        <ButtonList>Sortear</ButtonList>
                    </DivList>
                    <funcionario />
                    <funcionario />
                    <funcionario />
                    <funcionario />
                    <funcionario />
                    <funcionario />
                </Navigation>
                <CalendarContainer>
                    <HeaderCalendar>
                        <TextHeader>Janeiro</TextHeader>
                        <IoIosArrowForward color="white" />
                    </HeaderCalendar>
                    <Calendar />
                    <TextFoot>Dia do Café</TextFoot>
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