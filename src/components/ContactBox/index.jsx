import React from 'react';
import { Article, Img, A } from './Style';

const ContactBox = (props) => {

  const { id, name, description, icon } = props;

  return (
    <>
      <Article>
        <h3>{name}</h3>
        {id > 3 ?
          <a href={description} target='_blank' rel='noopener noreferrer'>
            <p>{description}</p>
          </a> :
          <p>{description}</p>
        }
      </Article>
      {id > 3 ?
        <A href={description} target='_blank' rel='noopener noreferrer'>
          <Img src={icon} alt={name}/>
        </A> :
        <Img src={icon} alt={name}/>
      }
    </>
  )
};

export default ContactBox;