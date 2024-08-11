import { Container } from '../Container';
import Logo from '/assets/images/shared/logo.svg';
import MenuOpen from '/assets/images/shared/icon-hamburger.svg';
import MenuClose from '/assets/images/shared/icon-close.svg';
import { NavBar } from '../NavBar';
import style from './Header.module.scss';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMobileMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={style.header}>
        <Container>
          <div className={style.shell}>
            <div className={style.container}>
              <img className={style.img} src={Logo} alt="logo" />
              <button onClick={openMobileMenu} className={style.btn}>
                <img className={style.menuOpen} src={MenuOpen} alt="menu" />
              </button>
              <div className={style.decor}></div>
            </div>
            <div className={style.deskTabMenu}>
              <NavBar />
            </div>
            <div
              className={style.mobileMenu}
              style={{
                transform: isMenuOpen && 'translateX(0)',
              }}
            >
              <button onClick={closeMobileMenu} className={style.btn}>
                <img className={style.menuClose} src={MenuClose} alt="menu" />
              </button>
              <NavBar />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
