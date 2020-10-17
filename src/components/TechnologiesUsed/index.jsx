import React from 'react';
import { Figure, Technologies, Img, A } from './Style';

const TechnologiesUsed = (props) => {

  const { src, name, technologies, url } = props;

  return (
    <A href={url} target='_blank' rel='noopener noreferrer'>
      <Figure>
        <figcaption>{ name }</figcaption>
        <Img src={ src } alt={ name }/>
        <Technologies>
          <h2>Tecnologías</h2>
          <ul>
            {technologies.map((technology, index) => (
              <li key={index}>
                {technology}
              </li>
            ))}
          </ul>
        </Technologies>
      </Figure>
    </A>
  )
};

export default TechnologiesUsed;