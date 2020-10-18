import React from 'react';
import { Li, Ul, P, StyledLink } from './Style.jsx';

const NavbarMovil = () => {
  return (
    <nav>
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
    </nav>
  )
};

export default NavbarMovil;