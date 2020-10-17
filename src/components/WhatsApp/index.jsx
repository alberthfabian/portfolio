import React from 'react';
import { A, Img, Chat } from './Style';
import whatsAppImg from '../../assets/img/Icons/WhatsApp.png'; 

const WhatsApp = () => {
  return (
    <>
      <A href='https://api.whatsapp.com/send?phone=573228107821' target='_blank'>
        <Chat>Chat with me</Chat><br/> 
        <Img src={whatsAppImg} alt='WhatsApp'/>
      </A>
    </>
  )
};

export default WhatsApp;