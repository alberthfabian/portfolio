import React from 'react';
import { Img, Button } from './Style';
import { useServer } from '../../Context';

const Courses = (props) => {

  const { openDiploma, modalOpen } = useServer();

  const { type, name, url, id } = props;

  const open = (type, id, value) => {
    openDiploma(type, id);
    modalOpen(value);
  }

  return (
    <Button onClick={() => open(type, id, true)} >
      <Img src={url} alt={name}/>
    </Button>
  )
};

export default Courses;