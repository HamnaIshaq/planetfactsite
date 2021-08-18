import React from 'react';
import { planetsData } from './Data';
import '../css/global.css';
import '../css/header.css';

const Header = ({ planetCallback }) => {
  
  const onLinkClick = (planetName) => {
    planetCallback(planetName);
  }
  
  const planetNames = planetsData.map(item => {
    return (
      <li key={item.name} className="nav-list-item">
        
        <button className="nav-list-item-btn" onClick={() => onLinkClick(item.name)}>
          <span className="planet-span"></span>
          {item.name}
          <i className="fas fa-chevron-right planet-chevron-icon"></i> 
        </button>  
      </li>
    );
  });

  return(
    <header className="header-flex">
      <h1 className="logo">The planets</h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
      <nav className="nav">
        <ul className="nav-list nav-list-flex">
          {planetNames}
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Header; 