import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/authSelectors';
import {
  StyledContainer,
  StyledButton,
  StyledIconContainer,
  StyledIcon,
} from './UserNav.styled';

export default function UserNav() {
  const user = useSelector(selectUserData);

  if (user) {
    return (
      <StyledContainer>
        <StyledButton to="/user">
          <StyledIconContainer>
            <StyledIcon />
          </StyledIconContainer>
          {user ? user.name : 'Account'}
        </StyledButton>
      </StyledContainer>
    );
  }
}
