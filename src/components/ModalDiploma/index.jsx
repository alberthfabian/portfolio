import React from 'react';
import { Div, Article, Img, Button } from './Style';
import { useServer } from '../../Context';

const ModalDiploma = () => {

  const { onlyDiploma, showDiploma, closeDiploma } = useServer();

  if (showDiploma === false) {
    return null;
  }

  return (
    <Div>
      <Article>
        <Button id='x' value='x' onClick={closeDiploma}>X</Button>
        <Img src={onlyDiploma.url} alt={onlyDiploma.name}/>
      </Article>
    </Div> 
  )
};

export default ModalDiploma;