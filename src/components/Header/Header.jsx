import { Container } from '../Container';
import Logo from '../../assets/images/shared/logo.svg';
import { NavBar } from '../NavBar';

export const Header = () => {
  return (
    <>
      <Container>
        <img src={Logo} alt="logo" />
        <div></div>
        <NavBar />
      </Container>
    </>
  );
};
