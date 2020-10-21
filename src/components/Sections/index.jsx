import React from 'react';
import Courses from '../../components/Courses';
import { H1, Figure, Section } from './Style';
import { useServer } from '../../Context';

const Sections = (props) => {
  
  const { DataDiplomas } = useServer();
  const { name } = props;

  function date(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }  

  return (
    <>
      <H1>{name}</H1>
      <Section>
        {DataDiplomas.filter(Diploma => Diploma.type === name).map(Diploma => (
          <Figure key={Diploma.id}>
            {Diploma.description.sort(date).map(value => (
              <span key={value.id}>
                {console.log(value)}
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