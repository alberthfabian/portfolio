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
            <ContactBox name={contact.name} description={contact.description} icon={getIcon(contact.name)}/>
          </Div>
        ))}
      </Container>
    </Section>
  )
};

export default Contact;