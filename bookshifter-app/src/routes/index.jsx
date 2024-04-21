import {
    createBrowserRouter, Outlet, RouterProvider,
  } from 'react-router-dom';
import home from './home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import login from './login';
import signUp from './signUp';
import searchBooks from './searchBooks';
  
  const routes = [{
    path: '',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      ...home,
      ...searchBooks,
    ],
  },
];
  
  export default function RoutesApp() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: (
          <Outlet />
        ),
        children: [
          ...login,
          ...signUp,
          ...routes,
        ],
      },
    ]);
  
    return (
      <RouterProvider router={router} />
    );
  }
  