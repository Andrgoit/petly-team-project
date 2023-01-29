import { StyledImg, StyledImgContainer } from './BurgerButton.styled';
import burger from '../../img/burger.png';

export default function BurgerButton() {
  return (
    <StyledImgContainer>
      <StyledImg src={burger} alt="burger button" />
    </StyledImgContainer>
  );
}
