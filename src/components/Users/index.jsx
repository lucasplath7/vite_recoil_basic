// Node Module Imports
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { useClickAway } from "@uidotdev/usehooks";

// Custom Imports
import Table from '../Table';
import Spinner from '../Spinner';
import usersAtom from '../../recoil_state/state/users'
import { userActions } from '../../recoil_state/actions';

// Styles
import './index.css';

export default function Home(props) {
  // Hooks
  const usersState = useRecoilValue(usersAtom);
  const {
    fetchAllUsers,
    createUser,
    deleteUser,
  } = userActions();

  useEffect(() => {
    if (!usersState.users && !usersState.fetching) {
      fetchAllUsers();
    }
  });

  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const clickAwayRef = useClickAway(() => { setAddUserDialogOpen(false) });

  // Helpers
  function mapUsersData() {
    const usersData = Object.entries(usersState.users).map((userEntry) => {
      const userObject = userEntry[1];
      const rowData = Object.entries(userObject).map((userProperty) => {
        return {
          columnName: userProperty[0],
          value: userProperty[1]
        }
      });

      rowData.push({
        columnName: '',
        value: <button onClick={ () => handleDeleteUser(rowData) }>X</button>
      })
      return rowData;
    });

    return usersData;
  }

  // Handlers
  function handleAddUser(event) {
    event.preventDefault();
    const data = new FormData(document.getElementById('app-form'));
    const userData = {}

    for (let i of data) {
      userData[i[0]] = i[1];
    }

    createUser(userData);
  }

  function handleDeleteUser(rowData) {
    const userId = rowData.find((field) =>  field.columnName === 'id').value;
    deleteUser(userId);
  }

  // Renderers
  function renderTable() {
    return (
      <div>
        <Table tableData={ mapUsersData() } />
        <button
          onClick={() => setAddUserDialogOpen(!addUserDialogOpen)}
          style={{float: 'right', margin: '10px'}}
        >
          Add User
        </button>
      </div>
    )
  }

  function renderAddUserForm() {
    return (
      <form
      id='app-form'
      onSubmit={ handleAddUser }
      className='app-form'
      >
        <label htmlFor='firstName'>First Name:</label>
        <input type='text' id='firstName' name='firstName' required/>
        <label htmlFor='lastName'>Last Name:</label>
        <input type='text' id='lastName' name='lastName' required/>
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' name='email' required/>
        <input type='submit' value='Submit' wrap='hard' />
      </form>
    )
  }

  function renderAddUserDialog() {
    return (
      <dialog open ref={clickAwayRef} className='create-user-dialog'>
        { usersState.creating ? renderSpinner() : renderAddUserForm() }
      </dialog>
    )
  }

  function renderSpinner() {
    return <Spinner />
  }

  return (
    <>
      { usersState.users ? renderTable() : renderSpinner() }
      { addUserDialogOpen ? renderAddUserDialog() : null }
    </>
  );
}