import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  const getNavLinkClass = (isActive) => {
    return isActive ? `${styles.nav} ${styles.active}` : styles.nav;
  };

  return (
    <>
      <ul className={styles.container}>
        <li className="">
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/"
          >
            <span className={styles.number}>00</span>HOME
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/destination"
          >
            <span className={styles.number}>01</span>DESTINATION
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/crew"
          >
            <span className={styles.number}>02</span>CREW
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/technology"
          >
            <span className={styles.number}>03</span>TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </>
  );
};
