import React from 'react';
import { useServer } from '../../Context';
import NavbarMovil from '../NavbarMovil';
import cross from '../../assets/img/Icons/Cross.png';
import { Div, Section, Article } from './Style';

const Burger = () => {

  const { menu, modal } = useServer();

  if(menu === false) {
    return null;
  }

  return (
    <>
      {menu === true ?
        <Div>
          <Section>
            <div>
              <button onClick={() => modal(false)}>
                <img src={cross} alt='Cross'/>
              </button>
            </div>
            <NavbarMovil/>
          </Section>
        </Div> : 
        <Article>
          <Section>
            <NavbarMovil/>
          </Section>
        </Article>
      }

    </>
  )
};

export default Burger;