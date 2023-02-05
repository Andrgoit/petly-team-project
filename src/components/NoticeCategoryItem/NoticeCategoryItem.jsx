import {
  Item,
  LearnMoreBtn,
  Wrapper,
  Title,
  Text,
  Container,
  CategoryTitle,
  AddToFavoriteBtn,
  Span,
  AddIcon,
  Image,
  DeleteBtn,
  DelIcon,
} from './NoticeCategoryItem.styled';

import numWords from 'num-words';
import noImage from '../../img/noImage.png';



// import { Notify } from 'notiflix/build/notiflix-notify-aio';

function OurFriensItem(notices) {
  const { _id, title, birthdate, breed, location, avatar, price } = notices;
    const {url} = avatar;

    function getAge() {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      const ageWords = numWords(age);

      return ageWords;
    }

// url === null ? url === undefined : noImage;
     
  return (
    <Item key={_id}>
      <Image
        src={url ?? noImage}
        alt="pet"
        minwidth={288}
        height={288}
      />
      <CategoryTitle>selll</CategoryTitle>
      {/* <AddToFavoriteBtn
        onClick={() => {
          isLogined
            ? dispatch(addToFavorite(_id))
            : Notify.warning('Sorry, you should to sing in');
        }}
      >
        <AddIcon />
      </AddToFavoriteBtn> */}

      <AddToFavoriteBtn>
        <AddIcon />
      </AddToFavoriteBtn>
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
            {getAge()} {getAge() === 'one' ? 'year' : 'years'}
          </Text>
          {/* {category === 'sell' && (
            <Text>
              <Span>Price:</Span>
              {price ? `${price} $` : '--------'}
            </Text>
          )} */}
          <Text>
            <Span>Price:</Span>
            {price ? `${price} $` : '--------'}
          </Text>
        </Wrapper>
        <LearnMoreBtn>Learn more</LearnMoreBtn>
        <DeleteBtn>
          Delete
          <DelIcon />
        </DeleteBtn>
      </Container>
    </Item>
  );
}

export default OurFriensItem;
