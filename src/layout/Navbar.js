import React from 'react';

import { NavLink } from 'react-router-dom';

import { ListUL } from '../styles/NavbarStyle';

const Navbar = () => {
  return (
    <>
      <ListUL>
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/fundamental">
            Fundamental
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/fetching">
            Fetching Data in Hook
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/form">
            Working Form using Hook
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none' }} to="/crud">
            CRUD in Hook
          </NavLink>
        </li>
      </ListUL>
    </>
  );
};

export default Navbar;
