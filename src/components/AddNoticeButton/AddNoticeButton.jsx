import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors.js';
import { toast } from 'react-toastify';

import {
  StyledAddNoticeBtn,
  StyledImg,
  StyledText,
  Wrapper,
} from './AddNoticeButton.styled.jsx';
import plusIcon from '../../img/plus-icon.png';

const AddNoticeButton = ({ onClickOpen }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;

  const onClickOpenModal = () => {
    return isLoggedIn ? onClickOpen() : toast.info('You have to log in');
  };

  return (
    <Wrapper>
      {!isMobile && <StyledText>Add pet</StyledText>}
      <StyledAddNoticeBtn onClick={onClickOpenModal}>
        <StyledImg src={plusIcon} alt="plus icon" />
        {isMobile && <StyledText>Add pet</StyledText>}
      </StyledAddNoticeBtn>
    </Wrapper>
  );
};

export default AddNoticeButton;
