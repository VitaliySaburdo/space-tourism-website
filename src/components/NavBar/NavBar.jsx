import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">00 HOME</NavLink>
          </li>
          <li>
            <NavLink to="/destination">01 DESTINATION</NavLink>
          </li>
          <li>
            <NavLink to="/crew">02 CREW</NavLink>
          </li>
          <li>
            <NavLink to="/technology">03 TECHNOLOGY</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
