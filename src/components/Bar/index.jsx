import React from 'react';
import { BarValue, Value } from './Style';

const Bar = ( props ) => {

  const { name, percentage } = props;

  return (
    <article>
      <h4>{name}</h4>
      <BarValue>
        <Value style={{width: `${percentage}`}}><p>{percentage}</p></Value>
      </BarValue>
    </article>
  )
};

export default Bar;