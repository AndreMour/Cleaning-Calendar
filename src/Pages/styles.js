import styled from "styled-components";

export const darkTheme = {
    body: "#171717",
    text: "#fff",
    button: "#000000",
    bodyWeek: "#1B1B1B"
}

export const lightTheme = {
    body: "#fff",
    text: "#000000",
    colorInput: "#F1F1F1",
    buttonLight: "#D9D9D9"
}

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.body};
`
export const NavigationContainer = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${(props) => props.theme.body};
`
export const DivButton = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 100px;
    background: ${(props) => props.theme.button};
    transition: 0.5s;
    border: none;
    padding-right: 15px;
    margin: 24px 0 0 24px;
`
export const Indicator = styled.div`
    width: 31px;
    height: 31px;
    background: #B73625;
    border-radius: 50%;
    transform: scale(0.9);
    box-shadow: 0px 3px 1px 0px #0000000F;
    box-shadow: 0px 4px 4px 0px #00000040;
    margin-right: 15px;
`
export const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    padding-top: 80px;
`
export const DivInput = styled.div`
    display: grid;
    max-width: 279px;
    padding: 60px;
    padding-top: 40px;
    margin: 0 auto;
`
export const TextLabel = styled.label`
    font-family: 'Monstserrat', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
    color: ${(props) => props.theme.text};
`
export const Input = styled.input`
    width: 279px;
    height: 31px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    background-color: ${(props) => props.theme.colorInput};
`
export const ButtonInput = styled.button`
    display: flex;
    justify-content: center;
    align-items:center;
    margin:20px 0 0 75px;
    border: none;
    color: white;
    width: 120px;
    height: 33px;
    border-radius: 5px;
    padding: 7px 46px 7px 46px;
    background: #B73625;
    font-family:'Roboto', sans-serif;
    font-size: 16px;
    &:hover {
        box-shadow: 4px 4px 0 black;
        opacity: 100%;
        cursor: pointer;
    }
`
export const DivList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 38px;
`
export const TextUl = styled.ul`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.text};
`
export const ButtonList = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 26px;
    border-radius: 5px;
    padding: 7px 46px 7px 46px;
    border: none;
    margin-left: 30px;
    background: #B73625;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 500;
    &:hover {
        box-shadow: 4px 4px 0 black;
        opacity: 100%;
        cursor: pointer;
    }
`
export const ContainerNomeFuncionario = styled.div`
    display: flex;

`
export const NomeFuncionario = styled.p`
    font-family: 'Roboto', sans-serif;
    color: black;
`

export const DeleteIcon = styled.img.attrs({})`
    width: 20px;
    height: 20px;
    color: black;
`

export const CalendarContainer = styled.div`
    width: 70%;
    height: 100%;
    border-left: 1px solid;
    border-color: #747474;
`;

export const Header = styled.button`
    display: flex;
    background-color: #B73625;
    border: none;
    align-items: center;
    height: 60px;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: white;
    padding-left: 40px;
`
export const DivTitleCafe = styled.div`
    display: flex;
    align-items: center;
`
export const TextFoot = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 28px;
    padding-left: 76px;
    padding-top: 30px;
    color: ${(props) => props.theme.text};
`
export const DivFoot = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.body};
`
export const DivSeg = styled.div`
    width: 174px;
    height: 124px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-top: 2px solid;
    border-color: #B73625;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bodyWeek};
`
export const DivTer = styled.div`
    width: 174px;
    height: 124px;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bodyWeek};
`
export const DivQua = styled.div`
    width: 174px;
    height: 124px;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bodyWeek};
`
export const DivQui = styled.div`
    width: 174px;
    height: 124px;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bodyWeek};
`
export const DivSex = styled.div`
    width: 174px;
    height: 124px;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bodyWeek};
`
export const DayWeek = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    padding-top: 8px;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.text};
`
export const NameWeek = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
    color: ${(props) => props.theme.text};
`
export const Names = styled.p`  
`