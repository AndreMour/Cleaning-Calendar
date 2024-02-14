import {
    DivFoot, DivSeg, DivTer, DivQua, DivQui, DivSex,
    DayWeek, NameWeek, Names
} from "../Pages/styles"

const DaysOfCoffe = () => {
    return (
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
    )
}

export default DaysOfCoffe