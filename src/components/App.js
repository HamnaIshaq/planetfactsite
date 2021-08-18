import React, { useState } from 'react';
import Header from './Header';
import PlanetDetails from './PlanetDetails';
import Statistics from './Statistics';
import '../css/global.css';

const App = () => {
  
  const [planetSelected, setPlanetSelected] = useState('Earth');

  const onPlanetClick = (planetNameClicked) => {
    setPlanetSelected(planetNameClicked);
  }

  return(
    <div>
      <Header planetCallback={onPlanetClick}/>
      <div className="container">
        <PlanetDetails planetName={planetSelected}/>
        <Statistics planetName={planetSelected}/>
      </div>
    </div>
  );
};

export default App;
