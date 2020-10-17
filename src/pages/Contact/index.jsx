import React from 'react';
import ContactBox from '../../components/ContactBox';
import { DataContact } from '../../components/DataContact';
import { getIcon } from '../../components/Icons';
import { Section, Container, Div } from './Style.jsx';

const Contact = () => {
  return (
    <Section>
      <h1>Contact Me</h1>
      <Container>
        {DataContact.map(contact => (
          <Div key={contact.id}>
            <a href={contact.url} target='_blank' rel='noopener noreferrer'>
              <ContactBox id={contact.id} name={contact.name} description={contact.description} icon={getIcon(contact.name)} url={contact.url}/>
            </a>
          </Div>
        ))}
      </Container>
    </Section>
  )
};

export default Contact;