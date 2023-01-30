import {
  ImagesWrapper,
  Image,
  HomeTitle,
  HomeContainer,
} from './HomePage.styled';
import portrait from '../../img/portrait.png';
export default function HomePage() {
  return (
    <HomeContainer>
      <HomeTitle>Take good care of your small pets</HomeTitle>
      <ImagesWrapper>
        <Image src={portrait}></Image>
      </ImagesWrapper>
    </HomeContainer>
  );
}
