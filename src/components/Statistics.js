import React from 'react';
import { planetsData } from './Data';
import '../css/statistics.css';

const Statistics = ({ planetName }) => {
  const planetHeadings = planetsData.filter(item => item.name === planetName);

  const displayStats = () => {
    return <section className="planet-stats-section planet-stats-section-flex">
    <div className="planet-stats planet-stats-flex">
      <h4 className="planet-stats-h4">Rotation Time</h4>
      <p className="planet-stats-h4-subtitle">{planetHeadings[0].rotation}</p>
    </div>
    <div className="planet-stats planet-stats-flex">
      <h4 className="planet-stats-h4">Revolution Time</h4>
      <p className="planet-stats-h4-subtitle">{planetHeadings[0].revolution}</p>
      </div>
    <div className="planet-stats planet-stats-flex">
      <h4 className="planet-stats-h4">Radius</h4>
      <p className="planet-stats-h4-subtitle">{planetHeadings[0].radius}</p>
    </div>
    <div className="planet-stats planet-stats-flex">
      <h4 className="planet-stats-h4">Average Temp.</h4>
      <p className="planet-stats-h4-subtitle">{planetHeadings[0].temperature}</p>
    </div>
  </section>
  };

  return (
    <div>{displayStats()}</div>
  );
};

export default Statistics;