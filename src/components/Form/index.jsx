import React, { useEffect, useState } from 'react';

import './index.css';

export default function AppForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(document.getElementById('app-form'));

    for (let i of data) {
      console.log(i);
    }
  }

  return (
    <form
      id='app-form'
      onSubmit={handleSubmit}
      className='app-form'
    >
      <label htmlFor='firstName'>First Name:</label>
      <input type='text' id='firstName' name='firstName'/>
      <label htmlFor='lastName'>Last Name:</label>
      <input type='text' id='lastName' name='lastName'/>
      <label htmlFor='birthday'>Birthday:</label>
      <input type='date' id='birthday' name='birthday'/>
      <label htmlFor='sendEmailsCheckBox'>Send Emails?</label>
      <input type='checkbox' id='sendEmailsCheckBox' name='sendEmailsCheckBox'/>
      <label htmlFor='comments' cols='100' rows='50'>Comments:</label>
      <textarea id='comments' name='comments'></textarea>
      <input type='submit' value='Submit' wrap='hard' />
    </form>
  )
}
