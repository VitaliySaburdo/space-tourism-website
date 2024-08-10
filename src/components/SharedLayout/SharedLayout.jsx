import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header';
import style from './SharedLayout.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

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
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            className={style.main}
            style={{ backgroundImage: backgroundImage }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </Suspense>
    </>
  );
};
