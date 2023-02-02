import {
  StyledLink,
  TextWrapper,
  ImagesWrapper,
  Image,
  Title,
  Container,
  Line,
} from './NotFoundPage.styled';
import puppy from '../../img/puppy.png';
export default function NotFoundPage() {
  return (
    <Container>
      <TextWrapper>
        <Title>
          Whooops!
          <br />
          Page Not Found
        </Title>
        <StyledLink to="/">Return to Homepage</StyledLink>
        <Line />
      </TextWrapper>
      <ImagesWrapper>
        <Image src={puppy} alt="Puppy"></Image>
      </ImagesWrapper>
    </Container>
  );
}
