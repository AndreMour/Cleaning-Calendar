import styled from "styled-components";
import { DivTitleCafe, TextFoot } from '../Pages/styles';
import cafe from '../components/assets/cafe.png';

const CoverImg = styled.img.attrs((props) => ({
    src: props.src,
}))`
    padding: 20px 0 0 20px;
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