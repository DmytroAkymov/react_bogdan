import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="courses">Courses</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Menu;
