import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Hero } from '../components/Hero';

export const HomePage = () => {
  return (
    <>
      <Section>
        <Container>
          <Hero />
        </Container>
      </Section>
    </>
  );
}
