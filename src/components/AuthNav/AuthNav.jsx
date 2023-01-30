import items from './AuthNavItems';
import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledButton,
} from './AuthNav.styled';

export default function AuthNav() {
  const elements = items.map(({ text, href }) => {
    return (
      <StyledItem key={text}>
        <StyledButton to={href}>{text}</StyledButton>
      </StyledItem>
    );
  });
  return (
    <StyledContainer>
      <StyledList>{elements}</StyledList>
    </StyledContainer>
  );
}
