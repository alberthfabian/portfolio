import React from 'react';
import { useServer } from '../../Context';
import NavbarMobil from '../NavbarMobile';
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