import {
    Title, DivInput, TextLabel, Input,
    ButtonInput, DivList, TextUl, ButtonList,
    ContainerNomeFuncionario, NomeFuncionario
} from "../Pages/styles"
import { IoCloseSharp } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

const DrawGrid = () => {
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
        <>
            <Title>Calendário de Limpeza</Title>
            <DivInput>
                <TextLabel>Insira o nome</TextLabel>
                <Input />
                <ButtonInput onClick={() => console.log('salve')}>Adicionar</ButtonInput>
            </DivInput>
            <DivList>
                <TextUl>Lista de participantes</TextUl>
                <ButtonList>Sortear</ButtonList>
            </DivList>
        </>
    )
}

export default DrawGrid