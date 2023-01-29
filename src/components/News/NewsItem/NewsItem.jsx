import {
  Item,
  Line,
  Title,
  Description,
  Wrapper,
  Date,
  Link,
} from './NewsItem.styled';

function NewsItem({ id, date, description, title, url }) {
  return (
    <Item>
      <Line> </Line>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Wrapper>
        <Date>{date}</Date>
        <Link href={url} target="_blank">
          Read more
        </Link>
      </Wrapper>
    </Item>
  );
}

export default NewsItem;
