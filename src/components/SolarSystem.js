import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((currPlanet) => (
          <PlanetCard
            key={ currPlanet.name }
            planetName={ currPlanet.name }
            planetImage={ currPlanet.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
