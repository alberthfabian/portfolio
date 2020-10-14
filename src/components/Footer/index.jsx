import React from 'react';
import linkedIn from '../../assets/img/linkedIn.png';
import instagram from '../../assets/img/Instagram.png';
import twitter from '../../assets/img/Twitter.png';
import gitHub from '../../assets/img/GitHub.png';
import { FooterStyle, P, Name, LinkedIn, Instagram, Twitter, GitHub } from './Style';

const Footer = () => (
  <FooterStyle>
    <Name>Alberth Pérez</Name>
    <a href='https://www.linkedin.com/in/alberth-fabian-perez-mendivelso/' target='_blank' rel='noopener noreferrer'>
      <LinkedIn src={ linkedIn } alt='LinkedIn'/>
    </a>
    <a href='https://www.instagram.com/alberthfabianperez/' target='_blank' rel='noopener noreferrer'>
      <Instagram src={ instagram } alt='Instagram'/>
    </a>
    <a href='https://twitter.com/AlberthPrez3' target='_blank' rel='noopener noreferrer'>
      <Twitter src={ twitter } alt='Instagram'/>
    </a>
    <a href='https://github.com/alberthfabian' target='_blank' rel='noopener noreferrer'>
      <GitHub src={ gitHub } alt='Instagram'/>
    </a>
    <P>All Right Reserved &copy; 2020</P>
  </FooterStyle>
);

export default Footer;