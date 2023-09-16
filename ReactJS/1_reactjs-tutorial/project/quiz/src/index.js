import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import AdminComponent from './components/admin/Admin';
import UserComponent from './components/user/User';
import HomeComponent from './components/home/Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomeComponent />,
        index: true
      },
      {
        path: "admin",
        element: <AdminComponent />
      },
      {
        path: "user",
        element: <UserComponent />
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
