import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export const NavBar = ({ onCloseBtn }) => {
  const getNavLinkClass = (isActive) => {
    return isActive ? `${styles.nav} ${styles.active}` : styles.nav;
  };

  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <NavLink
            onClick={onCloseBtn}
            style={{ display: 'flex' }}
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/"
          >
            <span className={`${styles.number} ${styles.home}`}>00</span>HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onCloseBtn}
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/destination"
          >
            <span className={styles.number}>01</span>DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onCloseBtn}
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/crew"
          >
            <span className={styles.number}>02</span>CREW
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onCloseBtn}
            className={({ isActive }) => getNavLinkClass(isActive)}
            to="/technology"
          >
            <span className={styles.number}>03</span>TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
