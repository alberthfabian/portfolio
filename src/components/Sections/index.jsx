import React from 'react';
import Courses from '../../components/Courses';
import { H1, Figure, Section } from './Style';
import { useServer } from '../../Context';

const Sections = (props) => {

  const { Diplomas } = useServer();
  const { name } = props;

  return (
    <>
      <H1>{name}</H1>
      <Section>
        {Diplomas.filter(Diploma => Diploma.type === name).map(Diploma => (
          <Figure key={Diploma.id}>
            {Diploma.description.map(value => (
              <span key={value.id}>
                <Courses type={Diploma.type} id={value.id} name={value.name} url={value.url}/>
              </span>
            ))}
          </Figure>
        ))}
      </Section>
    </>
  )
};

export default Sections;