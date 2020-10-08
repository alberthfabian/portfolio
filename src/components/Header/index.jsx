import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';
import { Logo, Head, Li, Ul, P, StyledLink, Nav } from './Style.jsx';

const Header = () => {

  return (
    <Head>
      <article>
        <StyledLink href='#Home'>
          <Logo src={logo} alt='Logo' />
        </StyledLink>
      </article>
      <Nav>
        <Ul>
          <Li>
            <StyledLink href='#Home'>
              <P>Home</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink href='#About'>
              <P>About</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/'>
              <P>Projects</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/'>
              <P>Skills</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/'>
              <P>Certificates</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/'>
              <P>Blog</P> 
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to='/'>
              <P>Contact</P> 
            </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </Head>
  );
};

export default Header;