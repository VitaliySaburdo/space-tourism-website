import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef, useState, useEffect, useCallback } from 'react';
import { Header } from '../Header';
import { motion } from 'framer-motion';
import style from './SharedLayout.module.scss';

export const SharedLayout = () => {
  const location = useLocation();
  const mainRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  const getBackgroundImage = useCallback(() => {
    const screen = window.matchMedia('(max-width: 767px)').matches
      ? 'mobile'
      : window.matchMedia('(max-width: 1439px)').matches
      ? 'tablet'
      : 'desktop';

    switch (location.pathname) {
      case '/':
        return `url("/assets/images/home/background-home-${screen}.jpg")`;
      case '/destination':
        return `url("/assets/images/destination/background-destination-${screen}.jpg")`;
      case '/crew':
        return `url("/assets/images/crew/background-crew-${screen}.jpg")`;
      case '/technology':
        return `url("/assets/images/technology/background-technology-${screen}.jpg")`;
      default:
        return 'none';
    }
  }, [location.pathname]);

  useEffect(() => {
    const updateBackgroundImage = () => {
      setBackgroundImage(getBackgroundImage());
    };
    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, [getBackgroundImage]);

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <motion.main
          ref={mainRef}
          className={style.main}
          style={{ backgroundImage: backgroundImage }}
          initial={{ backgroundSize: '120%' }}
          animate={{ backgroundSize: '125%' }}
          transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
          key={location.pathname}
        >
          <Outlet />
        </motion.main>
      </Suspense>
    </>
  );
};
