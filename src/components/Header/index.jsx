import React from 'react';
import Menu from '../Menu';
import logo from '../../assets/img/Logo.png';
import Navbar from '../Navbar';
import { Logo, Head, StyledLink } from './Style.jsx';

const Header = () => {

  return (
    <Head>
      <article>
        <StyledLink to='/'>
          <Logo src={logo} alt='Logo' />
        </StyledLink>
      </article>
      <Menu/>
      <Navbar/>
    </Head>
  );
};

export default Header;