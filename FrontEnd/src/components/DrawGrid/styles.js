import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { darkTheme } from '../Themes/Themes';

export const StyledToastContainer = styled(ToastContainer).attrs({
})`
  .Toastify__toast--error {
    background: ${props => props.theme === darkTheme ? '#333' : '#fff'};
    color: ${props => props.theme === darkTheme ? '#fff' : '#333'};
  }
  .Toastify__toast--success {
    background: ${props => props.theme === darkTheme ? '#333' : '#fff'};
    color: ${props => props.theme === darkTheme ? '#fff' : '#333'};
  }
`;
export const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    padding-top: 50px;
`
export const DivInput = styled.div`
    display: grid;
    justify-content: center;
    max-width: 279px;
    padding: 40px 0 60px 0;
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
    margin: 25px auto;
    border: none;
    color: white;
    width: 120px;
    height: 33px;
    border-radius: 5px;
    background: #B73625;
    font-family:'Roboto', sans-serif;
    font-size: 16px;
    &:hover {
        box-shadow: 4px 4px 0 #772419;
        opacity: 100%;
        cursor: pointer;
    }

    &:active {
        transform: translateY(1px);
        }
`
export const DivList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 41px;
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
    border: none;
    margin-left: 20px;
    background: #B73625;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 500;
    &:hover {
        box-shadow: 4px 4px 0 #772419;
        opacity: 100%;
        cursor: pointer;
    }

    &:active {
        transform: translateY(1px);
        }
`
export const DivNames = styled.div`
    margin-top: 15px;
    color: ${(props) => props.theme.text};
`
export const ListNames = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px 10px 50px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px; 
`
export const DivNamesList = styled.div`
    display: flex;
    align-items: center;
`
