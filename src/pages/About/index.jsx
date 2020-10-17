import React from 'react';
import { Photo, Section, Div, Data, Info, Grid } from './Style';
import { DataAlberth } from '../../components/DataAlberth';
import { getIcon } from '../../components/Icons';
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
            {DataAlberth.map(data => (
              <Grid key={data.id}>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <img src={getIcon(data.name)} alt={data.name}/>
                  <p>{data.description}</p>
                </a>
              </Grid>
            ))}
          </Data>
        </Info>
      </Section>
    </Div>
  )
};

export default About;