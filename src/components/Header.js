import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const Header = () => (
  <header className="sidenav">
    <img src="images/st-black.png" alt="Logo" className="logo"/>
    <div className="sidenav__icons">
      <NavLink to="/" activeClassName="is-active" exact={true}><Icon name="icon-home"/></NavLink>
      <NavLink to="/about" activeClassName="is-active" exact={true}><Icon name="icon-user"/></NavLink>
      <NavLink to="/portfolio" activeClassName="is-active" exact={true}><Icon name="icon-briefcase"/></NavLink>
      <NavLink to="/tools" activeClassName="is-active" exact={true}><Icon name="icon-wrench"/></NavLink>
      <NavLink to="/contact" activeClassName="is-active"><Icon name="icon-mail"/></NavLink>
    </div>
    <div className="sidenav__link">
      <a href="#"><Icon name="icon-github" /></a>
      <a href="#"><Icon name="icon-linkedin" /></a>
    </div>
  </header>
);

export default Header;
