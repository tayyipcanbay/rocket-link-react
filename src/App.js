import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import User from './pages/user';
import Login from './pages/login';
import Home from './pages/home';
import Admin from './pages/admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/user'>
            <Route path=":username" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
