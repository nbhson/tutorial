import React from 'react';
import './App.scss';
import NavbarComponent from './components/nav-bar/Navbar'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <NavbarComponent></NavbarComponent>
      <Outlet />
    </React.Fragment>
  )
}

export default App;
