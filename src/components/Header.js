import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <h1>Expensify</h1>
      <NavLink activeClassName='is-active' to='/' exact>Dashboard</NavLink>
      <NavLink activeClassName='is-active' to='/create'>Create</NavLink>
      <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
    </div>
  </header>
);

export default Header;