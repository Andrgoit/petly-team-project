import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Section, Container, Title } from './NewsPage.styled';

import NewsList from 'components/News/NewsList';
import NewsSearchForm from 'components/News/NewsSearchForm';

import { getAllNews, getLoading, getError } from 'redux/news/news-selectors';
import { getNews } from 'redux/news/news-operations';

function NewsPage() {
  const [q, setQ] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
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

  return (
    <Section>
      <Container>
        <Title>News</Title>
        <NewsSearchForm setQ={setQ} />

        {loading && (
          <AiOutlineLoading3Quarters
            style={{
              width: '60',
              height: '60',
              color: ' rgba(245, 146, 86, 1)',
            }}
          />
        )}
        {error && <p>Что-то пошло не так</p>}
        {!loading && news && <NewsList data={filteredNews()} />}
      </Container>
    </Section>
  );
}

export default NewsPage;
