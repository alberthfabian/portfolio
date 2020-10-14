import React from 'react';
import { Photo, Section, Div, Data, Info } from './Style';
import alberth from '../../assets/img/Alberth.jpeg';

const About = () => {
  return (
    <Div id='About'>
      <Section> 
        <Photo src={alberth} alt='Alberth Perez'/>
        <Info>
          <h1>About Me</h1>
          <p>
            My name is Alberth Pérez, Frontend developer and React specialist, I live in the city of Bogotá (Colombia), I am passionate and dedicated to my work, I have the knowledge and ability to develop and build websites according to the specific needs of each user.
          </p>
          <Data>
            <p>Name: Alberth Pérez</p>
            <p>Age: 36</p>
            <p>Phone: (+57) 322-8107821</p>
            <p>Country: Colombia</p>
            <p>Linkedin: https://bit.ly/3kEUUH9</p>
            <p>City: Bogotá</p>
            <p>Instagram: https://bit.ly/32VoDp6</p>
          </Data>
        </Info>
      </Section>
    </Div>
  )
};

export default About;