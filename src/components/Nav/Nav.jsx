import {
  StyledNavContainer,
  StyledNavList,
  StyledNavItem,
  StyledLink,
} from './Nav.styled';
import NavItems from './NavItems';

export default function Nav() {
  const elements = NavItems.map(({ text, href }) => {
    return (
      <StyledNavItem>
        <StyledLink key={text} to={href}>
          {text}
        </StyledLink>
      </StyledNavItem>
    );
  });

  return (
    <StyledNavContainer>
      <StyledNavList>{elements}</StyledNavList>
    </StyledNavContainer>
  );
}
