// Node Module Imports
import React from 'react';

// Styles
import './index.css';

export default function AppForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(
      document.getElementById('app-form'),
    );

    // overriding for demo purposes needing this syntax
    // eslint-disable-next-line no-restricted-syntax
    for (const i of data) {
      console.log(i);
    }
  }

  return (
    <form
      id="app-form"
      onSubmit={handleSubmit}
      className="app-form"
    >
      <label htmlFor="firstName">First Name:
        <input type="text" id="firstName" name="firstName" />
      </label>
      <label htmlFor="lastName">Last Name:
        <input type="text" id="lastName" name="lastName" />
      </label>
      <label htmlFor="birthday">Birthday:
        <input type="date" id="birthday" name="birthday" />
      </label>
      <label htmlFor="sendEmailsCheckBox">Send Emails?
        <input type="checkbox" id="sendEmailsCheckBox" name="sendEmailsCheckBox" />
      </label>
      <label htmlFor="comments" cols="100" rows="50">Comments:
        <textarea id="comments" name="comments" />
      </label>
      <input type="submit" value="Submit" wrap="hard" />
    </form>
  );
}
