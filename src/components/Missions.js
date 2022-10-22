import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((currMission) => (
          <MissionCard
            key={ currMission.name }
            name={ currMission.name }
            year={ currMission.year }
            country={ currMission.country }
            destination={ currMission.country }
          />))}
      </div>
    );
  }
}

export default Missions;
