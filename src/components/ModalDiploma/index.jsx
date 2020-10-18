import React from 'react';
import { Div, Article, Img, Button } from './Style';
import cross from '../../assets/img/Icons/Cross2.png'
import { useServer } from '../../Context';

const ModalDiploma = () => {

  const { onlyDiploma, diploma, modalOpen } = useServer();

  if (diploma === false) {
    return null;
  }

  return (
    <Div onClick={() => modalOpen(false)}> 
      <Article>
        <Button onClick={() => modalOpen(false)}>
          <img src={cross} alt='Close'/>
        </Button>
        <Img src={onlyDiploma.url} alt={onlyDiploma.name}/>
      </Article>
    </Div> 
  )
};

export default ModalDiploma;