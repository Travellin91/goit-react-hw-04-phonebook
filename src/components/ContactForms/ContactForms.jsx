import React, { useState } from 'react';
import './contactforms.css';
import { nanoid } from 'nanoid';

const ContactForms = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form-label">
        Імя
        <input
          className="contact-form-input"
          type="text"
          name="name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="contact-form-label">
        Номер
        <input
          className="contact-form-input"
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className="contact-form-button" type="submit">
        Добавити контакт
      </button>
    </form>
  );
};

export default ContactForms;
