import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Vaca Expenses</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> &nbsp;&nbsp;&nbsp;
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> &nbsp;&nbsp;&nbsp;
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;