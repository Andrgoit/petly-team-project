import { List } from './NewsList.styled';
import NewsItem from '../NewsItem';

function NewsList({ data }) {
  const elements = data.map(({ publishedAt, description, title, url }) => (
    <NewsItem
      key={publishedAt}
      date={publishedAt}
      description={description}
      title={title}
      url={url}
    />
  ));
  return <List>{elements}</List>;
}

export default NewsList;
