import React from 'react';
import { useServer } from '../../Context';
import NavbarMobil from '../NavbarMobile';
import cross from '../../assets/img/Icons/Cross.png';
import { Div, Section, Article } from './Style';

const Burger = () => {

  const { menu, modal } = useServer();

  const event = () => {
    modal(false);
  }

  return (
    <>
      {menu === true ?
        <Div onClick={() => event()}>
          <Section>
            <div>
              <button onClick={() => modal(false)}>
                <img src={cross} alt='Cross'/>
              </button>
            </div>
            <NavbarMobil/>
          </Section>
        </Div> : 
        <Article>
          <Section>
            <NavbarMobil/>
          </Section>
        </Article>
      }

    </>
  )
};

export default Burger;