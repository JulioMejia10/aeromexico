import React from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';

export default function Home(props) {
  const handleSave = (name) => {
    const contact = filterContact(name);
    contact.colorIcon = 'icon';
    props.saveFavorite(contact);
  }

  const filterContact = (name) => {
    return props.students.find(item => {
      return item.name === name;
    })
  }

  return (
    <>
      <Card handleSave={handleSave} students={props.students} />
      <Modal handleSaveContact={props.handleSaveContact} handleClose={props.handleClose} modal={props.modal} />
    </>
  )
}
