import styled from "styled-components";
import {
    DivFoot, DivSeg, DayWeek, NameWeek,
    Names, DivTitleCafe, TextFoot,
    AlignDiv, DivTer, DivQua, DivQui,
    DivSex
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
            <DivFoot>
                <AlignDiv>
                    <DivTitleCafe>
                        <TextFoot>Dia do Café</TextFoot>
                        <Coffe src={cafe} />
                    </DivTitleCafe>
                    <DivSeg>
                        <DayWeek>seg</DayWeek>
                        <NameWeek>
                            <Names>Caio</Names>
                            <Names>Gabriel</Names>
                        </NameWeek>
                    </DivSeg>
                </AlignDiv>
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
        </>
    )
}

export default DaysOfCoffe