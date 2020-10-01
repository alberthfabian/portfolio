import React from 'react';
import background from '../../assets/img/Background.jpg';
import alberth from '../../assets/img/Alberth.jpeg';
import { Mountains, Photo, Div, Name, Frontend, Data } from './Style';

const Home = () => {
  return (
    <div>
      <Div>
        <Mountains src={ background } alt='Mountains'/>
        <Photo src={ alberth } alt='Alberth Perez'/>
        <Data>
          <Name>Alberth Fabian Pérez Mendivelso</Name>
          <Frontend>Frontend Developer - React Specialist</Frontend>
      </Data>
      </Div>
    </div>
  );
};

export default Home;