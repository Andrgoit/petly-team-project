import { RegisterForm } from 'components/AuthForm/RegisterForm/RegisterForm';
import { Section, Container } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
}
