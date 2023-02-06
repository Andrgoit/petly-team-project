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
  FavoriteIcon,
} from './NoticeCategoryItem.styled';

import numWords from 'num-words';
import noImage from '../../img/noImage.png';
import {
  addNoticeToFavorite,
  removeNoticeWithFavorite,
} from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotice } from 'redux/notices/notices-operation';
import { selectUserData } from 'redux/auth/authSelectors';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

function OurFriensItem(notices) {
  const dispatch = useDispatch();
  const { _id: userId } = useSelector(selectUserData);

  const {
    _id,
    title,
    birthdate,
    breed,
    location,
    avatar,
    price,
    favorite,
    owner,
  } = notices;
  const { url } = avatar;

  let isFavorite = favorite?.includes(_id) || false;
  let isDisplayed = false;
  // console.log('owner', owner);
  // console.log('userId=', userId);
  if (owner === userId) {
    isDisplayed = true;
  }
  console.log('isDisplayed', isDisplayed);

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
  const onClickFavoriteButton = () => {
    if (!isFavorite) {
      dispatch(addNoticeToFavorite(_id));
    } else {
      dispatch(removeNoticeWithFavorite(_id));
    }
  };

  const onClickDeleteButton = () => {
    // console.log('DELETE', _id);
    // console.log(userId);
    // console.log('OWNER', owner);
    dispatch(removeNotice(_id));
  };

  return (
    <Item key={_id}>
      <Image src={url ?? noImage} alt="pet" minwidth={288} height={288} />
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

      <AddToFavoriteBtn onClick={onClickFavoriteButton}>
        {isFavorite ? <FavoriteIcon /> : <AddIcon />}
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

        <DeleteBtn
          onClick={onClickDeleteButton}
          style={isDisplayed ? {} : { display: 'none' }}
        >
          Delete
          <DelIcon />
        </DeleteBtn>
      </Container>
    </Item>
  );
}

export default OurFriensItem;
