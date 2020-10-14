import React from 'react';
import { Div } from './Style';
import Bar from '../../components/Bar';
import { useServer } from '../../Context'


const Skills = () => {

  const { Technologies } = useServer();

  return (
    <Div id='Skills'>
      <h1>Skills</h1>
      <section>
        {Technologies.map(technology => (
          <span key={technology.id}>
            <Bar name={technology.name} percentage={technology.percentage}/>
          </span>
        ))}
      </section>
    </Div>
  )
};

export default Skills;