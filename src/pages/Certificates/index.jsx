import React from 'react';
import { Div } from './Style';
import Sections from '../../components/Sections'
import ModalDiploma from '../../components/ModalDiploma';
import { useServer } from '../../Context';

const Certificates = () => {

  const { DataAreas } = useServer();
  
  return ( 
    <Div id='Diploma'>
      <ModalDiploma/>
      {DataAreas.map(area => (
        <span key={area.id}>
          <Sections name={area.name}/>
        </span>
      ))}
    </Div>
  )
};

export default Certificates;