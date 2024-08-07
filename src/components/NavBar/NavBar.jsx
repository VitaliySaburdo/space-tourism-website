import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <>
      <ul className={styles.container}>
        <li className="">
          <NavLink className="" to="/">
            00 HOME
          </NavLink>
        </li>
        <li className="">
          <NavLink className="" to="/destination">
            01 DESTINATION
          </NavLink>
        </li>
        <li className="">
          <NavLink className="" to="/crew">
            02 CREW
          </NavLink>
        </li>
        <li className="">
          <NavLink className="" to="/technology">
            03 TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </>
  );
};
