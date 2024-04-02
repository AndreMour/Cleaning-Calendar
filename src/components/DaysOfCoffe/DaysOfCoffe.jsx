import styled from "styled-components";
import {
    DivFoot, DivSeg, DayWeek, NameWeek,
    Names, DivTitleCafe, TextFoot, DivDays
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
    return (
        <>
            <DivTitleCafe>
                <TextFoot>Dia do Café</TextFoot>
                <Coffe src={cafe} />
            </DivTitleCafe>
            <DivFoot>
                <DivSeg>
                    <DayWeek>seg</DayWeek>
                    <NameWeek>
                        <Names>Caio</Names>
                        <Names>Gabriel</Names>
                    </NameWeek>
                </DivSeg>
                <DivDays>
                    <DayWeek>ter</DayWeek>
                    <NameWeek>
                        <Names>Bruna</Names>
                        <Names>Leo</Names>
                    </NameWeek>
                </DivDays>
                <DivDays>
                    <DayWeek>qua</DayWeek>
                    <NameWeek>
                        <Names>Osmar</Names>
                        <Names>Caio</Names>
                    </NameWeek>
                </DivDays>
                <DivDays>
                    <DayWeek>qui</DayWeek>
                    <NameWeek>
                        <Names>Wasch</Names>
                        <Names>Nic</Names>
                    </NameWeek>
                </DivDays>
                <DivDays>
                    <DayWeek>sex</DayWeek>
                    <NameWeek>
                        <Names>Cláudia</Names>
                        <Names>Pedro K.</Names>
                    </NameWeek>
                </DivDays>
            </DivFoot>
        </>
    )
}

export default DaysOfCoffe