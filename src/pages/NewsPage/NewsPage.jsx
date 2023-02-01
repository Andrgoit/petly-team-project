import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PuffLoader from 'react-spinners/PuffLoader';

import { Section, Container, Title } from './NewsPage.styled';

import NewsList from 'components/News/NewsList';
import NewsSearchForm from 'components/News/NewsSearchForm';

import { getAllNews, getLoading, getError } from 'redux/news/news-selectors';
import { getNews } from 'redux/news/news-operations';

const spinnerStyles = {
  marginTop: '20px',
};

function NewsPage() {
  const [q, setQ] = useState('');
  const dispatch = useDispatch();
  let ref = useRef(false);

  useEffect(() => {
    ref.current = true;
    dispatch(getNews());
  }, [dispatch]);

  const news = useSelector(getAllNews);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const filteredNews = () => {
    const data = news.filter(el =>
      el.title.toLowerCase().includes(q.toLowerCase())
    );
    return data;
  };

  const newsToLayout = filteredNews();

  return (
    <Section>
      <Container>
        <Title>News</Title>
        <NewsSearchForm setQ={setQ} />

        {loading && (
          <PuffLoader
            size={100}
            color={'rgb(245, 146, 86)'}
            cssOverride={spinnerStyles}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {error && <p>Что-то пошло не так</p>}
        {!loading && news && <NewsList data={newsToLayout} />}
        {!loading && ref.current && !Boolean(newsToLayout.length) && (
          <p>Новостей по данному запросу нет</p>
        )}
      </Container>
    </Section>
  );
}

export default NewsPage;
