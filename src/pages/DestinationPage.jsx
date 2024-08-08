import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Destination } from '../components/Destination';

export const DestinationPage = ({data}) => {
  return (
    <>
      <Section>
        <Container>
          <Destination data={data} />
        </Container>
      </Section>
    </>
  );
}
