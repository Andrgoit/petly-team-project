import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import {
  PageTitle,
  Container,
  Section,
  ButtonsWrapper,
} from './NoticesPage.styled';
import { MainContainer } from '../../components/App.styled';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import {AddNoticeButton} from 'components/AddNoticeButton/AddNoticeButton'

import { getNotices } from 'redux/notices/notices-operation';
import {
  getAllNotices,
  getLoading,
  getError,
} from 'redux/notices/notices-selectors';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import AddNoticeButton from 'components/AddNoticeButton/AddNoticeButton';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';

function NoticesPage() {
  const [q, setQ] = useState('');
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  let ref = useRef(false);

  useEffect(() => {
    ref.current = true;
    dispatch(getNotices());
  }, [dispatch]);

  const notices = useSelector(getAllNotices);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const filteredNotices = () => {
    const data = notices.filter(el =>
      el.title.toLowerCase().includes(q.toLowerCase())
    );
    return data;
  };
  const noticesToLayout = filteredNotices();
  return (
    <Section>
      <MainContainer>
        <Container>
          <PageTitle>Find your favorite pet</PageTitle>
          <NoticesSearch setQ={setQ} />
          <ButtonsWrapper>
            <NoticesCategoriesNav></NoticesCategoriesNav>
            <AddNoticeButton onClickOpen={() => setIsAddModalOpen(true)} />
          </ButtonsWrapper>
        </Container>

        {error && <p>Что-то пошло не так</p>}
        {/* {!loading && notices && <NoticesCategoriesList notices={notices} />} */}
        {!loading && notices && (
          <NoticesCategoriesList notices={noticesToLayout} />
        )}

        {!loading && ref.current && !Boolean(noticesToLayout.length) && (
          <p>Собак по данному запиту немає</p>
        )}
      </MainContainer>
      <ModalAddNotice
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
      ></ModalAddNotice>
    </Section>
  );
}

export default NoticesPage;
