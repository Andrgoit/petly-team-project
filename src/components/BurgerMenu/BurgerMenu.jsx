import { StyledImg, StyledImgContainer } from './BurgerMenu.styled';
import burger from '../../img/burger.png';

export default function BurgerMenu() {
  return (
    <StyledImgContainer>
      <StyledImg src={burger} alt="burger menu" />
    </StyledImgContainer>
  );
}
