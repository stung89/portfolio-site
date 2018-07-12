import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div className="container transition-item detail-page">
  {/* update this to cover entire page */}
    <div className="container__left">
      <h1>My Work</h1>
      <p>Checkout the stuff I've done:</p>
      <Link to="/portfolio/1">Item One</Link>
      <Link to="/portfolio/2">Item Two</Link>
    </div>
  </div>
);

export default PortfolioPage;