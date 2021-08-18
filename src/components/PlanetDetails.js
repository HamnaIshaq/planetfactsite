import React, { useState } from 'react';
import { planetsData } from './Data';
import '../css/planetDetails.css'

const PlanetDetails = ({ planetName }) => {

  const planetHeadings = planetsData.filter(item => item.name === planetName);

  const [planetInfo, setPlanetInfo] = useState('overview');

  const displayContent = () => {

    return <section className="planet-details planet-details-flex">
      <div className="planet-content planet-content-flex">
        <div className="planet-content-div">
          <h3 className="planet-name">{planetHeadings[0].name}</h3>
          <p className="planet-name-subtitle">{planetHeadings[0][`${planetInfo}`].content}</p>
          <div className="wiki-link-div">
            <span>Source : </span>
            <a className="planet-wiki-external-link" href={planetHeadings[0][`${planetInfo}`].source} target="_blank">Wikipedia</a>
            <span><i className="fas fa-external-link-square-alt planet-wiki-external-link-icon"></i></span>
          </div>
          
        </div>
        <div className="planet-content-btn-div planet-content-btn-flex">
          <button 
            onClick={(e) => onButtonClick(e)} 
            className="btn planet-content-btn" 
            id="overview"
          >
            <span>01</span>  
            Overview
          </button>
          <button 
            onClick={(e) => onButtonClick(e)} 
            className="btn planet-content-btn" 
            id="structure"
            >
              <span>02</span>
              Internal Structure
            </button>
          <button 
            onClick={(e) => onButtonClick(e)} 
            className="btn planet-content-btn" 
            id="geology"
          > 
            <span>03</span>
            Surface Geology
          </button> 
        </div>
      </div>

      <div className="planet-btn-div planet-btn-div-flex">
        <button onClick={(e) => onButtonClick(e)} className="btn planet-info-btn" id="overview">Overview</button>
        <button onClick={(e) => onButtonClick(e)} className="btn planet-info-btn" id="structure">Structure</button>
        <button onClick={(e) => onButtonClick(e)} className="btn planet-info-btn" id="geology">Geology</button> 
      </div>
      
      <div className="planet-img-div">
        <img src={planetHeadings[0].images[`${planetInfo}`]} className="planet-img" alt="Planet Image"/> 
      </div>
    
    </section>
  }

  const onButtonClick = (e) => { 
    const valueOfButtonClicked = e.target.id;
    
    setPlanetInfo(valueOfButtonClicked);
  };
  
  return(
    <div>
      {displayContent()}
    </div>
  );
};

export default PlanetDetails;
