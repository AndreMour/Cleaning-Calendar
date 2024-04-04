import styled from "styled-components";
import { useState, useEffect } from "react";
import {
    DivFoot, DayWeek, NameWeek,
    Names, DivTitleCafe, TextFoot,
    AlignDiv, DivDay
} from "./styles";
import cafe from '../../assets/cafe.png';

const Coffe = styled.img.attrs((props) => ({
    src: props.src,
}))`
    padding: 22px 0 0 20px;
    width: 35px;
    height:35px;
  `

const DaysOfCoffe = () => {
    const [currentDay, setCurrentDay] = useState(new Date().getDay());

    useEffect(() => {
        setCurrentDay(new Date().getDay());
    }, []);

    return (
        <>
            <DivFoot>
                <AlignDiv>
                    <DivTitleCafe>
                        <TextFoot>Dia do Café</TextFoot>
                        <Coffe src={cafe} />
                    </DivTitleCafe>
                    <DivDay style={currentDay === 1 ? { borderTop: '2px solid #B73625' } : {}}>
                        <DayWeek>seg</DayWeek>
                        <NameWeek>
                            <Names>Caio</Names>
                            <Names>Gabriel</Names>
                        </NameWeek>
                    </DivDay>
                </AlignDiv>
                <DivDay style={currentDay === 2 ? { borderTop: '2px solid #B73625' } : {}}>
                    <DayWeek>ter</DayWeek>
                    <NameWeek>
                        <Names>Bruna</Names>
                        <Names>Leo</Names>
                    </NameWeek>
                </DivDay>
                <DivDay style={currentDay === 3 ? { borderTop: '2px solid #B73625' } : {}}>
                    <DayWeek>qua</DayWeek>
                    <NameWeek>
                        <Names>Osmar</Names>
                        <Names>Caio</Names>
                    </NameWeek>
                </DivDay>
                <DivDay style={currentDay === 4 ? { borderTop: '2px solid #B73625' } : {}}>
                    <DayWeek>qui</DayWeek>
                    <NameWeek>
                        <Names>Wasch</Names>
                        <Names>Nic</Names>
                    </NameWeek>
                </DivDay>
                <DivDay style={currentDay === 5 ? { borderTop: '2px solid #B73625' } : {}}>
                    <DayWeek>sex</DayWeek>
                    <NameWeek>
                        <Names>Cláudia</Names>
                        <Names>Pedro K.</Names>
                    </NameWeek>
                </DivDay>
            </DivFoot >
        </>
    )
}

export default DaysOfCoffe