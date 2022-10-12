import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Register from './pages/register';
import User from './pages/user';
import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
