import styled from "styled-components";
import {
    DivFoot, DivSeg, DivTer, DivQua, DivQui, DivSex,
    DayWeek, NameWeek, Names, DivTitleCafe, TextFoot
} from "./styles";
import cafe from '../../assets/cafe.png';

const CoverImg = styled.img.attrs((props) => ({
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
                <CoverImg src={cafe} />
            </DivTitleCafe>
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
        </>
    )
}

export default DaysOfCoffe