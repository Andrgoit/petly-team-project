import Modal from 'react-modal/lib/components/Modal';
import { useMediaQuery } from 'react-responsive';
import {
  customStyles,
  StyledImg,
  StyledSticker,
  ImageWrapper,
  Title,
  ContentWrapper,
  ContentText,
  CommentsText,
  NoticeModalBtn,
  BtnWrapper,
  FavoriteBtnImg,
  DesktopWrapper,
} from './ModalNotice.styled';
import './modal.css';
import heartIcon from '../../img/heart-icon.png';
import cat from '../../../src/cat.png';
import ModalCloseBtn from 'components/ModalCloseBtn/ModalCloseBtn';

const ModalNotice = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <Modal
      style={{
        ...customStyles,
        content: isTablet
          ? { ...customStyles.content, width: '704px', height: '540px' }
          : { ...customStyles.content },
      }}
      isOpen={true}
    >
      <ModalCloseBtn />
      <DesktopWrapper>
        <ImageWrapper>
          <StyledImg src={cat} />
          <StyledSticker>In good hands</StyledSticker>
        </ImageWrapper>
        <div>
          <Title>Сute dog looking for a home</Title>
          <ContentWrapper>
            <div>
              <ContentText isBold>Name:</ContentText>
              <ContentText isBold>Birthday:</ContentText>
              <ContentText isBold>Breed:</ContentText>
              <ContentText isBold>Location:</ContentText>
              <ContentText isBold>The sex:</ContentText>
              <ContentText isBold>Email:</ContentText>
              <ContentText isBold>Phone:</ContentText>
            </div>
            <div>
              <ContentText>Rich</ContentText>
              <ContentText>21.09.2020</ContentText>
              <ContentText>Pomeranian</ContentText>
              <ContentText>Lviv</ContentText>
              <ContentText>male</ContentText>
              <ContentText>user@mail.com</ContentText>
              <ContentText>+380971234567</ContentText>
            </div>
          </ContentWrapper>
        </div>
      </DesktopWrapper>
      <CommentsText>
        <span style={{ fontWeight: 600 }}> Comments:</span> Lorem ipsum dolor
        sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
        ipsum dolor sit amet, consectetur Lorem
      </CommentsText>
      <BtnWrapper>
        <NoticeModalBtn isBgOrange>Contact</NoticeModalBtn>
        <NoticeModalBtn>
          <span>Add to</span>
          <FavoriteBtnImg
            width="13px"
            height="12px"
            src={heartIcon}
            alt="heart icon"
          />{' '}
        </NoticeModalBtn>
      </BtnWrapper>
    </Modal>
  );
};

export default ModalNotice;
