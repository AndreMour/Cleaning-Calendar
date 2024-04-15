import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export const DivTitleCafe = styled.div`
    display: flex;
`
export const TextFoot = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: ${(props) => props.theme.text};
`
export const DivFoot = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.body};
    margin-top: 100px;
`
export const AlignDiv = styled.div`
    margin-top: -83px;
`
export const AlignEdit = styled.div`
    margin-top: 20px;
`
export const EditDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -20px;
`
export const EditIcon = styled(FaRegEdit)`
    font-size: 18px;
    color: #A3A3A3;
    margin-top: -40px;
`
export const CheckIcon = styled(FaCheck)`
    font-size: 18px;
    color: green;
    margin-top: -40px;
`
export const DivDay = styled.div`
    width: 174px;
    height: 124px;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bodyWeek};
    overflow: hidden;
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
export const TextInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    max-width: 50px;
    padding-top: 16px;
    background-color: ${(props) => props.theme.bodyWeek};
    color: ${(props) => props.theme.text};
    border: none;
`
export const NameWeek = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
`
export const Names = styled.p`  
`