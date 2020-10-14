import React from 'react';
import { Figure, Technologies, Img } from './Style';

const TechnologiesUsed = (props) => {

  const { src, name, technologies } = props;

  return (
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
  )
};

export default TechnologiesUsed;