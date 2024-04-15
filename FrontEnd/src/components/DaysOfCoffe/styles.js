import styled from "styled-components";

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
    display: grid;
    align-items: center;
    margin: -83px -47px 0 0;
`
export const DivDay = styled.div`
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