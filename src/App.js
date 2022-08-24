import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './Components/Header/TopMenu';
import Banner from './Components/Header/Banner'
import Nav from './Components/Header/NavMenu'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className='app'>
      <TopMenu/>
      <Nav/>
      <Home/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
