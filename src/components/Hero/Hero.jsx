import { NavLink } from 'react-router-dom';
import AnimatedText from '../AnimatedText/AnimatedText';
import style from './Hero.module.scss';

export const Hero = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.shell}>
          <AnimatedText delay={0.4}>
            <p className={style.txt}>SO, YOU WANT TO TRAVEL TO</p>
          </AnimatedText>
          <AnimatedText delay={0.6}>
            <h1 className={style.title}>SPACE</h1>
          </AnimatedText>
          <AnimatedText delay={0.8}>
            <p className={style.article}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </AnimatedText>
        </div>
        <NavLink className={style.styledLink} to="/destination">
          EXPLORE
        </NavLink>
      </div>
    </>
  );
};
