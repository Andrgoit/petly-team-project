import { StyledHeader } from './Header.styled';

import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import BurgerButton from 'components/BurgerButton/BurgerButton';
import AuthNav from 'components/AuthNav/AuthNav';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      {/* <Nav /> */}

      <AuthNav />
      <BurgerButton />
    </StyledHeader>
  );
}
