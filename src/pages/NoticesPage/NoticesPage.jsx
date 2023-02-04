import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { Container } from './NoticiesPage.styled';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotices } from 'redux/notices/notices-operation';
import { useParams } from 'react-router-dom';
import {
  selectNotices,
  selectIsLoading,
  selectError,
} from 'redux/notices/notices-selectors';

const NoticesPage = () => {
  const { categoryName } = useParams();

  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotices(categoryName));
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, [dispatch, categoryName]);

  return (
    <Container>
       {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )}
      {notices?.length > 0 && <NoticesCategoriesList />}
      {error && <p>Ooops... Something went wrong</p>}
    </Container>
  );
};

export default NoticesPage;
