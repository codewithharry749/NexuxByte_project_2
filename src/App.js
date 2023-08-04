import './App.css';
import React from 'react';
import Navbar from './Conponents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Conponents/Home';
import Profile from './Conponents/Profile';
import List from './Conponents/List';
import Login from './Conponents/Login';
import Signup from './Conponents/Signup';

function App() {
  return (
    <div className="App">
<Navbar />
<Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/profile' element={<Profile />} />
  <Route exact path='/list' element={<List />} />
  <Route exact path='/login' element={<Login />} />
   <Route exact path='/signup' element={<Signup />} />
  <Route exact path='*' element={<Home />} />

</Routes>
    </div>
  );
}

export default App;
