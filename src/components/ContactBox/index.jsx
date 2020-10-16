import React from 'react';
import { Article, Img } from './Style';

const ContactBox = (props) => {

  const { name, description, icon } = props;

  return (
    <>
      <Article>
        <h3>{name}</h3>
        <p>{description}</p>
      </Article>
      <Img src={icon} alt={name}/>
    </>
  )
};

export default ContactBox;