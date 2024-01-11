import { atom } from 'recoil';

const usersAtom = atom({
  key: 'Users',
  default: {
    fetching: false,
    deleting: false,
    creating: false,
    error: null,
    selectedUserId: null,
    users: null,
  }
});

export default usersAtom;
