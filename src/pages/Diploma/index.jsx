import React from 'react';
import { Section, Img, LinkButton } from './Style';
import { useServer } from '../../Context';

const Diploma = () => {

  const { onlyDiploma } = useServer();

  return (
    <Section>
      <div>
        <button><LinkButton to='/certificates'>Return</LinkButton></button>
      </div>
      <article>
        <Img src={onlyDiploma.url} alt={onlyDiploma.name}/>
      </article>
    </Section>
  )
};

export default Diploma;