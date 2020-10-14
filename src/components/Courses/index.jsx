import React from 'react';
import { Link } from 'react-router-dom';
import { Img } from './Style';
import { useServer } from '../../Context'

const Courses = (props) => {

  const { openDiploma } = useServer();

  const { type, name, url, id } = props;

  return (
    <Link to={`/certificates/${id}`} onClick={() => openDiploma(type, id)} >
      <Img src={url} alt={name}/>
    </Link>
  )
};

export default Courses;