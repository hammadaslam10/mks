import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './Components/Header/TopMenu';
import Nav from './Components/Header/NavMenu'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home';
import Nextrace from './pages/Nextrace';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className='app'>
      <TopMenu/>
      <Nav/>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/nextpage' element={<Nextrace/>}/>
        </Routes>
      </Router>
      <Footer/>
      </div>
    </>
  );
}

export default App;
