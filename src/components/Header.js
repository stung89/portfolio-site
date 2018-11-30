import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

class Header extends React.Component {
  render() {
    return (
      <header className="sidenav">
        <img src="images/st-dark-grey.png" alt="Logo" className="logo"/>
        <div className="sidenav__icons">
          <NavLink to="/" activeClassName="is-active" exact={true}><Icon name="icon-home"/></NavLink>
          <NavLink to="/about" activeClassName="is-active"><Icon name="icon-user"/></NavLink>
          <NavLink to="/portfolio" activeClassName="is-active"><Icon name="icon-briefcase"/></NavLink>
          <NavLink to="/tools" activeClassName="is-active"><Icon name="icon-wrench"/></NavLink>
          <NavLink to="/contact" activeClassName="is-active"><Icon name="icon-mail"/></NavLink>
        </div>
        <div className="sidenav__link">
          <a href="#"><Icon name="icon-github" /></a>
          <a href="#"><Icon name="icon-linkedin" /></a>
        </div>
      </header>
    )
  }
};

export default Header;
