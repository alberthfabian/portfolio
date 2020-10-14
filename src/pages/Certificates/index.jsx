import React from 'react';
import Courses from '../../components/Courses';
import { Div } from './Style';
import { useServer } from '../../Context';

const Certificates = () => {

  const { Diplomas } = useServer();

  return (
    <Div id='Diploma'>
      <h1>Careers</h1>
      <section>
        {Diplomas.filter(Diploma => Diploma.type === 'Career').map(Diploma => (
          <figure key={Diploma.id}>
            <Courses id={Diploma.id} name={Diploma.name} url={Diploma.url}/>
          </figure>
        ))}
      </section>
      <h1>Startups</h1>
      <section>
        {Diplomas.filter(Diploma => Diploma.type === 'Startups').map(Diploma => (
          <figure key={Diploma.id}>
            <Courses id={Diploma.id} name={Diploma.name} url={Diploma.url}/>
          </figure>
        ))}
      </section>
    </Div>
  )
};

export default Certificates;