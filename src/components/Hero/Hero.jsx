import style from './Hero.module.scss';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={style.container}
      >
        <div className={style.shell}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }} // Задержка 0.2 секунды
            className={style.txt}
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }} // Задержка 0.4 секунды
            className={style.title}
          >
            SPACE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }} // Задержка 0.6 секунды
            className={style.article}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </div>

        <NavLink className={style.styledLink} to="/destination">
          EXPLORE
        </NavLink>
      </motion.div>
    </>
  );
};
