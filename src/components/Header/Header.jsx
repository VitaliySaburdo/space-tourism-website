import { Container } from '../Container';
import Logo from '/assets/images/shared/logo.svg';
import MenuOpen from '/assets/images/shared/icon-hamburger.svg';
import MenuClose from '/assets/images/shared/icon-close.svg';
import { NavBar } from '../NavBar';
import style from './Header.module.scss';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={style.header}>
        <Container>
          <div className={style.shell}>
            <div className={style.container}>
              <img className={style.img} src={Logo} alt="logo" />
              <button onClick={toggleMenu} className={style.btn}>
                {isMenuOpen ? (
                  <img className={style.menuOpen} src={MenuOpen} alt="menu" />
                ) : (
                  <img className={style.menuClose} src={MenuClose} alt="menu" />
                )}
              </button>
              <div className={style.decor}></div>
            </div>
            <div className={style.deskTabMenu}>
              <NavBar />
            </div>
            <div className={style.mobileMenu}>
              <NavBar />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
