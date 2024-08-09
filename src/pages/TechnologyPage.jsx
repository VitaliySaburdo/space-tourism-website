import { Container } from '../components/Container';
import { Technology } from '../components/Technology/Technology';

export const TechnologyPage = ({ data }) => {
  return (
    <>
      <Container>
        <Technology data={data} />
      </Container>
    </>
  );
};
