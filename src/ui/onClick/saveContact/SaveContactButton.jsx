import React from 'react';

class SaveContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.saveContact = this.saveContact.bind(this);
  }

  saveContact() {
    const contact = {
      name: {
        givenName: 'John',
        familyName: 'Doe'
      },
      emails: [
        {
          type: 'home',
          value: 'john.doe@example.com'
        }
      ],
      phoneNumbers: [
        {
          type: 'mobile',
          value: '1234567890'
        }
      ]
    };

    if (navigator.contacts) {
      navigator.contacts.save(contact, () => {
        alert('Contact saved successfully!');
      }, (error) => {
        alert('Error saving contact: ' + error);
      });
    } else {
      alert('El API de Contactos no está disponible en este navegador.');
    }
  }

  render() {
    return (
      <p onClick={this.saveContact}>Guardar Contacto</p>
    );
  }
}

export default SaveContactButton;
