import {
  StyledContainer,
  StyledButton,
  StyledIconContainer,
  StyledIcon,
} from './UserNav.styled';

export default function UserNav() {
  return (
    <StyledContainer>
      <StyledButton to="/user">
        <StyledIconContainer>
          <StyledIcon />
        </StyledIconContainer>
        Account
      </StyledButton>
    </StyledContainer>
  );
}
