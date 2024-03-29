// Node Module Imports
import { useRecoilState } from 'recoil';
import axios from 'axios';

// Custom Imports
import usersAtom from '../../state/users';

function userActions() {
  const [users, setUsers] = useRecoilState(usersAtom);

  async function fetchAllUsers() {
    setUsers({
      ...users,
      fetching: true,
    });

    axios.get('http://localhost:3001/api/user')
      .then((resp) => {
        const userData = resp.data.reduce((acc, user) => {
          return {
            ...acc,
            [user.id]: user,
          };
        }, {});

        setUsers({
          ...users,
          users: userData,
          fetching: false,
        });
      })
      .catch((error) => {
        setUsers({
          ...users,
          fetching: false,
          error,
        });
      });
  }

  async function createUser(userData) {
    setUsers({
      ...users,
      creating: true,
    });

    axios.post('http://localhost:3001/api/user', userData)
      .then((resp) => {
        setUsers({
          ...users,
          users: {
            ...users.users,
            [resp.data]: {
              id: resp.data,
              first_name: userData.firstName,
              last_name: userData.lastName,
              email: userData.email,
            },
          },
          creating: false,
        });
      })
      .catch((error) => {
        setUsers({
          ...users,
          fetching: false,
          error,
        });
      });
  }

  async function deleteUser(userId) {
    setUsers({
      ...users,
      deleting: true,
    });

    axios.delete(`http://localhost:3001/api/user/${userId}`)
      .then(() => {
        const { [userId]: deletedUser, ...restOfUsers } = users.users;

        setUsers({
          ...users,
          users: { ...restOfUsers },
          deleting: false,
        });
      })
      .catch((error) => {
        setUsers({
          ...users,
          deleting: false,
          error,
        });
      });
  }

  return {
    createUser,
    fetchAllUsers,
    deleteUser,
  };
}

export default userActions;
