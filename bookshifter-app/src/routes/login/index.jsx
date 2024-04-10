// import { Outlet, RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Login from '../../pages/Login';
// import ResetPassword from '../../pages/ResetPassword';
// import Register from '../../pages/Register';

export default [
  {
    path: '/login',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    //   {
    //     path: 'resetPassword',
    //     element: <ResetPassword />,
    //   },
    //   {
    //     path: 'register',
    //     element: <Register />,
    //   },

    ],
  },
];
