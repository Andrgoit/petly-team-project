import {
  Item,
  LearnMoreBtn,
  Wrapper,
  Title,
  Text,
  Container,
  Sticker,
   Span,
    Image,
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem({
  _id,
  title,
  birthdate,
  breed,
  location,
  avatar: {url},
}) {
    return (
    <Item key={_id}>
      <Image src= {ulr} alt="pet" minwidth={288} height={288} />
      <Sticker>selll</Sticker>
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <Text>
            <Span>Breed:</Span>
            {breed}
          </Text>
          <Text>
            <Span>Place:</Span>
            {location}
          </Text>
          <Text>
            <Span>Age:</Span>
            {birthdate}
          </Text>
        </Wrapper>
        <LearnMoreBtn>Learn more</LearnMoreBtn>
      </Container>
    </Item>
  );
}

export default NoticeCategoryItem;
