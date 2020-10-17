import React from 'react';
import { I, A } from './Style';

const WhatsApp = () => {
  return (
    <>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />
      <A href='https://api.whatsapp.com/send?phone=573228107821' target='_blank'>
        <I className='fa fa-whatsapp' />
      </A>
    </>
  )
};

export default WhatsApp;