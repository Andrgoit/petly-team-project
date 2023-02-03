import {
  ImagesWrapper,
  Image,
  HomeWrapp,
  HomeTitle,
  HomeContainer,
} from './HomePage.styled';
import { MainContainer } from '../../components/App.styled';
import portrait from '../../img/portrait.png';
import portrait2x from '../../img/portrait@2x.png';
import portrait3x from '../../img/portrait@3x.png';
export default function HomePage() {
  return (
    <HomeContainer>
      <MainContainer>
        <HomeWrapp>
          <HomeTitle>Take good care of your small pets</HomeTitle>
          <ImagesWrapper>
            <Image
              srcSet={`${portrait} 300w, ${portrait2x} 768w, ${portrait3x} 1300w`}
              src={portrait}
              sizes="(min-width: 1300px) 590px, (min-width: 768px) 645px, 300px"
              alt="Girl with dog"
            ></Image>
          </ImagesWrapper>
        </HomeWrapp>
      </MainContainer>
    </HomeContainer>
  );
}
