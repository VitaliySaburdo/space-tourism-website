import { Container } from '../Container';
import Logo from '../../assets/images/shared/logo.svg';
import { NavBar } from '../NavBar';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <Container>
        <div className={style.shell}>
          <div className={style.container}>
            <img
              className={style.img}
              src={Logo}
              alt="logo"
              width={48}
              height={48}
            />
            <div className={style.decor}></div>
          </div>
          <NavBar />
        </div>
      </Container>
    </>
  );
};
