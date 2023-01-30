import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { StyledHeader, StyledMenuContainer } from './Header.styled';

import Logo from 'components/Logo/Logo';
import BurgerButton from 'components/BurgerButton/BurgerButton';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

export default function Header() {
  const [showBurgerMenu, setShowBurgetMenu] = useState(false);

  // сделано для теста, потом данные будут браться из Redux
  const [isLogined, setIsLogined] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1300 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  // const isMobile = useMediaQuery({ maxWidth: 320 });

  const toggleBurgerMenu = () => {
    setShowBurgetMenu(state => !state);
  };

  return (
    <>
      <StyledHeader>
        <Logo />

        {isTablet && (
          <StyledMenuContainer>
            {isLogined ? <UserNav /> : <AuthNav />}
          </StyledMenuContainer>
        )}

        {!isDesktop && <BurgerButton onClick={toggleBurgerMenu} />}
      </StyledHeader>

      {!isDesktop && showBurgerMenu && (
        <BurgerMenu onClick={toggleBurgerMenu} isLogined={isLogined} />
      )}
    </>
  );
}
