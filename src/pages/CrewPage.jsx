import { Container } from '../components/Container';
import { Crew } from '../components/Crew';
import { Section } from '../components/Section';

export const CrewPage = ({ data }) => {
  return (
    <>
      <Section>
        <Container>
          <Crew data={data} />
        </Container>
      </Section>
    </>
  );
};
