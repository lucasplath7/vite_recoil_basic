// Custom Components
import Layout from './components/Layout';
import Home from './components/Home';
import AppForm from './components/Form';
import Spinner from './components/Spinner';
import AppTable from './components/Table';
import Animation from './components/Animation';
import Users from './components/Users';

export default [
  {
    path: "/",
    element: <Layout />,
    id: 'home-path-root',
    children: [
      {
        path: '/',
        id: 'home-path',
        forNav: true,
        label: 'HOME',
        element: <Home />
      },
      {
        path: '/form',
        id: 'form-path',
        forNav: true,
        label: 'FORM',
        element: <AppForm />
      },
      {
        path: '/spinner',
        id: 'spinner-path',
        forNav: true,
        label: 'SPINNER',
        element: <Spinner />
      },
      {
        path: '/table',
        id: 'table-path',
        forNav: true,
        label: 'TABLE',
        element: <AppTable />
      },
      {
        path: '/animation',
        id: 'animation-path',
        forNav: true,
        label: 'ANIMATION',
        element: <Animation />
      },
      {
        path: '/users',
        id: 'users-path',
        forNav: true,
        label: 'USERS',
        element: <Users />
      },
    ]
  },
]