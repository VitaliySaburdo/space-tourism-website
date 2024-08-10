import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header';
import style from './SharedLayout.module.scss';

export const SharedLayout = () => {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/':
        return 'url("/assets/images/home/background-home-desktop.jpg")';
      case '/destination':
        return 'url("/assets/images/destination/background-destination-desktop.jpg")';
      case '/crew':
        return 'url("/assets/images/crew/background-crew-desktop.jpg")';
      case '/technology':
        return 'url("/assets/images/technology/background-technology-desktop.jpg")';
      default:
        return 'none';
    }
  };

  const backgroundImage = getBackgroundImage();

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main
          className={style.main}
          style={{ backgroundImage: backgroundImage }}
        >
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
