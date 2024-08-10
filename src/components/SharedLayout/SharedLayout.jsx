import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { Header } from '../Header';
import { motion } from 'framer-motion';
import style from './SharedLayout.module.scss';

export const SharedLayout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

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
        <motion.main
          ref={mainRef}
          className={style.main}
          style={{ backgroundImage: backgroundImage }}
          initial={{ backgroundSize: '100%' }}
          animate={{ backgroundSize: '103%' }}
          transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
          key={location.pathname}
        >
          <Outlet />
        </motion.main>
      </Suspense>
    </>
  );
};
