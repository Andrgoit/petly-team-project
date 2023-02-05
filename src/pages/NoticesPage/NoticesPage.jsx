import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import {
  PageTitle,
  Container,
  Section,
  ButtonsWrapper,
} from './NoticesPage.styled';
import { MainContainer } from '../../components/App.styled';

import {
  getAllNotices,
  getLoading,
  getError,
} from 'redux/notices/notices-selectors';
import { getNotices } from 'redux/notices/notices-operation';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import AddNoticeButton from 'components/AddNoticeButton/AddNoticeButton';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';

function NoticesPage() {
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch]);

  const notices = useSelector(getAllNotices);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <Section>
      <MainContainer>
        <PageTitle>Find your favorite pet</PageTitle>
        <NoticesSearch></NoticesSearch>
        <ButtonsWrapper>
          <NoticesCategoriesNav></NoticesCategoriesNav>
          <AddNoticeButton onClickOpen={() => setIsAddModalOpen(true)} />
        </ButtonsWrapper>
        <Container>
          {loading && <p>...Loading</p>}
          {error && <p>Что-то пошло не так</p>}
          {!loading && notices && <NoticesCategoriesList notices={notices} />}
        </Container>
        <ModalAddNotice
          isModalOpen={isAddModalOpen}
          setIsModalOpen={setIsAddModalOpen}
        ></ModalAddNotice>
      </MainContainer>
    </Section>
  );
}

export default NoticesPage;
