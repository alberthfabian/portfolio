import React from 'react';
import { useServer } from '../../Context';
import NavbarMobil from '../NavbarMobile';
import cross from '../../assets/img/Icons/Cross.png';
import { Div, Section, Article } from './Style';

const Burger = () => {

  const { menu, modal } = useServer();

  return (
    <>
      {menu === false ?
        <Article>
          <Section>
            <div>
              <button onClick={() => modal(false)}>
                <img src={cross} alt='Cross'/>
              </button>
            </div>
            <NavbarMobil/>
          </Section>
        </Article> :
        <Div onClick={() => modal(false)}>
          <Section>
            <div>
              <button onClick={() => modal(false)}>
                <img src={cross} alt='Cross'/>
              </button>
            </div>
            <NavbarMobil/>
          </Section>
        </Div> 
      }
    </>
  )
};

export default Burger;