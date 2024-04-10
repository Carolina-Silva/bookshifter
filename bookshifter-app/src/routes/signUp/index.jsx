// import { Outlet, RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import SignUp from '../../pages/SignUp';
import Login from '../../pages/Login';


export default [
  {
    path: '/signup',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <SignUp />,
      },
   
      {
        path: 'login',
        element: <Login />,
      },

    ],
  },
];
