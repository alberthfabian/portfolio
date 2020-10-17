import React from 'react';
import { Section, Article } from './Style';
import { useServer } from '../../Context';
import TechnologiesUsed from '../../components/TechnologiesUsed'

const Projects = () => {

  const { DataProjects } = useServer();

  return (
    <Section id='Projects'>
      <h1>Projects</h1>
      <Article>
        {DataProjects.map(technology => (
          <span key={technology.id}>
            <TechnologiesUsed url={technology.url} name={technology.name} technologies={technology.technologies} src={technology.src}/>
          </span>
        ))}
      </Article>
    </Section>
  )
};

export default Projects;