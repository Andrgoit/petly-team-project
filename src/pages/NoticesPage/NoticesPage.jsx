import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { PageTitle, Container, Section } from './NoticesPage.styled';
import { MainContainer } from '../../components/App.styled';

import {
  getAllNotices,
  getLoading,
  getError,
} from 'redux/notices/notices-selectors';
import { getNotices } from 'redux/notices/notices-operation';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

function NoticesPage() {
  const dispatch = useDispatch();

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
        <NoticesCategoriesNav></NoticesCategoriesNav>
        <Container>
          {loading && <p>...Loading</p>}
          {error && <p>Что-то пошло не так</p>}
          {!loading && notices && <NoticesCategoriesList notices={notices} />}
        </Container>
      </MainContainer>
    </Section>
  );
}

export default NoticesPage;
