import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/home">00 HOME</NavLink>
          </li>
          <li>
            <NavLink to="/home">01 DESTINATION</NavLink>
          </li>
          <li>
            <NavLink to="/home">02 CREW</NavLink>
          </li>
          <li>
            <NavLink to="/home">03 TECHNOLOGY</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
