import React from 'react';
import menu from '../../assets/img/Icons/Menu.png';
import { useServer } from '../../Context';
import { Div } from './Style';

const Menu = () => {

  const { modal } = useServer();

  return (
    <Div>
       <button onClick={() => modal(true)}>
        <img src={menu} alt='Burger'/>
       </button> 
    </Div>
  )
};

export default Menu;