import { Section, Container, Title, Input } from './NewsPage.styled';
import axios from 'axios';
import { useState, useEffect } from 'react';

import NewsList from 'components/News/NewsList';

function NewsPage() {
  const [data, setData] = useState({
    news: [],
    loading: false,
    error: null,
  });

  const [q, setQ] = useState('');

  useEffect(() => {
    const func = () => {
      setData(prev => ({
        ...prev,
        loading: true,
      }));

      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=ua&apiKey=a933128c6f994d8d836111cf94a277de'
        )
        .then(test =>
          setData(prev => ({
            ...prev,
            news: test.data.articles,
            loading: false,
          }))
        )
        .catch(error =>
          setData(prev => ({
            ...prev,
            loading: false,
            error: error.message,
          }))
        );
    };
    func();
  }, []);

  const handleChange = e => {
    setQ(e.target.value);
  };

  const { news, loading, error } = data;

  const filteredNews = () => {
    const data = news.filter(el => el.title.includes(q));
    return data;
  };

  return (
    <Section>
      <Container>
        <Title>News</Title>
        <Input onChange={handleChange} />

        {loading && <p>...Loading</p>}
        {error && <p>Что-то пошло не так</p>}
        {!loading && news && <NewsList data={filteredNews()} />}
      </Container>
    </Section>
  );
}

export default NewsPage;
