import React from 'react';
import { Section, Article, Img, Pokedex, Babysitter, Golden, Technologies } from './Style';
import lookema from '../../assets/img/Lookema.jpg'
import babysitter from '../../assets/img/Babysitter.png';
import golden from '../../assets/img/Golden.png';



const Projects = () => {
  return (
    <Section id='Projects'>
      <h1>Projects</h1>
      <Article>
        <Babysitter>
          <figcaption>Babysitter</figcaption>
          <Img src={babysitter} alt='Babysitter'/>
          <Technologies>
            <h2>Tecnologías</h2>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>SASS</li>
              <li>Context</li>
              <li>Xd</li>
            </ul>
          </Technologies>
        </Babysitter>
        <Pokedex>
          <figcaption>Pokedex</figcaption>
          <Img src={lookema} alt='Lookema'/>
          <Technologies>
            <h2>Tecnologías</h2>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>SASS</li>
              <li>Context</li>
            </ul>
          </Technologies>
        </Pokedex>
        <Golden>
          <figcaption>Papelería Golden</figcaption>
          <Img src={golden} alt='Golden'/>
          <Technologies>
            <h2>Tecnologías</h2>
            <ul>
              <li>Wordpress</li>
              <li>Plugins</li>
              <li>Hosting</li>
              <li>Dominio</li>
              <li>Xd</li>
            </ul>
          </Technologies>
        </Golden>
      </Article>
    </Section>
  )
};

export default Projects;