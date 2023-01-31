import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';

import {
  Section,
  Container,
  Title,
  Input,
  Form,
  Button,
} from './NewsPage.styled';

import NewsList from 'components/News/NewsList';

import { getAllNews, getLoading, getError } from 'redux/news/news-selectors';
import { getNews } from 'redux/news/news-operations';

function NewsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const news = useSelector(getAllNews);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const [q, setQ] = useState('');

  const handleChange = e => {
    setQ(e.target.value);
  };

  const filteredNews = () => {
    const data = news.filter(el => el.title.includes(q));
    return data;
  };

  return (
    <Section>
      <Container>
        <Title>News</Title>
        <Form>
          <Input onChange={handleChange} placeholder="Search"></Input>
          <Button>
            <MdSearch style={{ width: '20', height: '20' }} />
          </Button>
        </Form>

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
