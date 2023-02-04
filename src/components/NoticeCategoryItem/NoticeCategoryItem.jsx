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
  avatar,
}) {

    const {public_id, url} = avatar
    
    return (
      <Item key={_id}>
        <Image src={url} alt="pet" minwidth={288} height={288} />
        <Sticker>{public_id}</Sticker>
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
