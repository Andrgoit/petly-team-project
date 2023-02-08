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
import Loader from 'components/Loader/Loader';

import AddNoticeButton from 'components/AddNoticeButton/AddNoticeButton';
import ModalAddNotice from '../../components/ModalAddNotice/ModalAddNotice';

import { getNotices } from 'redux/notices/notices-operation';
import {
  getAllNotices,
  getLoading,
  getError,
} from 'redux/notices/notices-selectors';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { selectUserData } from 'redux/auth/authSelectors';

import { useParams } from 'react-router-dom';

function NoticesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { categoryName } = useParams();

  const notices = useSelector(getAllNotices);
  const { favorite } = useSelector(selectUserData) || [];
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const [query, setQ] = useState('');
  const dispatch = useDispatch();
  let ref = useRef(false);

  useEffect(() => {
    ref.current = true;
    dispatch(getNotices({ categoryName }));
  }, [dispatch, categoryName, query]);

  const filteredNotices = () => {
    const data = notices.filter(el =>
      el.title.toLowerCase().includes(query.toLowerCase())
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
        {loading && <Loader />}
        {error && <p>Что-то пошло не так</p>}
        {/* {!loading && notices && <NoticesCategoriesList notices={notices} />} */}
        {!loading && notices && (
          <NoticesCategoriesList
            notices={noticesToLayout}
            favorite={favorite}
          />
        )}

        {!loading && ref.current && !Boolean(noticesToLayout.length) && (
          <p>Not found</p>
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
