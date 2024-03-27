import styled from "styled-components";
import { DivTitleCafe, TextFoot } from './styles';
import cafe from '../../assets/cafe.png';

const CoverImg = styled.img.attrs((props) => ({
    src: props.src,
}))`
    padding: 22px 0 0 20px;
    width: 35px;
    height:35px;
  `

const TitleCafe = () => {
    return (
        <DivTitleCafe>
            <TextFoot>Dia do Café</TextFoot>
            <CoverImg src={cafe} />
        </DivTitleCafe>
    )
}

export default TitleCafe