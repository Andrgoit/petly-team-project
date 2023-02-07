import Modal from 'react-modal/lib/components/Modal';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { fetchNoticeById } from 'services/API/API';

import { useSelector } from 'react-redux';
import { getAllUserData } from 'redux/users/users-selectors';

import { toast } from 'react-toastify';
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
  RightContent,
  StyledTelLink,
} from './ModalNotice.styled';
import ModalCloseBtn from 'components/ModalCloseBtn/ModalCloseBtn';
import heartIcon from '../../img/heart-icon.png';
import { DelIcon } from 'components/NoticeCategoryItem/NoticeCategoryItem.styled';
import './modal.css';

const convertISOToString = dateISO => {
  const string = new Date(dateISO);
  const day = string.getDate();
  const month = string.getMonth() + 1;
  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${string.getFullYear()}`;
};

const ModalNotice = ({ isModalOpen, setIsModalOpen, id }) => {
  const [noticeInfo, setNoticeInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isTablet = useMediaQuery({ minWidth: 768 });
  const { user } = useSelector(getAllUserData);

  function changeCategory(category) {
    if (category === 'ingoodhands') {
      return 'in good hands';
    }
    if (category === 'lostfound') {
      return 'lost/found';
    } else {
      return category;
    }
  }

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        setIsLoading(true);
        const data = await fetchNoticeById(id);
        setNoticeInfo(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotice();
  }, [id]);

  if (!isLoading)
    return (
      <Modal
        shouldCloseOnEsc
        style={{
          ...customStyles,
          content: isTablet
            ? { ...customStyles.content, width: '704px' }
            : { ...customStyles.content },
        }}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
      >
        <ModalCloseBtn closeModal={() => setIsModalOpen(false)} />
        {Object.keys(noticeInfo).length ? (
          <>
            <DesktopWrapper>
              <ImageWrapper>
                <StyledImg src={noticeInfo.notice.avatar.url} />
                <StyledSticker>
                  {changeCategory(noticeInfo.notice.category)}
                </StyledSticker>
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
                    {noticeInfo.notice.category === 'sell' && (
                      <ContentText isBold>Price:</ContentText>
                    )}
                  </div>
                  <RightContent>
                    <ContentText>{noticeInfo.notice.name}</ContentText>
                    <ContentText>
                      {convertISOToString(noticeInfo.notice.birthdate)}
                    </ContentText>
                    <ContentText>{noticeInfo.notice.breed}</ContentText>
                    <ContentText>{noticeInfo.notice.location}</ContentText>
                    <ContentText>{noticeInfo.notice.sex}</ContentText>
                    <ContentText>{noticeInfo.user.email}</ContentText>
                    <ContentText>{noticeInfo.user.phone}</ContentText>
                    {noticeInfo.notice.category === 'sell' && (
                      <ContentText>{noticeInfo.notice.price}$</ContentText>
                    )}
                  </RightContent>
                </ContentWrapper>
              </div>
            </DesktopWrapper>
            <CommentsText>
              <span style={{ fontWeight: 600 }}> Comments:</span>{' '}
              {noticeInfo.notice.comments}
            </CommentsText>
            <BtnWrapper>
              <StyledTelLink href={`tel:${noticeInfo.user.phone}`}>
                <span>Contact</span>
              </StyledTelLink>
              <NoticeModalBtn>
                <span>Add to</span>
                <FavoriteBtnImg
                  width="13px"
                  height="12px"
                  src={heartIcon}
                  alt="heart icon"
                />{' '}
              </NoticeModalBtn>
              {user?.email === noticeInfo.user.email && (
                <NoticeModalBtn>
                  <span>Delete</span>
                  <DelIcon />
                </NoticeModalBtn>
              )}
            </BtnWrapper>
          </>
        ) : (
          <h2>Something went wrong</h2>
        )}
      </Modal>
    );
};

export default ModalNotice;
