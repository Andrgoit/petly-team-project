import { useMediaQuery } from 'react-responsive';

import {
  StyledAddNoticeBtn,
  StyledImg,
  StyledText,
  Wrapper,
} from './AddNoticeButton.styled.jsx';
import plusIcon from '../../img/plus-icon.png';

const AddNoticeButton = ({ onClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Wrapper>
      {!isMobile && <StyledText>Add pet</StyledText>}
      <StyledAddNoticeBtn onClick={onClick}>
        <StyledImg src={plusIcon} alt="plus icon" />
        {isMobile && <StyledText>Add pet</StyledText>}
      </StyledAddNoticeBtn>
    </Wrapper>
  );
};

export default AddNoticeButton;
