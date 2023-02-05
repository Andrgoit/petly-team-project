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
import ModalCloseBtn from 'components/ModalCloseBtn/ModalCloseBtn';
import { useEffect, useState } from 'react';
import { fetchNoticeById } from 'services/API/API';
import { toast } from 'react-toastify';

const ModalNotice = ({ isModalOpen, setIsModalOpen, id }) => {
  const [noticeInfo, setNoticeInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const fetchNotice = async id => {
      try {
        const data = await fetchNoticeById(id);
        setNoticeInfo(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchNotice(id);
  }, [id]);

  return (
    <Modal
      style={{
        ...customStyles,
        content: isTablet
          ? { ...customStyles.content, width: '704px', height: '540px' }
          : { ...customStyles.content },
      }}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      ariaHideApp={false}
    >
      <ModalCloseBtn closeModal={() => setIsModalOpen(false)} />
      {!isLoading && (
        <>
          <DesktopWrapper>
            <ImageWrapper>
              <StyledImg src={noticeInfo.notice.avatar.url} />
              <StyledSticker>{noticeInfo.notice.category}</StyledSticker>
            </ImageWrapper>
            <div>
              <Title>{noticeInfo.notice.title}</Title>
              <ContentWrapper>
                <div>
                  <ContentText isBold>Name:</ContentText>
                  <ContentText isBold>Birthday:</ContentText>
                  <ContentText isBold>Breed:</ContentText>
                  <ContentText isBold>Location:</ContentText>
                  <ContentText isBold>The sex:</ContentText>
                  <ContentText isBold>Email:</ContentText>
                  <ContentText isBold>Phone:</ContentText>
                  {
                    (noticeInfo.notice.category = 'sell' && (
                      <ContentText isBold>Price:</ContentText>
                    ))
                  }
                </div>
                <div>
                  <ContentText>{noticeInfo.notice.name}</ContentText>
                  <ContentText>{noticeInfo.notice.birthdate}</ContentText>
                  <ContentText>{noticeInfo.notice.breed}</ContentText>
                  <ContentText>{noticeInfo.notice.location}</ContentText>
                  <ContentText>{noticeInfo.notice.sex}</ContentText>
                  <ContentText>{noticeInfo.user.email}</ContentText>
                  <ContentText>{noticeInfo.user.phone}</ContentText>
                  {
                    (noticeInfo.notice.category = 'sell' && (
                      <ContentText>{noticeInfo.notice.price}</ContentText>
                    ))
                  }
                </div>
              </ContentWrapper>
            </div>
          </DesktopWrapper>
          <CommentsText>
            <span style={{ fontWeight: 600 }}> Comments:</span>{' '}
            {noticeInfo.notice.comments}
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
        </>
      )}
    </Modal>
  );
};

export default ModalNotice;
