import React from 'react';
import { Section, Return } from './Style';
import { useServer } from '../../Context';

const Detail = () => {

  const { detail } = useServer();

  return (
    <Section>
      <article>
        <div>
          <img src={detail.img} alt={detail.title}/>
        </div>
        <h2>{detail.title}</h2>
          <Return to='/blog'>
            Return
          </Return>
        <p>{detail.description}</p>
        <Return to='/blog'>
          Return
        </Return>
      </article>
    </Section>
  )
};

export default Detail;