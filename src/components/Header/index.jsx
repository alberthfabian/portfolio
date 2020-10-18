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
      {/* <Nav>
        <Ul>
          <Li>
            <StyledLink to='/'>
              <P>Home</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/about'>
              <P>About</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/projects'>
              <P>Projects</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/skills'>
              <P>Skills</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/certificates'>
              <P>Certificates</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/blog'>
              <P>Blog</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/contact'>
              <P>Contact</P> 
            </StyledLink>
          </Li>
        </Ul>
      </Nav> */}
    </Head>
  );
};

export default Header;