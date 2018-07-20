import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div className="container transition-item detail-page">
    <div className="container__left container__left--3">
      <h1 className="heading-1">My Work</h1>
      <p className="description">Checkout the stuff I've done:</p>
      <Link to="/portfolio/1">Item One</Link>
      <Link to="/portfolio/2">Item Two</Link>
    </div>
    <div className="container__right container__right--2"></div>
  </div>
);

export default PortfolioPage;