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
            00 HOME
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/destination"
          >
            01 DESTINATION
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/crew"
          >
            02 CREW
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/technology"
          >
            03 TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </>
  );
};
